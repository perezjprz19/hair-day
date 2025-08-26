# Hair Day Website

A responsive, multi-page website for **Hair Day**, a luxury salon offering hair, makeup, and nail services.  
This project was built as part of the Coursera [Meta Front-End Developer Certificate] program to demonstrate skills in semantic HTML, responsive CSS, accessibility, and deployment with GitHub Pages.

---

##  Live Demo
 [View on GitHub Pages](https://perezjprz19.github.io/hair-day/)

---

##  Features
- **Responsive Design**: Mobile-first layout with a collapsible hamburger navigation menu.  
- **Accessible Navigation**: Semantic HTML elements with ARIA attributes, keyboard focus states, and screen-reader friendly labels.  
- **Reusable Layouts**: Jekyll layouts and includes for consistent header, nav, and footer across pages.  
- **Design System**: CSS custom properties for colors, typography, spacing, and reusable components.  
- **Luxury Styling**: Clean, minimal aesthetic with emphasis on brand voice and upscale feel.  
- **Future Ready**: Space reserved for embedding or linking to a booking system.

---

##  Project Structure
hair-day/
│
├── _config.yml # Jekyll config (baseurl, site title)
├── _includes/
│ ├── header.html # Logo + nav toggle
│ ├── nav.html # Primary navigation menu
│ └── footer.html # Footer logo + copyright
├── _layouts/
│ └── default.html # Base layout for all pages
├── assets/
│ ├── css/
    └── base.css # Design tokens + layout
  |── img/
    └── logos + thumbnail images for all pages
  |── js/  
    └── scripts.js # Functionality  
├── index.html # Home page (banner + featured services)
├── services.html # Services overview (WIP)
├── about.html # About page (WIP)
└── appointments.html # Booking page placeholder


---

##  Tech Stack
- **HTML5** + **CSS3** (mobile-first, semantic markup)
- **JavaScript** (interactive nav toggle)
- **Jekyll** (layouts, includes, asset paths)
- **GitHub Pages** (hosting + deployment)

---

##  Accessibility Features
- Proper use of semantic tags (`header`, `nav`, `main`, `footer`).  
- `aria-controls`, `aria-expanded`, and `aria-label` on the mobile nav button.  
- Keyboard focus styles for nav links.  
- High-contrast color palette (WCAG-checked).  

---

##  Deployment
This site is hosted using **GitHub Pages**.  

- Default branch: `distrribution`  
- Pages source: `distribution → root (`/`)  
- Configured with `_config.yml` to set the correct `baseurl` for project deployment.  

---

## Reflection
Through this project, I practiced:
- Building a consistent design system with CSS variables.  
- Writing accessible, semantic HTML.  
- Creating responsive layouts with mobile-first CSS.  
- Using Jekyll includes and layouts to avoid code duplication.  
- Debugging path issues and configuring GitHub Pages with Jekyll.  

---

##  Future Improvements
- Add a booking integration (Calendly, Square Appointments, or other provider).  
- Expand services into a dedicated `services.html` page.  
- Include a blog or news section powered by Jekyll posts.  
- Optimize performance with image compression and lazy loading.

---

##  Author
Jessica Shellenhamer  
*Front-End Developer in progress*  
