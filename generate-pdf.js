const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
  console.log('Starting PDF generation...');
  
  const browser = await puppeteer.launch({
    headless: 'new',
  });
  
  const page = await browser.newPage();
  
  // Load the HTML file
  const htmlPath = path.join(__dirname, 'public', 'Japheth_Rex_Cometa_Resume.html');
  const fileUrl = `file://${htmlPath}`;
  
  await page.goto(fileUrl, { waitUntil: 'networkidle0' });
  
  // Generate PDF
  const pdfPath = path.join(__dirname, 'public', 'Japheth_Rex_Cometa_Resume.pdf');
  
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '20px',
      right: '20px',
      bottom: '20px',
      left: '20px',
    },
  });
  
  await browser.close();
  
  console.log('PDF generated successfully at:', pdfPath);
}

generatePDF().catch(console.error);
