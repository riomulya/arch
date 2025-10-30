**Prompt for AI: Build a SEO-Friendly Company Profile and E-commerce Website with Next.js, Tailwind CSS, and Framer Motion**

**Project Overview:**  
You are an expert web developer AI tasked with building a professional, responsive, and SEO-friendly website for **PT ARCH CONTINENT TECH**. The website will serve as a company profile and an e-commerce platform to showcase and sell their primary product, **Plastik Core Tray**. The tech stack must be **Next.js** (with App Router), **Tailwind CSS** for styling, and **Framer Motion** for smooth animations and interactivity. The website must be optimized for search engines (SEO) from the ground up.

---

**Company Context:**

- **Name:** PT ARCH CONTINENT TECH
- **Business:** Wholesale trade of construction materials, technical equipment, and real estate services (based on KBLI 2020 codes).
- **Legal Status:** Established under Notary Act No. 25 dated July 3, 2025, in Cirebon.
- **Address:** JL WR SUPRATMAN GG SUKUN, RT 003/RW 006, Cempaka Putih, Ciputat Timur, Tangerang Selatan, Banten 15141.
- **Contact:** Phone: 089514024380; Email: (use a placeholder, e.g., ptarchcontinenttech@gmail.com).
- **Product Focus:** Plastik Core Tray (for cable management in data centers, industries, etc.).

---

**Website Goals:**

1. Introduce the company professionally.
2. Sell Plastik Core Tray online with a full e-commerce experience.
3. Provide contact information and generate leads.
4. Establish credibility through legal details and team profiles.
5. Prepare for future product expansions.

---

**Technical Specifications:**

- **Framework:** Next.js 14+ using the App Router for better SEO and performance.
- **Styling:** Tailwind CSS for utility-first, responsive design.
- **Animations:** Framer Motion for page transitions, hover effects, and interactive elements.
- **SEO:** Implement best practices:
  - Semantic HTML5 tags.
  - Custom meta tags (title, description, keywords) for each page using `next/head`.
  - Open Graph tags for social sharing.
  - Structured data (Schema.org) for local business and product.
  - Optimized images with `next/image` for lazy loading and performance.
  - Clean URLs and sitemap.xml (generate dynamically).
  - Fast loading times (optimize code and assets).
- **E-commerce Features:**
  - Shopping cart and checkout process.
  - Payment integration (placeholder for now, but design for Midtrans/Xendit).
  - Product page with gallery, descriptions, and specifications.
- **Responsiveness:** Mobile-first design, fully responsive on all devices.
- **Content Management:** Consider using a headless CMS or JSON files for easy content updates in the future.

---

**Page Structure and Content:**

1. **Homepage (/):**

   - Hero section with high-quality background image (related to construction/tech) and a strong tagline (e.g., "Your Trusted Partner in Construction Materials and Technical Solutions").
   - Featured product section for Plastik Core Tray with a CTA button linking to the product page.
   - Value proposition cards (e.g., Quality Products, Competitive Pricing, Reliable Service).
   - Brief about the company with a link to the About Us page.
   - Testimonial section (placeholder for future reviews).
   - Use Framer Motion for smooth scrolling animations and hover effects.

2. **About Us (/about):**

   - Company history and vision/mission.
   - Legal information: Mention the notary act and date of establishment.
   - Animated timeline or fade-in effects for team sections.

3. **Products (/products):**

   - Main product: Plastik Core Tray
     - Product gallery with multiple images (use next/image).
     - Detailed description: specifications (dimensions, material, color), uses, benefits.
     - Price display and quantity selector.
     - "Add to Cart" button.
   - Categories sidebar for future products (e.g., Construction Materials, Technical Equipment).
   - SEO: Product schema markup for rich snippets.

4. **Services (/services):**

   - List services based on KBLI codes:
     - Wholesale of Various Goods
     - Construction Materials Distribution
     - Agency/Commission Services for Technical Products
     - Real Estate Consulting (if applicable)
   - Icons or illustrations with hover animations.

5. **Blog (/blog):**

   - SEO-focused articles:
     - "Importance of Cable Management with Core Tray"
     - "How to Choose Quality Construction Materials"
     - "Introduction to PT ARCH CONTINENT TECH"
   - Blog posts should have meta descriptions, tags, and share buttons.
   - Use dynamic routing for blog posts (e.g., /blog/[slug]).

6. **Contact (/contact):**

   - Contact form with fields for name, email, message, etc.
   - Company address, phone, and email displayed prominently.
   - Google Maps embed for the location.
   - Click-to-chat WhatsApp link for the phone number.
   - Social media links (placeholder for Instagram, LinkedIn).

7. **Shopping Cart (/cart):**

   - Display cart items with options to update quantity or remove.
   - Proceed to checkout button.
   - Simple and intuitive design.

8. **Checkout (/checkout):**

   - Form for shipping and payment information.
   - Integration with payment gateways (simulate for now).
   - Order summary.

9. **Legal (/legal):**

   - Details about the company's legal status, notary act, and business registration.
   - Important for credibility.

10. **Footer:**
    - Quick links to main pages.
    - Contact info and social media.
    - Copyright notice.

---

**SEO Implementation:**

- Each page should have a unique `<title>` and `<meta name="description">` based on its content.
- Use `next/head` to manage meta tags.
- Generate a `sitemap.xml` and `robots.txt` dynamically via API routes or static files.
- Implement structured data using JSON-LD for local business and product. Example for homepage:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PT ARCH CONTINENT TECH",
    "image": "https://example.com/logo.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "JL WR SUPRATMAN GG SUKUN",
      "addressLocality": "Tangerang Selatan",
      "addressRegion": "Banten",
      "postalCode": "15141"
    },
    "telephone": "+6289514024380",
    "url": "https://archcontinenttech.com"
  }
  ```
- Optimize images: use WebP format, set widths and heights, and provide alt text.
- Ensure fast performance by using Next.js optimizations like code splitting and server-side rendering where needed.

---

**Design Guidelines:**

- **Color Scheme:** Consistent, modern and Professional colors look Use accents for CTAs
- **Typography:** Use Tailwind's default font stack or import a modern font from Google Fonts.
- **Animations:** Use Framer Motion for:
  - Page transitions (fade in/out).
  - Hover effects on buttons and cards.
  - Scroll-triggered animations for sections.
- Keep the design clean, minimal, and focused on user experience.

---

**Delivery Instructions:**

- Provide all necessary code: React components, pages, styles, and configuration files.
- Include instructions for setup:
  - `npm install` to install dependencies.
  - `npm run dev` to run the development server.
- Deployement: Suggest Vercel (for Next.js) or other platforms. Include environment variables for API keys (if needed).
- Ensure the code is well-commented and follows best practices for Next.js and Tailwind CSS.

---

**Final Note:**  
The website must be fully functional, visually appealing, and ready for production with SEO in mind. Focus on creating a seamless user experience with engaging animations through Framer Motion. Let's build this!
