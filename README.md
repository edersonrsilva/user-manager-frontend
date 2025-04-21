# Junie Command
Write/update a README.md about the project

# User Manager Frontend

A modern React application for managing user data with a clean and intuitive interface.

## Overview

User Manager Frontend is a web application that provides a simple interface for viewing, creating, updating, and deleting user records. It's built with modern web technologies and follows best practices for React development.

## Features

- View a list of all users
- Create new user records
- Update existing user information
- Delete user records
- Responsive design for desktop and mobile devices

## Tech Stack

- **React 18**: UI library
- **TypeScript**: For type safety
- **Vite**: Build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Axios**: HTTP client for API requests
- **ESLint**: Code linting

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd user-manager-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

#### Development Mode

Start the development server:
```bash
npm run dev
```

This will start the application in development mode with hot-reload enabled. The application will be available at `http://localhost:5173` by default.

#### Production Build

Build the application for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
user-manager-frontend/
├── src/                  # Source code
│   ├── assets/           # Static assets (images, fonts, etc.)
│   ├── components/       # React components
│   ├── services/         # API service modules
│   ├── types/            # TypeScript type definitions
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Application entry point
├── public/               # Public static files
├── .junie/               # Project guidelines and documentation
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies and scripts
```

## Development Guidelines

### Code Style and Quality

- Run linting before committing:
  ```bash
  npm run lint
  ```

- Follow TypeScript best practices
- Use functional components with hooks
- Keep components focused on a single responsibility

### API Integration

- The backend API is expected to run on `http://localhost:9090`
- API endpoints are proxied through Vite's dev server
- API services are located in `src/services/`

## Deployment

The application can be deployed to any static hosting service. After building the application with `npm run build`, the build artifacts will be stored in the `dist/` directory.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.