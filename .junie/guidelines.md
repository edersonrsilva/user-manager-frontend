# Junie Command
Analyze the project structure and tech stack and create a .junie/guidelines.md file with concise, well-structured information to help new developers. Include guidance on organizing the structure, running tests, executing scripts, and following best practices. Keep the content short, clear, and practical.

# User Manager Frontend - Developer Guidelines

## Project Overview
This is a React-based frontend application for managing user data. It provides a simple interface for viewing, creating, updating, and deleting user records.

### Tech Stack
- **React 18**: UI library
- **TypeScript**: For type safety
- **Vite**: Build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Axios**: HTTP client for API requests
- **ESLint**: Code linting

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

## Getting Started

### Installation
```bash
# Install dependencies
npm install
```

### Running the Application
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development Guidelines

### Component Structure
- Use functional components with hooks
- Keep components focused on a single responsibility
- Use TypeScript interfaces for props and state

### API Integration
- API services are located in `src/services/`
- Use the service modules for all API calls
- Handle API errors appropriately

### Styling
- Use Tailwind CSS utility classes for styling
- Follow the existing component styling patterns

### Type Definitions
- Define interfaces in the `src/types/` directory
- Use TypeScript types for all variables, parameters, and return values

### Best Practices
1. **Code Organization**:
   - Keep related files together
   - Follow the established project structure

2. **State Management**:
   - Use React hooks for local state
   - Consider context API for shared state if needed

3. **Error Handling**:
   - Always handle API errors
   - Provide user-friendly error messages

4. **Code Quality**:
   - Run linting before committing: `npm run lint`
   - Follow TypeScript best practices

5. **Backend Integration**:
   - The backend API is expected to run on `http://localhost:9090`
   - API endpoints are proxied through Vite's dev server

## Deployment
Build the application for production:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory, ready to be deployed to a static hosting service.