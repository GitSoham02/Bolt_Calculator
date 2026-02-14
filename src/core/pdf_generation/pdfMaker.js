import fs from 'node:fs/promises';
import path from 'node:path';
import puppeteer from 'puppeteer';
import { buildHTMLReport } from './pdfTemplate.js';

export async function generatePDF(result) {
  // const dataPath = path.join(
  //   process.cwd(),
  //   'src',
  //   'core',
  //   'data',
  //   'storedValue.json',
  // );
  // const storedData = await fs.readFile(dataPath, 'utf-8');
  // const result = JSON.parse(storedData);
  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();

  const html = buildHTMLReport(result);

  await page.setContent(html, { waitUntil: 'networkidle0' });

  const outputPath = path.join(
    process.cwd(),
    'src',
    'core',
    'data',
    'bolt-report.pdf',
  );

  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    path: outputPath,
  });

  await browser.close();

  //   await fs.writeFile(outputPath, pdfBuffer);

  return pdfBuffer;
}
// generatePDF()
