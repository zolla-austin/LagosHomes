# LagosHomes 🏡

A modern, full-stack real estate platform for browsing, searching, and discovering premium properties in Lagos, Nigeria. Built with React and Express.js, LagosHomes provides a seamless experience for property hunters with advanced filtering, detailed listings, and dark mode support.

## ✨ Features

- 🏘️ **Property Listings** - Browse featured and comprehensive property database
- 🔍 **Smart Search & Filter** - Filter by location, price range, bedrooms, and property type
- 🖼️ **Image Gallery** - View properties with multiple high-quality photos
- 🌙 **Dark Mode** - Toggle between light and dark themes with persistent settings
- 👥 **Meet Our Team** - Learn about our dedicated real estate professionals with bios
- 📧 **Contact Form** - Easily reach out to schedule viewings or ask questions
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 💰 **Price Display** - Prices formatted in millions for quick readability (₦150M, ₦78M, etc.)
- 🎨 **Modern UI** - Clean, professional design with Tailwind CSS
- 🔗 **Express Backend** - RESTful API ready for integration with MongoDB

## 🛠️ Tech Stack

### Frontend

- **React 18.3.1** - UI framework with hooks
- **Vite 5.4.1** - Lightning-fast build tool and dev server
- **Tailwind CSS 3.4.4** - Utility-first CSS with dark mode support
- **React Router 6.18.0** - Client-side routing for multi-page navigation
- **React Icons 4.11.0** - Beautiful SVG icons (dark mode toggle)

### Backend

- **Node.js** - JavaScript runtime
- **Express 4.19.4** - Minimalist web framework
- **Mongoose 7.7.0** - MongoDB ODM (optional, ready for database integration)
- **Cors** - Cross-origin resource sharing
- **Nodemon** - Hot reload for development

## 📂 Project Structure

```
lagoshouse/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx          # Navigation with logo and dark mode toggle
│   │   │   ├── Hero.jsx            # Landing hero section
│   │   │   ├── FeaturedProperties.jsx
│   │   │   ├── PropertyCard.jsx    # Reusable property card component
│   │   │   ├── FilterPanel.jsx     # Search and filter controls
│   │   │   ├── ContactForm.jsx     # Contact form component
│   │   │   ├── Footer.jsx
│   │   │   └── ...
│   │   ├── pages/
│   │   │   ├── HomePage.jsx        # Landing page with featured properties
│   │   │   ├── PropertiesPage.jsx  # Full property listing with filters
│   │   │   ├── PropertyDetailsPage.jsx # Individual property details
│   │   │   ├── AboutPage.jsx       # About company and team section
│   │   │   └── ContactPage.jsx     # Contact information and form
│   │   ├── data/
│   │   │   └── properties.js       # Local property database (5 premium properties)
│   │   ├── assets/
│   │   │   └── houses/             # Property images, logos, team photos (19 images)
│   │   ├── App.jsx                 # Root component with dark mode state
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── index.html
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js               # Database configuration
│   │   ├── controllers/
│   │   │   ├── propertyController.js
│   │   │   └── contactController.js
│   │   ├── models/
│   │   │   └── Property.js         # Mongoose Property schema
│   │   ├── routes/
│   │   │   ├── propertyRoutes.js
│   │   │   └── contactRoutes.js
│   │   ├── data/
│   │   │   └── properties.js
│   │   └── server.js               # Express server entry point
│   ├── package.json
│   └── .env.example
├── package.json                    # Root workspace config
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/zolla-austin/LagosHomes.git
   cd lagoshouse
   ```

2. Install dependencies for all workspaces:

   ```bash
   npm install
   npm run install-all
   ```

3. Start development servers:

   ```bash
   npm run dev
   ```

   This will start:
   - **Frontend**: http://localhost:5173 (Vite dev server)
   - **Backend**: http://localhost:5000 (Express server)

### Development

The project uses workspaces for better organization:

- Each directory has its own `package.json`
- Run scripts from the root or individual directories
- Frontend and backend can be developed independently

## 📖 Available Scripts

