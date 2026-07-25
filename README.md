<div align="center">

# 🚖 Rydex

**An AI-Ready, Multi-Partner Vehicle Booking & Mobility Platform**

[![Next.js](https://img.shields.io/badge/Built_with-Next.js-black?logo=next.js)](https://nextjs.org/)
[![Socket.io](https://img.shields.io/badge/Realtime-Socket.io-black?logo=socket.io)](https://socket.io/)
[![Auth.js](https://img.shields.io/badge/Auth-Auth.js-blue?logo=next.js)](https://authjs.dev/)
[![Razorpay](https://img.shields.io/badge/Payments-Razorpay-02042B?logo=razorpay)](https://razorpay.com/)
[![Framer Motion](https://img.shields.io/badge/UI-Framer_Motion-f213a4?logo=framer)](https://www.framer.com/motion/)

A scalable ride-hailing ecosystem featuring dedicated user and driver dashboards, real-time location tracking, secure video KYC for drivers, and seamless payment processing. Built with an architecture ready to support future AI-driven dispatching and operational expansion.

</div>

---

## 📋 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture & Modules](#-architecture--modules)
- [Project Structure](#-project-structure)
- [Future Roadmap](#-future-roadmap)
- [License](#-license)

---

## ✨ Features

- **👥 Multi-Partner Dashboards:** Dedicated, role-specific interfaces and routing for Riders, Drivers, and Administrators.
- **📍 Real-Time Ride Tracking:** Live geolocation updates and route tracking powered by **Socket.io**.
- **🛡️ Driver Video KYC:** Integrated video verification pipeline ensuring maximum platform safety and driver authenticity.
- **💳 Frictionless Payments:** Secure, instant payment processing via **Razorpay** integration.
- **🔐 Robust Authentication:** Secure session management and multi-provider logins utilizing **Auth.js**.
- **💫 Fluid UI/UX:** Highly responsive, modern interface with micro-interactions built using **Framer Motion**.
- **🤖 AI-Ready Foundation:** Data models and dispatch pipelines structured to integrate machine learning for predictive routing and surge pricing.

---

## 🛠 Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | React / Next.js | Core UI framework and server-side rendering |
| **Styling & Motion** | Tailwind CSS, Framer Motion | Responsive design and component animations |
| **Authentication** | Auth.js | Secure user and driver credential management |
| **Real-Time Engine**| Socket.io | Bidirectional event-based communication for tracking |
| **Payments** | Razorpay | Transaction processing and wallet management |
| **Media / KYC** | WebRTC / Cloudinary | Handling driver video uploads and verification |

---

## 🏗 Architecture & Modules

### 1. Rider Module
* Ride searching and fare estimation.
* Live driver tracking on an interactive map.
* Ride history and payment management.

### 2. Driver Module
* Onboarding workflow with **Video KYC**.
* Active ride requests and acceptance toggles.
* Earnings dashboard and status management.

### 3. Dispatch & WebSocket Engine
* Handles the handshake between rider requests and driver availability.
* Broadcasts location coordinates at set intervals to minimize latency and payload size.

---
## 📁 Project Structure
```text
3.rydex/
├── client/                 # Frontend application (Next.js)
│   ├── app/                # Next.js App Router (Pages, Layouts)
│   │   ├── (auth)/         # Authentication routes (Login, Signup)
│   │   └── dashboard/      # Rider & Driver dashboards
│   ├── components/         # Reusable UI components (Buttons, Modals, Maps)
│   ├── hooks/              # Custom React hooks (e.g., useSocket, useLocation)
│   ├── lib/                # Utility functions and library initializations
│   ├── public/             # Static assets (Images, Icons)
│   └── styles/             # Global CSS and Tailwind configurations
│
└── server/                 # Backend application (Node.js/Express)
    ├── config/             # Environment & Database configurations
    ├── controllers/        # Business logic for rides, users, and payments
    ├── middlewares/        # Auth and Error handling middlewares
    ├── models/             # Database schemas (User, Driver, Ride)
    ├── routes/             # API endpoint definitions
    └── sockets/            # Socket.io event handlers for real-time tracking

```
## 🛣 Future Roadmap

- [ ] **AI Smart Dispatching:** Integrate predictive models to position drivers in high-demand zones before surges occur.
- [ ] **Dynamic Pricing Engine:** Implement algorithmic surge pricing based on real-time traffic and weather data.
- [ ] **In-App Chat:** Add encrypted P2P messaging between riders and drivers without revealing phone numbers.
- [ ] **Expanded Analytics:** Comprehensive admin reporting on revenue trends, peak hours, and cancellation rates.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

<div align="center">
  <b>Built with ❤️ by <a href="https://github.com/Dushyantrao28">Dushyant Singh</a></b>
</div>
