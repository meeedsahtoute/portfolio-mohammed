import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    channel: 'msedge'
  });
  const context = await browser.newContext({
    viewport: { width: 3840, height: 2160 },
    deviceScaleFactor: 1
  });
  const page = await context.newPage();

  const outDir = 'C:\\Users\\Mohammed\\Desktop\\Portfolio\\public\\projects\\keftapdf';
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  console.log("Navigating to app...");
  await page.goto('http://localhost:3005');
  
  // Wait for 3D scene and intro animations
  await page.waitForTimeout(4000); 
  
  console.log("Taking homepage screenshot...");
  await page.screenshot({ path: path.join(outDir, '1-homepage.png') });

  console.log("Taking tool hover screenshot...");
  const mergeCard = page.locator('h4:text("Merge")').locator('..');
  await mergeCard.hover();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(outDir, '2-feature-hover.png') });

  console.log("Taking creator view screenshot...");
  const createCard = page.locator('h4:text("Create")').locator('..');
  await createCard.click();
  await page.waitForTimeout(2000); 
  await page.screenshot({ path: path.join(outDir, '3-creator-view.png') });
  
  // Go back
  console.log("Going back to home...");
  await page.locator('button:has-text("Back to Home")').click();
  await page.waitForTimeout(2000);

  console.log("Creating dummy PDF and uploading...");
  const dummyPdfPath = 'dummy.pdf';
  fs.writeFileSync(dummyPdfPath, '%PDF-1.4\n1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj\n2 0 obj<</Type/Pages/Count 1/Kids[3 0 R]>>endobj\n3 0 obj<</Type/Page/MediaBox[0 0 612 792]/Parent 2 0 R/Resources<<>>/Contents 4 0 R>>endobj\n4 0 obj<</Length 21>>stream\nBT /F1 24 Tf 100 700 Td (Hello World) Tj ET\nendstream\nendobj\nxref\n0 5\n0000000000 65535 f \n0000000009 00000 n \n0000000052 00000 n \n0000000109 00000 n \n0000000213 00000 n \ntrailer<</Size 5/Root 1 0 R>>\nstartxref\n285\n%%EOF');
  
  const fileChooserPromise = page.waitForEvent('filechooser');
  
  await page.locator('input[type="file"]').click({force: true});
  
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles(dummyPdfPath);
  
  console.log("Waiting for workspace to load...");
  await page.waitForTimeout(5000);
  
  console.log("Taking workspace screenshot...");
  await page.screenshot({ path: path.join(outDir, '4-workspace-view.png') });

  await browser.close();
  console.log("All screenshots captured successfully!");
})();
