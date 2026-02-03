## NIMBUS

Nimbus is a simple admin panel currently under development, designed for single users.

With Nimbus, users can:
• Edit text content
• Upload images
• Edit the Home Page
• Manage services
• Update services

## Core Features

• Secure Login page
• Dashboard home displaying a site overview
• Page-based editor with a sidebar listing pages: Home, About, Services, Contact
• Page editor capabilities:
• Edit text fields (titles, paragraphs, descriptions)
• Upload and replace images (hero images, gallery images, player photos)
• Save & Publish button to update content
• Simple navigation sidebar
• Logout button

## Tech Stack

• Frontend: React + Tailwind CSS + Context API
• Backend: Firebase (Authentication + Firestore + Storage)
• Hosting: Vercel

Nimbus/
├── public/
├── src/
│ ├── admin/
| ├── components/
| ├── pages/
| ├── services/
| AdminLayout.tsxs
| ├── components/
│ ├── pages/
│ ├── firebase/
| ├── libs/
│ └── App.jsx
├── package.json
└── README.md

# Clone the repository

git clone https://github.com/shekinahwebdev/NIMBUS.git

# Navigate to project folder

cd nimbus

# Install dependencies

npm install

# Start development server

npm start
