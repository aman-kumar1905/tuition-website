# Level 2 Professional Tuition Centre Website

A high-converting, accessible web application built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Zod**. Designed specifically for coaching institutes and tuition centres following strict pedagogical clarity, small cohort messaging, and zero-compromise design standards.

---

## 🎨 Design System & Visual Identity

- **Color Palette**:
  - **Indigo** (`#1B2A4A`): Deep slate navy representing academic authority and discipline.
  - **Amber** (`#E8873A`): Warm secondary accent used for focal CTAs, badges, and attention points.
  - **Canvas** (`#FAF9F6`): Warm off-white background ensuring superior readability and high contrast.
- **Typography**:
  - Headings: **Fraunces** (Editorial serif with modern presence).
  - Body & UI: **Inter** (Clean, legible sans-serif for screen legibility).
- **Design Philosophy**: Zero gradients, zero glassmorphism, crisp borders, subtle transitions, and high-conversion CTAs.

---

## 🚀 Key Features & Pages

1. **Home (`/`)**:
   - Hero section with value propositions, batch capacity limits, and key milestones.
   - Core 4-pillar methodology (Limited Batch Size, Concept-First Pedagogy, Daily 1-on-1 Doubt Hours, Weekly Diagnostics).
   - Featured courses snapshot.
   - Verified student results and toppers showcase.
   - Department faculty preview.
   - Parent & student testimonials.
   - Direct enquiry form & fast WhatsApp admission desk links.

2. **About Us (`/about`)**:
   - Institutional mission, educational philosophy, and small-cohort classroom discipline.
   - Learning infrastructure (smart classrooms, diagnostic test halls, reference library).

3. **Courses & Batches (`/courses`)**:
   - Interactive category filter (Secondary, Senior Secondary, Foundation, Competitive).
   - Syllabus highlights, batch schedules, cohort caps, and one-click WhatsApp inquiries with pre-filled course titles.

4. **Faculty (`/faculty`)**:
   - Subject department leads and mentors with qualifications, experience, and teaching philosophies.

5. **Results & Achievements (`/results`)**:
   - Aggregate batch pass rate and score gain metrics.
   - Individual student toppers and turnaround stories.
   - Full parent and alumni testimonials.

6. **Campus & Facilities Gallery (`/gallery`)**:
   - Categorized learning environments (Classrooms, Doubt Sessions, Seminars, Facilities).
   - Interactive modal inspection and responsive asset frames.

7. **Contact & Admissions Desk (`/contact`)**:
   - Comprehensive contact details, campus address, operating hours, and map placeholder.
   - Interactive FAQ accordion addressing common parental inquiries.
   - Full enquiry form with query parameter prefill support.

8. **Enquiry System & API (`/api/enquiry`)**:
   - Client and server-side validation using **Zod**.
   - Email dispatch integration via **Resend** with graceful fallback mode for development.
   - Floating and in-page direct WhatsApp CTAs with customized URL generation.

---

## 🛠️ How to Run the Project

### Prerequisites
- Node.js `v20+` or `v24+`
- npm `10+` or `11+`

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment (Optional)
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Add your Resend API credentials if you wish to deliver live emails:
```env
RESEND_API_KEY=re_your_api_key
NOTIFICATION_EMAIL=admissions@example.com
FROM_EMAIL=onboarding@resend.dev
```
*(If `RESEND_API_KEY` is not provided, enquiries are logged safely in mock mode without throwing errors).*

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Run Tests & Typecheck
```bash
# Run Vitest test suite
npm test

# Run TypeScript checks
npm run typecheck

# Run ESLint
npm run lint
```

### 5. Build for Production
```bash
npm run build
npm run start
```

---

## 📋 Client Content Replacement Checklist

All unverified or unknown institutional details are deliberately structured using explicit placeholders so client administrators can replace them without altering layout architecture:

| Placeholder | Content Module Path | Description |
|---|---|---|
| `[Tuition Centre Name]` | `src/data/site-config.ts` | Official legal or commercial centre name |
| `[City]` | `src/data/site-config.ts` | Operational city / locality |
| `[Phone Number]` | `src/data/site-config.ts` | Admissions telephone number |
| `[WhatsApp Number]` | `src/data/site-config.ts` | WhatsApp Business chat number |
| `[Email]` | `src/data/site-config.ts` | Institutional contact email address |
| `[Address]` | `src/data/site-config.ts` | Street address and postal landmark |
| `[Teacher Name]` | `src/data/faculty.ts` | Faculty names, qualifications, and bios |
| `[Student Name]` | `src/data/results.ts` | Verified board examination student toppers |
| Campus Photos | `src/data/gallery.ts` | Campus, classroom, and lab high-res photos |

---

## ♿ Accessibility & SEO

- Semantic HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<address>`).
- Visible focus rings with high-contrast amber outlines (`:focus-visible`).
- Accessible skip link (`#main-content`) for keyboard-first navigation.
- Comprehensive Next.js metadata, OpenGraph tags, viewport definitions, and responsive breakpoints.
