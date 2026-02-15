import chromium from '@sparticuz/chromium';
import puppeteer from 'puppeteer-core';
import { buildHTMLReport } from './pdfTemplate.js';
import { existsSync } from 'fs';

export async function generatePDF(result) {
  let browser;

  try {
    console.log('[PDF] Starting PDF generation...');
    console.log('[PDF] Environment:', process.env.NODE_ENV);
    console.log('[PDF] Platform:', process.platform);

    // Validate input data
    if (!result || typeof result !== 'object') {
      throw new Error('Invalid result data provided to PDF generator');
    }

    // Launch browser with serverless-compatible config
    // Use VERCEL env variable to detect if we're in Vercel's serverless environment
    const isVercel = !!process.env.VERCEL || !!process.env.VERCEL_ENV;

    let executablePath;
    let launchArgs;
    
    if (isVercel) {
      // Running in Vercel - use chromium from @sparticuz/chromium
      console.log('[PDF] Configuring for Vercel serverless environment...');
      
      try {
        // Configure chromium for serverless with proper options
        executablePath = await chromium.executablePath({
          // This helps with finding the binaries in Vercel
          ...(process.env.FONTCONFIG_PATH && { FONTCONFIG_PATH: process.env.FONTCONFIG_PATH }),
        });
        
        launchArgs = [
          ...chromium.args,
          '--disable-gpu',
          '--disable-dev-shm-usage',
          '--disable-setuid-sandbox',
          '--no-first-run',
          '--no-sandbox',
          '--no-zygote',
          '--single-process',
        ];
      } catch (error) {
        console.error('[PDF] Error getting chromium path:', error);
        throw new Error(`Failed to configure Chromium: ${error.message}`);
      }
    } else {
      // Running locally - find local Chrome
      const possiblePaths = [];

      if (process.platform === 'win32') {
        possiblePaths.push(
          'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
          'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
        );
        if (process.env.LOCALAPPDATA) {
          possiblePaths.push(
            process.env.LOCALAPPDATA +
              '\\Google\\Chrome\\Application\\chrome.exe',
          );
        }
      } else if (process.platform === 'darwin') {
        possiblePaths.push(
          '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        );
      } else {
        possiblePaths.push(
          '/usr/bin/chromium-browser',
          '/usr/bin/chromium',
          '/usr/bin/google-chrome',
        );
      }

      // Find first existing path
      executablePath = possiblePaths.find((path) => existsSync(path));

      if (!executablePath) {
        throw new Error(
          `Chrome/Chromium not found. Tried paths: ${possiblePaths.join(', ')}. ` +
            'Please install Google Chrome or set CHROME_PATH environment variable.',
        );
      }
      
      launchArgs = ['--no-sandbox', '--disable-setuid-sandbox'];
    }

    console.log('[PDF] Is Vercel:', isVercel);
    console.log('[PDF] Executable path:', executablePath);
    console.log('[PDF] Launch args:', launchArgs?.slice(0, 3).join(', '), '...');

    browser = await puppeteer.launch({
      args: launchArgs,
      defaultViewport: chromium.defaultViewport,
      executablePath: executablePath,
      headless: true,
      ignoreHTTPSErrors: true,
    });

    console.log('[PDF] Browser launched successfully');

    const page = await browser.newPage();
    console.log('[PDF] New page created');

    const html = buildHTMLReport(result);
    console.log('[PDF] HTML report built, length:', html.length);

    await page.setContent(html, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });
    console.log('[PDF] Content set successfully');

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20px',
        right: '20px',
        bottom: '20px',
        left: '20px',
      },
    });

    console.log(
      '[PDF] PDF generated successfully, size:',
      pdfBuffer.length,
      'bytes',
    );
    return pdfBuffer;
  } catch (error) {
    console.error('[PDF] Error during PDF generation:', error);
    console.error('[PDF] Error stack:', error.stack);
    console.error('[PDF] Error details:', {
      message: error.message,
      name: error.name,
      code: error.code,
    });
    throw new Error(`PDF generation failed: ${error.message}`);
  } finally {
    // Ensure browser is always closed
    if (browser) {
      try {
        await browser.close();
        console.log('[PDF] Browser closed successfully');
      } catch (closeError) {
        console.error('[PDF] Error closing browser:', closeError);
      }
    }
  }
}
