# Safeway
Safeway is a safety-first navigation app designed to make walking alone at night feel less uncertain and more confident. 

This is a project I did for my UX Design class and thought I could pick it up as a side project.

The structure of the app is as follows:

## Features

Routes Tab: View and compare three route options (Safest, Balanced, Fastest) with detailed safety metrics
Navigation View: Real-time navigation with map visualization and location sharing
Safety Tab: Overall safety scores and community reports for specific areas
Contacts Tab: Manage trusted contacts with auto-share features
Feed Tab: Community safety reports and updates
Report Tab: Quick safety reporting with multiple categories

## Tech Stack

React 18
Vite
Tailwind CSS
Lucide React (icons)

## Getting Started
## Prerequisites

Node.js (v16 or higher)
npm or yarn

## Installation

Navigate to the project directory:

bashcd safeway-app

Install dependencies:

bashnpm install

## Start the development server:

bashnpm run dev

Open your browser and navigate to http://localhost:5173

## Available Scripts

npm run dev - Start development server
npm run build - Build for production
npm run preview - Preview production build

## Project Structure
safeway-app/
src/
components/
BottomNav.jsx
ContactsTab.jsx
FeedTab.jsx
NavigationView.jsx
ReportTab.jsx
RoutesTab.jsx
SafetyTab.jsx
StatusBar.jsx

data/
mockData.js
App.jsx
main.jsx
index.css
index.html
package.json
vite.config.js
tailwind.config.js
postcss.config.js

## Design
The app features a dark theme with green accents, following the high-fidelity prototype design. It includes:

iPhone-style interface with rounded corners
Dark background (gray-950/black) with green accent color (#10B981)
Smooth transitions and interactive elements
Responsive layout optimized for mobile devices
