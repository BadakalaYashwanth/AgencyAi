# 🌌 Agency AI - Premium Creative Agency Landing Page

**🔗 Live Demo:** [https://agencyaipro.netlify.app/](https://agencyaipro.netlify.app/)

## 📖 About The Project (What does it do?)

Agency AI is a **Marketing Landing Page** (not a SaaS product) designed for next-generation creative or tech agencies. Think of it as a digital billboard or a modern storefront for a business. 

Built with **React 19**, **Vite**, and **Tailwind CSS**, it combines sleek aesthetics with fluid animations to deliver a premium user experience and acts as a powerful 24/7 sales pitch.

### 💡 How is it useful?

* **For the Company (Agency Owners):** It serves as their number one lead-generation tool. It builds trust by showing off past work and client logos. Importantly, the functional "Contact Us" form captures visitor messages and instantly emails them to the company so they can secure new business effortlessly.
* **For the Users (Potential Customers):** It gives visitors a quick, easy way to discover the agency. They can evaluate the agency's style through the portfolio, learn about their services, and easily get in touch on the spot without opening a separate email app.

---

## ✨ Features

- **🚀 Performance First**: Built with Vite for near-instant load times and optimized production builds.
- **🎨 Premium Design**: Modern UI with a dedicated **Dark/Light Mode** toggle.
- **🎬 Fluid Animations**: Powered by **Framer Motion** for synchronized entrance effects and interactive hover states.
- **📱 Fully Responsive**: Seamlessly transitions from ultra-wide monitors to mobile devices.
- **✉️ Functional Contact Form**: Direct integration with **Web3Forms** for instant email notifications.
- **🧩 Component-Based**: Highly modular architecture for easy customization.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, Tailwind CSS
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Icons**: Custom SVG icons & Assets
- **Notifications**: React Hot Toast
- **Form Handling**: Web3Forms API

---

## 📂 Project Structure

```text
src/
├── assets/          # Images, Icons, and global asset data
├── components/      # Modular React components
│   ├── Navbar       # Responsive navigation with Theme Toggle
│   ├── Hero         # Animated header with CTAs
│   ├── TrustedBy    # Client logo showcase
│   ├── Service      # Service cards & descriptions
│   ├── OurWork      # Project portfolio gallery
│   ├── Team         # Team member profiles
│   └── ContactUs    # Functional email form
├── App.jsx          # Main application entry point
└── index.css        # Global styles & Tailwind imports
```

---

## ⚙️ Installation & Setup

1. **Clone the Repo**:
   ```bash
   git clone https://github.com/BadakalaYashwanth/AgencyAi.git
   cd AgencyAi
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment**:
   Create a `.env` file in the root directory:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_key_here
   ```

4. **Launch Development**:
   ```bash
   npm run dev
   ```

---

## 🚢 Deployment

1. **Build for Production**:
   ```bash
   npm run build
   ```
2. The `dist` folder is ready for hosting on **Vercel**, **Netlify**, or **GitHub Pages**.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

Built with ⚡ by [Badakala Yashwanth](https://github.com/BadakalaYashwanth)
