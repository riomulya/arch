

# **Product Requirements Document (PRD): Expert B2B SEO Framework for PT ARCH CONTINENT TECH (Next.js App Router)**

This document outlines the mandatory technical, architectural, and content requirements necessary to establish PT ARCH CONTINENT TECH as an authoritative leader in the Indonesian B2B industrial supply and technical services sectors. The strategy is predicated on leveraging the high-performance capabilities of the Next.js App Router to maximize search visibility for high-intent, low-volume transactional keywords, thereby prioritizing lead quality (MQLs and SALs) over general traffic volume.

---

## **1\. Initial Audit and Strategic Imperatives (Phase 0: Prioritization)**

The foundation of any high-performing SEO strategy requires a clear definition of success and immediate technical remediation. For an enterprise operating across diverse B2B segments—industrial components, construction materials, and real estate services—success is measured by the velocity and conversion rate of qualified leads.

### **1.1 Current Technical Debt Analysis and Remediation Priority**

An immediate review of the website’s current status reveals critical deficiencies in foundational SEO elements, specifically metadata, which is the primary driver of Click-Through Rate (CTR) in Search Engine Result Pages (SERPs). The current Title Tag displays considerable length and redundancy: "PT ARCH CONTINENT TECH \- Solusi Bahan Konstruksi... PT ARCH CONTINENT TECH \- Solusi Bahan Konstruksi & Perlengkapan Teknis".1 Such repetition not only risks truncation in SERPs but also dilutes the focus required for targeted industrial keywords.

Furthermore, the actual Meta Description appears to be absent or automatically derived by search engines, resulting in the display of the first body text: "PT ARCH CONTINENT TECH menyediakan Plastik Core Tray dan Komponen Injeksi Presisi untuk mendukung proyek industri Anda dengan akurasi tinggi dan kualitas terjamin".1 This lack of explicit, compelling metadata translates directly into low CTR and poor user perception.

Therefore, the highest priority (P0) requirement is the immediate implementation of the Next.js Metadata API.2 The development team must replace all lengthy or auto-generated titles with concise, keyword-optimized Title Tags, ideally under 60 characters, and create unique, actionable Meta Descriptions under 160 characters for all core service and product pages.3 This ensures that when the page ranks, the result snippet is highly relevant and attractive to the target B2B procurement persona.

### **1.2 B2B SEO Vision: From Traffic to Transactional Intent**

The digital strategy for PT ARCH CONTINENT TECH must diverge sharply from standard B2C marketing models. B2B sales cycles are inherently longer and more complex, involving multiple decision-makers and high-value transactions.4 Consequently, optimizing for broad traffic volume is an inefficient use of resources.

The primary objective is the capture of high-intent, transactional search queries (e.g., searches for specific technical specifications, pricing, or regional suppliers for "Precision Injection Mold Maintenance Indonesia" 5). The success criteria must, therefore, be anchored to quantitative B2B metrics: Lead Quality, the conversion rate of Marketing Qualified Leads (MQLs) to Sales Accepted Leads (SALs), and Lead Response Time.4 Every SEO effort, from content creation to technical optimization, must be mapped to this clear funnel framework, focusing on converting the visitor into a measurable lead, thereby justifying the SEO investment through accelerated organic business growth.8

## **2\. Technical SEO Requirements: Next.js App Router Optimization**

The Next.js App Router provides specialized tools that must be meticulously leveraged to ensure superior performance and search engine indexability, which are crucial ranking factors.9

### **2.1 Next.js Rendering Strategy Matrix (SSR, SSG, ISR)**

The selection of a rendering strategy—Server-Side Rendering (SSR), Static Site Generation (SSG), or Incremental Static Regeneration (ISR)—is a strategic trade-off between content freshness, page load performance, and infrastructure costs.10 For robust SEO, the primary requirement is fully rendered HTML that search engines can crawl without relying on client-side JavaScript execution.10

