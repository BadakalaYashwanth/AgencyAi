# 🌌 Agency AI - Premium Creative Agency Landing Page

Agency AI is a high-end, responsive landing page designed for next-generation creative agencies. Built with **React 19**, **Vite**, and **Tailwind CSS**, it combines sleek aesthetics with fluid animations to deliver a premium user experience.

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
