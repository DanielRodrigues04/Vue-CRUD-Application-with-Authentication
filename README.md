# Vue 3 CRUD Application with Authentication

A modern CRUD (Create, Read, Update, Delete) application built with Vue 3, TypeScript, and Vuetify. This application includes user authentication and a responsive dashboard layout.

## Features

- 🔐 User Authentication
- 📱 Responsive Dashboard Layout
- ✨ Material Design UI with Vuetify
- 📊 User Management CRUD Operations
- 🚦 Protected Routes
- 🏪 State Management with Pinia

## Tech Stack

- Vue 3 with Composition API
- TypeScript
- Vuetify 3 (Material Design Framework)
- Vue Router
- Pinia for State Management
- Vite

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## Usage

### Authentication

Default credentials:
- Username: `admin`
- Password: `admin`

### Features

1. **Authentication**
   - Login/Logout functionality
   - Protected routes
   - Authentication state persistence

2. **User Management**
   - View all users in a table
   - Add new users
   - Edit existing users
   - Delete users
   - Form validation

3. **Dashboard Layout**
   - Responsive sidebar
   - Material Design components
   - Clean and modern UI

## Project Structure

```
src/
├── components/       # Reusable Vue components
├── layouts/         # Layout components (Dashboard)
├── views/           # Page components
├── router/          # Vue Router configuration
├── stores/          # Pinia stores
└── main.ts         # Application entry point
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details