For the client’s high-priority industrial component listings, such as "Plastic Core Tray" or "Precision Injection Components" 1, SSG offers unparalleled speed but lacks the necessary agility for specifications, pricing, or inventory updates. The optimal solution is the deployment of **Incremental Static Regeneration (ISR)**. ISR provides the SEO benefits of pre-rendered HTML while allowing content updates periodically (e.g., setting revalidate: 3600 to check for updates hourly), ensuring the website remains performant without requiring a complete rebuild upon every data change.10

The following table summarizes the required rendering architecture:

Next.js Rendering Strategy Matrix

| Page Type/Segment | Data Freshness Need | Recommended Strategy | SEO Justification |
| :---- | :---- | :---- | :---- |
| Homepage & Core Corporate Pages | Low (Static information, high LCP priority) | Static Site Generation (SSG) | Maximum speed, minimal infrastructure cost, superior LCP performance.10 |
| Product/Component Listings (Core Tray, Injection) | Medium (Periodic spec/inventory updates) | Incremental Static Regeneration (ISR) | Optimizes LCP/FCP while ensuring content freshness through specified revalidation periods.10 |
| Technical White Papers / Case Studies | Low (Authority-building content) | Static Site Generation (SSG) | Establishes high-quality E-E-A-T via reliable, pre-rendered content. |
| Contact Forms / Quote Engines | High (Real-time user input) | Server-Side Rendering (SSR) | Necessary for personalized interactions, session handling, and secure data processing. |

### **2.2 Core Web Vitals (CWV) Optimization**

Google's use of Core Web Vitals (CWV) as a ranking factor means the pursuit of "Good" scores across Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) is non-negotiable.9 While Next.js automates many performance features, specialized attention is required for client-side assets and rendering priorities.

#### **LCP Optimization**

The Largest Contentful Paint (LCP) metric measures the loading speed of the main visual element. To ensure LCP performance is consistently below the 2.5-second threshold, strict technical requirements must be met:

1. All primary visual assets (hero images, banners) must be optimized using the native next/image component for automatic optimization, responsive sizing, and lazy loading.3  
2. Image formats must be modern (WebP, AVIF) and properly compressed to reduce resource load duration.12  
3. The LCP resource must be explicitly prioritized using the preload and fetchpriority="high" attributes in the HTML to eliminate resource load delay caused by browser prioritization conflicts.12  
4. For high-priority static pages (SSG), the implementation team must utilize advanced Critical CSS extraction techniques (such as tools like Beasties, a documented fork of the deprecated Critters).14 By inlining the essential, above-the-fold CSS, the browser can render the visible portion of the page much faster, significantly improving FCP and LCP scores. This leverages the stability of static rendering to achieve maximum initial load speed.

#### **FID/INP and Client-Side Optimization**

Client-side performance, measured by FID (and increasingly Interaction to Next Paint, INP), is affected by JavaScript execution time.3 While Next.js handles code splitting effectively, the inclusion of heavy, non-essential client-side components poses a significant risk. For instance, reliance on advanced UI/animation libraries like Framer Motion for aesthetic appeal, particularly when involving heavy shadows and blurs, can slow down animations and scrolling, increasing JavaScript task length and negatively affecting interaction metrics.15 Similarly, embedding third-party content (e.g., HubSpot forms for lead capture or Spline 3D illustrations) introduces external code dependencies that slow down the site.16 The development team must perform a strict audit to minimize unnecessary JavaScript in Client Components and ensure robust caching (data fetching cache, route handler cache) is leveraged.3

#### **CLS Optimization**

To maintain visual stability (CLS), explicit space reservation is mandatory. All media elements and external embeds must define clear height and width parameters.3 This ensures that layout shifts are avoided when content loads dynamically, providing a smoother user experience, which is part of the ranking algorithm.9

### **2.3 Metadata API Implementation**

The Next.js App Router provides specific APIs for defining metadata.2 Implementation must be bifurcated:

1. **Global Metadata:** Static, site-wide metadata (default canonical, favicon, Open Graph base settings) should be defined using the static metadata object within the global layout.js.2  
2. **Page-Specific Metadata:** Every distinct service or product page must utilize the generateMetadata dynamic function in its corresponding page.js file.2 This ensures unique, keyword-rich Title Tags and Meta Descriptions for high CTR and eliminates the duplication currently observed.3

