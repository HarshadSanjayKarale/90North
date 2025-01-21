# React Dashboard with Dynamic Scaling

A modern, responsive dashboard built with React + Vite and Tailwind CSS, featuring dynamic content scaling and a static navbar.

## Features

- Responsive layout with dynamic content scaling
- Static navbar with hide/show on scroll
- Collapsible sidebar menu
- Responsive grid layout
- Real-time statistics display
- Recent activity feed
- Notifications panel
- Quick actions section
- Tailwind CSS styling

## Prerequisites

- Node.js (version 14.0.0 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Install required packages:
```bash
npm install -D tailwindcss postcss autoprefixer lucide-react
# or
yarn add -D tailwindcss postcss autoprefixer lucide-react
```

4. Initialize Tailwind CSS:
```bash
npx tailwindcss init -p
```

## Project Structure

```
src/
  ├── App.jsx        # Main application component
  ├── App.css        # Custom styles for the application
  ├── index.css      # Tailwind CSS imports
  ├── main.jsx       # Application entry point
  └── assets/        # Static assets
```

## Running the Application

1. Start the development server:
```bash
npm run dev
# or
yarn dev
```

2. Open your browser and navigate to `http://localhost:5173`

## Responsive Scaling

The dashboard implements automatic content scaling based on viewport width:
- 992px - 1600px: 90% scale
- 700px - 767px: 80% scale
- 600px - 700px: 75% scale
- ≤ 600px: 50% scale

## Tailwind CSS Configuration

The project uses Tailwind CSS for styling. The configuration can be found in `tailwind.config.js`. You can customize the theme, add plugins, or extend the configuration as needed.

## Customization

You can customize the dashboard by:
1. Modifying the Tailwind theme in `tailwind.config.js`
2. Adding custom CSS in `App.css`
3. Adjusting the responsive breakpoints
4. Modifying the component structure in `App.jsx`

## Browser Support

This dashboard supports all modern browsers. For older browsers, you may need to add appropriate polyfills and adjust the browserslist in your project configuration.