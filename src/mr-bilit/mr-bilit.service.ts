import { Injectable, Logger } from '@nestjs/common';

import * as puppeteer from 'puppeteer';
import { JSDOM } from 'jsdom';

@Injectable()
export class MrBilitService {
  private readonly logger = new Logger(MrBilitService.name);

  async scrapeWebsite(url: string): Promise<any[]> {
    try {
      this.logger.log(`Scraping ${url}`);

      const browser = await puppeteer.launch({ headless: 'shell' });
      const page = await browser.newPage();

      await page.goto(url, { waitUntil: 'networkidle2' });

      const content = await page.content();

      // Use JSDOM for parsing, more robust than direct string manipulation
      const dom = new JSDOM(content);
      const document = dom.window.document;

      // Extract data based on the selector
      const elements = document.querySelectorAll('a');
      const scrapedData = [];

      elements.forEach((element) => {
        const data = this.extractDataFromElement(element); // Custom extraction logic
        if (data) {
          scrapedData.push(data);
        }
      });

      await browser.close();

      this.logger.log(`Scraping complete for ${url}`);

      return scrapedData;
    } catch (error) {
      this.logger.error(`Error in scrapping ${url}: ${error.message}`);
      throw new Error(`Failed to scrape website : ${error.message}`);
    }
  }

  private extractDataFromElement(element: Element): any {
    // Implement your custom extraction logic here based on the website structure.
    // Examples:
    const title = element.querySelector('h2')?.textContent?.trim();
    const link = element.querySelector('a')?.getAttribute('href');
    const textContent = element.textContent?.trim();
    const img = element.querySelector('img')?.getAttribute('src');

    if (title || link || textContent || img) {
      return {
        title,
        link,
        textContent,
        img,
      };
    }
    return null; // Return null if no data could be extracted from this element
  }
}