## **3\. Structured Data Implementation Requirements**

Structured data, formatted using JSON-LD, helps search engines and AI understand the underlying entity and content structure, increasing eligibility for rich results.18 For a complex B2B entity, layered schema implementation is required.

### **3.1 Organization and Identity Schema**

The identity of PT ARCH CONTINENT TECH as an authoritative legal entity must be clearly communicated to search engines.

* **Global Requirement:** The Organization schema must be implemented via JSON-LD on the global layout.18 This schema must include the company's name ("PT ARCH CONTINENT TECH"), legalName, official url, and all relevant contactPoint information. This provides critical data for establishing E-E-A-T (Experience, Expertise, Authority, Trust) within the Indonesian market.  
* **Validation:** All structured data generated must be rigorously validated using the Google Rich Results Test and the generic Schema Markup Validator before being deployed to production.18

### **3.2 Service and Product Schema Mapping**

The core challenge lies in mapping structured data across the client's hybrid business model, which includes physical goods (Core Trays), specialized technical capabilities (Injection Components), and professional services (Real Estate).

For the industrial component segments, the sales process is highly technical and centered on the *capability* offered, not just the inventory item.5 Therefore, the PRD mandates the use of a **concurrent Product and Service schema** on key industrial pages. While the Product schema provides essential details (SKU, description, name), the Service schema allows for the inclusion of important B2B properties such as serviceArea, provider, and the industrial segment (e.g., Mining, Construction) to which the product or technical solution is related.19 This strategic layering captures the full scope of the offering, maximizing the potential for rich result visibility on specialized technical searches.

For the real estate segment, which involves high-value consultation and transactions, the implementation of the ProfessionalService or general Service schema is required, including properties defining the AreaServed (focusing on Indonesia) and specific provider details.20

## **4\. Information Architecture and On-Page Strategy**

The information architecture must be designed to build focused topical authority for each distinct business segment, facilitating deep crawling and clear relationship signaling between pages.

### **4.1 Keyword Silo Structuring for B2B Segments**

A general trading company risks diluting its authority by mixing highly specialized industrial content with general services. To achieve optimal topical depth and avoid leakage of link equity, the website must be organized into three distinct content silos 21:

1. **Industrial Components:** Focused on specialized products like "Plastic Core Tray" and "Precision Injection Components," targeting technical, long-tail search intent (e.g., "Indonesia mining equipment market logistics solutions" 22).  
2. **Construction & Technical Supply:** Concentrated on general trading and "Solusi Bahan Konstruksi & Perlengkapan Teknis," leveraging construction-specific SEO strategies.23  
3. **Real Estate Services:** A distinct, localized silo for B2B property offerings.

Within each silo, 3-5 definitive, high-value content assets (e.g., technical guides like "The Definitive Guide to Mold Tooling Selection in Indonesia" 5) must be designated as **Cornerstone Content**. These cornerstone pages must receive the highest concentration of internal link equity, acting as the hub for their respective topic cluster.25

### **4.2 Metadata and H1 Specification (High-Intent Focus)**

Consistency between the visible page title and the internal page heading is vital for search engine relevance signals.

1. The technical constraint of utilizing **only one Title Tag and one H1 Header per webpage** must be strictly enforced.26  
2. The primary, high-intent keyword must be included in both tags and placed as early as possible to signal relevance immediately to search engines.26  
3. For B2B service pages, the H1 must be highly descriptive and clearly address transactional user intent, such as: "Precision Plastic Injection Mold Manufacturing Services Indonesia," thereby capturing relevant commercial searches.5

### **4.3 Internal Linking Framework**

The internal linking structure must serve as a strategic map, efficiently distributing authority (link equity) and clearly defining relationships between services.