### Root Level

```bash
npm run dev          # Start both frontend and backend dev servers
npm run install-all  # Install dependencies for frontend and backend
npm run build        # Build frontend for production
```

### Frontend

```bash
cd frontend
npm run dev          # Start Vite dev server on port 5173
npm run build        # Build optimized production bundle
npm run preview      # Preview production build
```

### Backend

```bash
cd backend
npm run dev          # Start Express server on port 5000 with hot reload
npm run start        # Start production server
```

## 🏠 Pages Overview

| Page             | Route           | Description                                           |
| ---------------- | --------------- | ----------------------------------------------------- |
| Home             | `/`             | Landing page with featured properties                 |
| Properties       | `/properties`   | Full listing with advanced search and filters         |
| Property Details | `/property/:id` | Individual property with gallery and full information |
| About            | `/about`        | Company information and team section                  |
| Contact          | `/contact`      | Contact form and business information                 |

## 🔍 Property Database

The platform includes 5 premium properties with:

- High-quality images (multiple photos per property)
- Detailed descriptions
- Amenities list
- Location information
- Pricing in millions (₦150M, ₦78M, etc.)

### Sample Properties

- **lag-001**: Luxury home in Victoria Island - ₦150M
- **lag-002**: Modern apartment in Ikoyi - ₦120M
- **lag-003**: Premium villa in Lekki - ₦200M
- **lag-004**: Executive apartment in VI - ₦95M
- **lag-005**: Waterfront property in Banana Island - ₦180M

## 👥 Team

Our expert team brings decades of real estate experience:

- **Aisha Akande** - Lead Property Consultant
- **Chinedu Okonkwo** - Investment Strategist
- **Zolla Austine** - Client Success Manager
- **Sade Ibrahim** - Market Research Analyst

Each team member has a detailed bio on the About page.

## 🎨 Features Highlight

### Dark Mode

- Toggle between light and dark themes
- Preference persisted in localStorage
- Smooth transitions throughout the application
- All components optimized for readability in both modes

### Responsive Design

- Mobile-first approach
- Tailwind CSS breakpoints for all screen sizes
- Touch-friendly interface elements

### Image Optimization

- Local image storage for fast loading
- Fallback placeholder for broken images
- Optimized file sizes

## 📞 Contact Information

- **Email**: hello@lagoshomes.ng
- **Phone**: +234 802 123 4567
- **Location**: Victoria Island, Lagos, Nigeria
- **Website**: https://lagoshomes.ng

## 🔧 Environment Variables

Create a `backend/.env` file based on `backend/.env.example`:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string_here
```

## 🚢 Deployment

### Frontend

- Build: `npm run build` in frontend directory
- Deploy the `dist/` folder to your hosting service (Vercel, Netlify, GitHub Pages, etc.)

### Backend

- Deploy to services like Heroku, Railway, or AWS
- Set environment variables on your hosting platform
- Ensure MongoDB connection string is configured

## 📝 API Endpoints (When Backend Connected)

- `GET /api/properties` - Fetch all properties
- `GET /api/properties/:id` - Fetch single property
- `POST /api/contact` - Submit contact form
- `GET /api/properties/search` - Search properties with filters

## 🔮 Future Enhancements

- User authentication and accounts
- Favorites/wishlist feature with user persistence
- Advanced property filtering (pool, garage, AC, etc.)
- Virtual tours and 360° property views
- Admin dashboard for property management
- Real-time property notifications
- Integration with payment gateway for bookings
- Review and rating system
- Property comparison tool
- Mobile app (React Native)

## 🤝 Contributing

We welcome contributions! Feel free to fork the repository and submit pull requests.

## 📄 License

This project is proprietary and confidential. All rights reserved © 2024 LagosHomes.

## 👨‍💼 Author

**Zolla Austin**

- GitHub: [@zolla-austin](https://github.com/zolla-austin)
- Repository: [LagosHomes](https://github.com/zolla-austin/LagosHomes)

---

**Built with ❤️ for Lagos real estate enthusiasts**
