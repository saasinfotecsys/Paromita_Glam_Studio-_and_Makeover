# Paromita Glam Studio & Makeover 💄✨

A premium, elegant, and highly responsive static website for a makeup and beauty studio located in Baruipur, West Bengal. This project is designed to showcase the studio's portfolio, highlight its premium services, and drive direct client bookings via WhatsApp.

## 🌟 Key Features

1. **Premium Aesthetic & UI/UX**
   - Elegant "Rose Gold & Dark Plum" color theme.
   - Glassmorphism effects, modern rounded corners, and soft shadow styles.
   - High-quality, flawless UI designed specifically for the beauty and luxury service industry.

2. **Engaging Animations**
   - **AOS (Animate On Scroll):** Elements smoothly fade, zoom, and slide into view as the user scrolls.
   - **Typewriter Effect:** Dynamic, auto-typing text in the Hero section cycling through top services.
   - **Animated Counters:** A stats strip that dynamically counts up (e.g., 100+ Clients, 4.9 Stars, 5+ Years).

3. **Booking & Lead Generation**
   - **Instant WhatsApp Booking:** A beautiful, fully functional "Book Appointment" form that requires **no backend server**. On submission, it instantly constructs a pre-filled booking message and redirects the client to WhatsApp.
   - **Floating WhatsApp Button:** A pulsating fixed button on the bottom right for immediate client contact.
   - **Direct Call-To-Action Banners:** Prominent "Book Now" buttons strategically placed throughout the page.

4. **Portfolio & Testimonials**
   - **Masonry Gallery:** A dynamic CSS grid showcasing high-quality portfolio images.
   - **Custom Lightbox:** Users can click any gallery image to view a full-screen, zoomed-in version.
   - **Review Carousel:** An auto-sliding Bootstrap carousel displaying top client reviews with custom quote icons and avatar placeholders.

5. **Responsive Design**
   - Built with **Bootstrap 5.3**, ensuring pixel-perfect display across desktops, tablets, and all mobile devices.
   - Navigation bar shrinks on scroll, and collapses perfectly on mobile viewports.

---

## 🛠️ Technology Stack

- **HTML5:** Semantic HTML structure.
- **CSS3:** Custom styles, CSS variables for theming, and modern CSS grid/flexbox layouts.
- **JavaScript (Vanilla):** Custom interactivity, DOM manipulation, Lightbox logic, and WhatsApp API integration.
- **Bootstrap 5.3:** Responsive framework and grid system.
- **Bootstrap Icons:** High-quality SVG icons.
- **Google Fonts:** `Playfair Display` (Headings) & `Outfit` (Body Text).
- **AOS.js:** Scroll animation library.

---

## 📁 Folder Structure

```text
Paromita_Glam_Studio_and_Makeover/
│
├── index.html               # Main website file containing all sections
├── README.md                # Project documentation
│
├── css/
│   └── style.css            # Custom premium styles & theme variables
│
├── js/
│   └── main.js              # Custom interactions (Typewriter, Form, Lightbox)
│
└── assets/
    └── images/
        ├── logo.png         # Studio Logo
        ├── site-bg.png      # Subtle background texture
        └── portfolio/       # Gallery, Services, and AI-generated imagery
            ├── Screenshot 2026-06-09 144009.jpg
            ├── studio_interior.png
            ├── mehndi_bride.png
            └── ...
```

---

## 🚀 How to Run

Because this is a completely static frontend website with no server-side dependencies, deploying and running it is incredibly simple!

1. **Local Viewing:** 
   Simply double-click the `index.html` file to open it in any modern web browser (Chrome, Edge, Safari, Firefox).
2. **Local Server (Optional):** 
   If using VS Code, you can use the `Live Server` extension to run it on a local port (e.g., `127.0.0.1:5500`).
3. **Deployment:** 
   This site is ready to be hosted on any static hosting platform for free, such as:
   - GitHub Pages
   - Netlify
   - Vercel
   - Hostinger / GoDaddy (via simple FTP upload)

---

## 💬 WhatsApp Integration Details
The Booking form (`#bookingForm`) uses JavaScript to gather the user's inputs (Name, Phone, Service, Date, Time, etc.). It then constructs a URL using the `wa.me` API.

**Target Number:** `+91 90510 60457`

When a user submits the form, they are automatically redirected to:
`https://wa.me/919051060457?text=[Encoded Booking Information]`

This allows Paromita to receive perfectly formatted booking requests instantly on her phone.

---

*Designed & Developed by Antigravity.*