* **Anchor Text Precision:** Internal links must use descriptive, highly relevant anchor text that contains the primary keyword of the destination page.25 For example, a link to the component page should use a phrase like: "high-quality plastic core trays".1 Generic anchor texts such as "learn more" or "click here" are strictly prohibited as they provide minimal context to search engines about the linked content.25  
* **Homepage Efficiency:** To prevent authority dilution, the homepage should limit its direct links only to the most strategically important pages—the entry point for each of the three main business silos. This ensures efficient transmission of authority to the top-tier service pages.25  
* **Contextual Linking:** Links must be integrated naturally within the body copy of technical articles. Best practices dictate avoiding links within headings or in the very beginning of the page content to ensure maximum contextual relevance.25

## **5\. B2B Authority Building and Off-Page Strategy**

Building authority for an industrial B2B enterprise in Indonesia requires specialized focus on technical credibility and industry relevance (E-E-A-T).

### **5.1 Content Pillar Development: Technical Authority**

The content strategy must be engineered to resonate with technical buyers and procurement specialists.

* **Technical Depth:** The production of comprehensive technical white papers and detailed case studies is mandatory. Content should demonstrate proficiency in precision manufacturing, adherence to standards (e.g., ISO 9001 certification 6), and material science, appealing directly to the expertise required for high-value B2B decisions.5  
* **Niche Targeting:** Content should strategically target niche industrial markets in Indonesia that require specialized supply and technical support. Successful local agencies focus on highly specific, high-authority sectors such as SEO for Forestry, Infrastructure, Oil Logistics, and the Steel Industry.28 Creating definitive content for these segments builds hyper-relevant topical authority where competition may be lower.

### **5.2 Link Acquisition Strategy (Indonesia B2B Focused)**

For industrial B2B, link quality from verifiable industry sources is paramount; this is prioritized over mass link acquisition.23

* **Industry Affiliations and Partnerships:** The most effective link-building strategy involves leveraging existing business relationships. The company must proactively secure mentions and do-follow backlinks from Indonesian industry affiliations, trade organizations (similar to NAHB or NARI models 23), and their long-term material suppliers.23 A link from an established construction material manufacturer is exponentially more valuable than general directory submissions.  
* **Public Relations and Digital Media:** Investigate specialized Indonesian digital marketing agencies known for expertise in link building and PR within the local B2B landscape.30 These firms can facilitate content-driven link acquisition by featuring the company’s technical expertise in reputable regional industry publications.

### **5.3 Local SEO Implementation (Construction/Real Estate Component)**

The segments related to construction supply and real estate demand a robust local SEO strategy to capture regional inquiries.

* **Google Business Profile (GBP):** The company’s Google Business Profile must be fully completed and meticulously maintained to ensure Name, Address, and Phone (NAP) consistency across all digital properties.32  
* **Review Management:** Active solicitation and management of reviews on GBP and other relevant local Indonesian business directories are critical.32 Positive customer reviews build trust with potential local customers, which directly influences conversion likelihood.  
* **Localized Content:** Develop specific landing pages for local services, incorporating localized keywords (e.g., "General Contractor Jakarta" or "Bahan Konstruksi Surabaya") and ensuring proper schema implementation for local business entities.

## **6\. Measurement, Validation, and Reporting Requirements**

The effectiveness of this PRD relies on a measurement framework that aligns organic search performance directly with the commercial goals of the B2B sales funnel.

### **6.1 B2B KPI Framework Definition**

Tracking must move beyond session counts and bounce rates to focus on high-value actions that signal purchase intent.4 The ultimate metric is the conversion of an organic search visitor into a viable sales opportunity. This requires tight synchronization between marketing and sales teams.7

B2B Lead Generation KPI and Measurement Framework

