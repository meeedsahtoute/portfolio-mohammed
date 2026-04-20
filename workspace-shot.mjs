import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    channel: 'msedge'
  });
  const context = await browser.newContext({ viewport: { width: 3840, height: 2160 }});
  const page = await context.newPage();
  
  await page.goto('http://localhost:3005');
  await page.waitForTimeout(2000);
  
  const dummyPdfPath = 'dummy2.pdf';
  fs.writeFileSync(dummyPdfPath, '%PDF-1.4\n1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj\n2 0 obj<</Type/Pages/Count 1/Kids[3 0 R]>>endobj\n3 0 obj<</Type/Page/MediaBox[0 0 612 792]/Parent 2 0 R/Resources<<>>/Contents 4 0 R>>endobj\n4 0 obj<</Length 21>>stream\nBT /F1 24 Tf 100 700 Td (Workspace Preview) Tj ET\nendstream\nendobj\nxref\n0 5\n0000000000 65535 f \n0000000009 00000 n \n0000000052 00000 n \n0000000109 00000 n \n0000000213 00000 n \ntrailer<</Size 5/Root 1 0 R>>\nstartxref\n291\n%%EOF');
  
  const fileChooserPromise = page.waitForEvent('filechooser');
  await page.evaluate(() => document.querySelector('input[type="file"]').click());
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles(dummyPdfPath);
  
  await page.waitForTimeout(4000);
  await page.screenshot({ path: 'C:\\Users\\Mohammed\\Desktop\\Portfolio\\public\\projects\\keftapdf\\4-workspace-view.png' });
  await browser.close();
})();
