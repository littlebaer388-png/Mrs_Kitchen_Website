MRS KITCHEN WEBSITE
===================

FILES
- index.html: website pages and sections
- styles.css: colours, layout and responsive design
- script.js: search, category filter, WhatsApp links and mobile menu
- products.js: product names, categories, descriptions and editable price/colour fields
- images/: all 102 product pictures extracted from the uploaded ZIP

OPEN LOCALLY
1. Extract Mrs_Kitchen_Website.zip to a folder on your computer.
2. Open the extracted folder.
3. Double-click index.html. It should open in Chrome, Edge or another modern browser.
4. Keep index.html, the JavaScript/CSS files and the images folder together.

EDIT PRODUCTS AND PRICES
1. Open products.js using Notepad, Visual Studio Code, or another text editor.
2. Each product has name, category, image, description, price and colours fields.
3. Prices are blank by default because no confirmed prices were provided. To add a price, edit e.g. "price": "299.00" (the site will display R 299.00).
4. Add colour/variation information in the "colours" field when confirmed.
5. Save the file and refresh the website.
6. Product image paths point to the included images folder. Do not rename or move images unless you also update their paths in products.js.
Note: some product titles/categories are best-effort descriptions based on the supplied photos. Please review and correct them before publishing. No product prices, stock, certifications or delivery promises have been invented.

WHATSAPP
All order buttons link to https://wa.me/27710331241 and create a message with the product name/item number. The contact number is displayed as 071 033 1241.

PUBLISH FOR FREE WITH GITHUB PAGES
1. Sign in to GitHub or create an account.
2. Create a new repository. For a user-site URL, name it USERNAME.github.io; alternatively create a normal repository for a project site.
3. Upload the contents of this folder (index.html, styles.css, script.js, products.js and images folder). Upload the files inside the folder, not the ZIP file alone.
4. In the repository, open Settings > Pages.
5. Under Build and deployment, choose Deploy from a branch, select the main branch and /(root), then Save.
6. Wait for GitHub Pages to publish, then open the website address shown in Settings > Pages.
7. Whenever you edit products.js or the site files, upload/commit the changes to GitHub; the live site will update after deployment.

IMPORTANT
- Prices were not included in the ZIP, so all items say "Price on request".
- The included pictures are the actual pictures extracted from the supplied ZIP. Several source photos are small/low-resolution, which can limit sharpness on large displays.
- The address and contact details are those provided in the request. Confirm that the address is suitable for public display before publishing.
- Google Maps directions open a search for the provided address; verify the map pin before sharing widely.