| KPI Category | Primary Metric | Definition/Goal | GA4 Tracking Mechanism |
| :---- | :---- | :---- | :---- |
| **Awareness & Visibility** | Average Ranking Position | Ranking for high-intent, long-tail transactional keywords. | Google Search Console API integration with Reporting layer. |
| **Volume & Conversion** | Marketing Qualified Leads (MQLs) | A lead generated via organic search that completes a high-value action (e.g., technical spec download, detailed contact form submission). | GA4 Custom Event Conversion tracking.33 |
| **Quality & Efficiency** | Sales Accepted Leads (SALs) | MQLs validated by the Sales team as meeting Ideal Customer Profile (ICP) criteria. | CRM integration for tracking lead status changes.4 |
| **Engagement & Intent** | Site Search Analysis | Identifying specific technical terms and product gaps searched by users *on the website*. | GA4 Enhanced Measurement: Site Search terms tracking.34 |
| **Performance** | Core Web Vitals Score | Percentage of users experiencing "Good" performance (LCP \< 2.5s, CLS \< 0.1). | Vercel Analytics integration and PageSpeed Insights monitoring. |

### **6.2 Google Analytics 4 (GA4) Implementation**

The implementation team must utilize GA4 for precise lead tracking.

* **Conversion Setup:** Configure GA4 to track specific, high-value lead generation events as conversions, including "Quote Request Submission," "Technical Catalog Download," and "Direct Contact Form Completion".33 These events are the definition of an MQL.  
* **Intent Mining:** One of the most critical elements for scaling B2B content is analyzing internal Site Search terms. B2B prospects often use extremely precise, technical terminology when searching within the corporate website that may not be captured by broad keyword research.34 Tracking these terms identifies immediate content or product gaps and validates the technical language used by high-intent users, providing a rapid feedback loop for SEO strategy.34

### **6.3 Technical Validation Cycle**

Consistent, preemptive validation is essential to maintaining high technical standards.

* **Pre-Deployment Validation:** Before any new page or structural update is deployed, all generated JSON-LD structured data and metadata must be tested using the Google Rich Results Test and Schema Markup Validator tools.18  
* **CWV Monitoring:** Core Web Vitals must be monitored weekly using tools like Google Search Console (CrUX Data) and PageSpeed Insights, ensuring LCP and CLS targets are consistently met, as performance directly impacts organic rankings and user experience.3

## **Conclusions and Recommendations**

The path to achieving top-tier organic rankings for PT ARCH CONTINENT TECH is defined by the meticulous application of advanced technical standards within the Next.js App Router environment, coupled with a strategic shift in focus from broad traffic to verifiable lead quality.

1. **Prioritize Technical Performance Over Aesthetics:** The website’s dependence on the Next.js stack necessitates stringent control over client-side dependencies. While UI enhancement tools like Framer Motion or heavy third-party embeds (e.g., interactive 3D renderings) may improve visual appeal, they frequently lead to increased JavaScript execution time, thereby degrading crucial metrics like First Input Delay (FID) and Interaction to Next Paint (INP).3 The stability of Core Web Vitals must be protected by minimizing these render-blocking client-side assets and, conversely, applying advanced techniques such as Critical CSS inlining for all high-priority static pages.14  
2. **Define Success by Quality, Not Volume:** The established B2B sales complexity mandates that the SEO strategy must prioritize the creation of content that captures high-intent, technical long-tail keywords relevant to Indonesia's infrastructure and manufacturing sectors.28 The deployment of the Service schema alongside the Product schema reflects this understanding, ensuring that the company’s technical capability, not just its inventory, is visible to search engines.20 Success should be measured by the conversion of MQLs to SALs, tracked via integrated GA4-to-CRM reporting.4  
3. **Leverage Internal Intent Data:** The most immediate and high-fidelity source of new content opportunities is the internal site search data.34 High-value B2B prospects are likely using technical, hyper-specific language when searching the company website. This data should be mined continuously through GA4 to identify specific content and product gaps that can be filled immediately, creating highly targeted content assets designed to convert.  
4. **Architectural Siloing is Mandatory:** Due to the disparate nature of the business segments (Industrial Components, Construction Supply, Real Estate), a unified, high-performance architecture requires strict keyword siloing and a segmented authority building strategy.21 Technical content requires industrial partnership links, while construction and real estate demand localized optimization and rigorous Google Business Profile management.23 This segmentation prevents topical dilution and allows each business unit to build deep, focused authority within its respective vertical.

