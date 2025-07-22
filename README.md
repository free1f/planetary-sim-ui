# 🪐 Planetary Sim

A React-based planetary simulation application with an interactive component library built with Storybook.

## 🚀 Live Demo

- **Main Application**: [https://free1f.github.io/planetary-sim/app.html](https://free1f.github.io/planetary-sim/app.html)
- **Component Library (Storybook)**: [https://free1f.github.io/planetary-sim/storybook/](https://free1f.github.io/planetary-sim/storybook/)
- **Project Hub**: [https://free1f.github.io/planetary-sim/](https://free1f.github.io/planetary-sim/)

## 🛠️ Development

This project uses Vite + React for fast development and Storybook for component documentation.

### Prerequisites

- Node.js (version 18 or higher)
- npm

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/free1f/planetary-sim.git
   cd planetary-sim
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Start Storybook**
   ```bash
   npm run storybook
   ```

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run preview` - Preview the production build
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production
- `npm run deploy` - Build both app and Storybook
- `npm run lint` - Run ESLint

## 📦 Components

This project includes a collection of reusable React components:

- **ColorPicker** - Hexagonal color picker with grid layout
- **Container** - Flexible container component with customizable styling
- **HexagonRhombus** - Interactive hexagon component with various styling options

## 🚀 Deployment

The project is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the main branch.

### Manual Deployment

To deploy manually:

1. Build the project:
   ```bash
   npm run deploy
   ```

2. The GitHub Action will automatically deploy to GitHub Pages

## 🔧 Technical Stack

- **React 19.1.0** - UI library
- **Vite 7.0.4** - Build tool and development server
- **Storybook 9.0.17** - Component documentation and testing
- **ESLint** - Code linting
- **GitHub Pages** - Hosting platform
- **GitHub Actions** - CI/CD pipeline

## 📝 Project Structure

```
planetary-sim/
├── src/
│   ├── components/          # React components
│   ├── stories/            # Storybook stories
│   └── assets/             # Static assets
├── public/                 # Public assets
├── .github/workflows/      # GitHub Actions
└── storybook-static/       # Built Storybook (generated)
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
