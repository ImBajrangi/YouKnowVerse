import { chromium } from 'playwright';
import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const BASE_URL = 'http://localhost:4173';
const ARTIFACT_DIR = '/Users/sakhi/.gemini/antigravity/brain/64a5605b-c3e8-4944-87fc-8917910603f8/screenshots';
const LOCAL_DIR = '/Users/sakhi/Code/academicpro-india/screenshots';

fs.mkdirSync(ARTIFACT_DIR, { recursive: true });
fs.mkdirSync(LOCAL_DIR, { recursive: true });

async function saveAndConvert(page, name, fullPage = true) {
  const tmpPng = path.join(LOCAL_DIR, `${name}.png`);
  const localWebp = path.join(LOCAL_DIR, `${name}.webp`);
  const artifactWebp = path.join(ARTIFACT_DIR, `${name}.webp`);

  await page.screenshot({ path: tmpPng, fullPage });

  try {
    execSync(`/opt/homebrew/bin/cwebp -q 85 "${tmpPng}" -o "${localWebp}"`, { stdio: 'ignore' });
    fs.copyFileSync(localWebp, artifactWebp);
    fs.unlinkSync(tmpPng);
    console.log(`✓ Captured & converted to WebP: ${name}.webp`);
  } catch (err) {
    console.warn(`Fallback to png for ${name}:`, err.message);
    fs.copyFileSync(tmpPng, path.join(ARTIFACT_DIR, `${name}.png`));
  }
}

async function run() {
  console.log('Launching Playwright Chromium browser...');
  const browser = await chromium.launch({
    headless: true,
  });

  // 1. Desktop Browser Context (1440x900)
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  console.log('Capturing Desktop Views...');

  // 1. Home Page
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await saveAndConvert(page, '01-homepage-full', true);

  // 2. Services Page
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('button, a')).find(el => el.textContent?.trim() === 'Services');
    btn?.click();
  });
  await page.waitForTimeout(500);
  await saveAndConvert(page, '02-services-page', true);

  // 3. Service Detail Page (Thesis Editing)
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('button, a')).find(el => el.textContent?.includes('Thesis Editing'));
    btn?.click();
  });
  await page.waitForTimeout(500);
  await saveAndConvert(page, '03-service-detail-thesis-editing', true);

  // 4. How It Works Page
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('button, a')).find(el => el.textContent?.trim() === 'How It Works');
    btn?.click();
  });
  await page.waitForTimeout(500);
  await saveAndConvert(page, '04-how-it-works-page', true);

  // 5. Research Resources / Blog Page
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('button, a')).find(el => el.textContent?.trim() === 'Research Blog');
    btn?.click();
  });
  await page.waitForTimeout(500);
  await saveAndConvert(page, '05-resources-blog-page', true);

  // 6. Resources Article Detail
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('button, a')).find(el => el.textContent?.includes('Read Guide'));
    btn?.click();
  });
  await page.waitForTimeout(500);
  await saveAndConvert(page, '06-resources-article-detail', true);

  // 7. About Us Page
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('button, a')).find(el => el.textContent?.trim() === 'About Us');
    btn?.click();
  });
  await page.waitForTimeout(500);
  await saveAndConvert(page, '07-about-us-page', true);

  // 8. Contact Page (Mathura Center)
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('button, a')).find(el => el.textContent?.trim() === 'Contact');
    btn?.click();
  });
  await page.waitForTimeout(500);
  await saveAndConvert(page, '08-contact-mathura-office', true);

  // 9. Instant Quotation Calculator Page
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('button, a')).find(el => el.textContent?.includes('Request Quote') || el.textContent?.includes('Request a Free Quote'));
    btn?.click();
  });
  await page.waitForTimeout(500);
  await saveAndConvert(page, '09-quotation-calculator', true);

  // 10. Policies Page (Academic Integrity)
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('button, a')).find(el => el.textContent?.includes('Academic Integrity'));
    btn?.click();
  });
  await page.waitForTimeout(500);
  await saveAndConvert(page, '10-academic-integrity-policies', true);

  // 11. Scholar Workspace (Client Portal)
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('button, a')).find(el => el.textContent?.includes('Client Portal'));
    btn?.click();
  });
  await page.waitForTimeout(500);
  await saveAndConvert(page, '11-scholar-client-portal', true);

  // 12. Director Admin Dashboard
  await page.evaluate(() => {
    // Switch role to admin via navbar switcher
    const switcher = Array.from(document.querySelectorAll('button')).find(el => el.textContent?.includes('Role:'));
    switcher?.click();
  });
  await page.waitForTimeout(200);
  await page.evaluate(() => {
    const adminBtn = Array.from(document.querySelectorAll('button')).find(el => el.textContent?.includes('Admin (Director)'));
    adminBtn?.click();
  });
  await page.waitForTimeout(500);
  await saveAndConvert(page, '12-director-admin-dashboard', true);

  // 13. Consultation Booking Modal
  await page.evaluate(() => {
    const bookBtn = Array.from(document.querySelectorAll('button')).find(el => el.textContent?.includes('Book Consultation'));
    bookBtn?.click();
  });
  await page.waitForTimeout(400);
  await saveAndConvert(page, '13-booking-consultation-modal', false);

  // Close booking modal
  await page.keyboard.press('Escape');
  await page.waitForTimeout(200);

  // 14. Inquiry Form Modal
  await page.evaluate(() => {
    const quoteBtn = Array.from(document.querySelectorAll('button')).find(el => el.textContent?.includes('Add FAQ') === false && el.textContent?.includes('Inquiry'));
    quoteBtn?.click();
  });
  await page.waitForTimeout(400);
  await saveAndConvert(page, '14-inquiry-form-modal', false);

  await context.close();

  // 2. Mobile Viewport Context (iPhone 14 Pro: 393 x 852)
  console.log('Capturing Mobile Views (iPhone)...');
  const mobileContext = await browser.newContext({
    viewport: { width: 393, height: 852 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });
  const mobilePage = await mobileContext.newPage();

  await mobilePage.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(500);
  await saveAndConvert(mobilePage, '15-mobile-homepage-iphone', true);

  await mobileContext.close();
  await browser.close();

  console.log('All full-site screenshots captured and converted to WebP successfully!');
}

run().catch(err => {
  console.error('Error during screenshot capture:', err);
  process.exit(1);
});
