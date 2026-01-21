export interface Project {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
  image: string;
}

export const projects: Project[] = [
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    description:
      'A minimal portfolio website built with Next.js and Tailwind CSS featuring a clean black and white design.',
    date: 'January 2026',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    image: '/images/portfolio-website.jpg',
    content: `This portfolio website showcases my work and projects in a clean, minimal design. Built with Next.js 14 and styled with Tailwind CSS, it features a responsive layout that works beautifully on all devices.

Key features include:
- Server-side rendering for optimal performance
- Clean typography with the Geist font family
- Responsive grid layout for project showcasing
- Dark mode support
- SEO optimized with meta tags

The design philosophy focuses on content-first approach, letting the work speak for itself without unnecessary visual distractions.`,
  },
  {
    slug: 'task-management-app',
    title: 'Task Management App',
    description:
      'A productivity application for managing daily tasks with drag-and-drop functionality and real-time sync.',
    date: 'December 2025',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    image: '/images/task-management.jpg',
    content: `A full-stack task management application designed to help users organize their daily workflows efficiently.

The application features:
- Intuitive drag-and-drop interface for task organization
- Real-time synchronization across devices
- Project and workspace management
- Due date tracking and reminders
- Collaborative features for team projects

Built with a React frontend and Node.js backend, utilizing PostgreSQL for reliable data persistence and WebSocket connections for real-time updates.`,
  },
  {
    slug: 'weather-dashboard',
    title: 'Weather Dashboard',
    description:
      'A beautiful weather application that displays current conditions and forecasts with animated visualizations.',
    date: 'November 2025',
    tags: ['Vue.js', 'D3.js', 'Weather API'],
    image: '/images/weather-dashboard.jpg',
    content: `An elegant weather dashboard that provides comprehensive weather information with stunning visual representations.

Features include:
- Current weather conditions with animated icons
- 7-day forecast with detailed breakdowns
- Interactive charts showing temperature trends
- Location-based weather detection
- Multiple unit support (Celsius/Fahrenheit)

The visualization layer is powered by D3.js, creating smooth animations that make checking the weather a delightful experience.`,
  },
  {
    slug: 'e-commerce-platform',
    title: 'E-commerce Platform',
    description:
      'A modern online shopping platform with cart management, payment integration, and order tracking.',
    date: 'October 2025',
    tags: ['Next.js', 'Stripe', 'Supabase'],
    image: '/images/ecommerce-platform.jpg',
    content: `A comprehensive e-commerce solution built for small to medium-sized businesses looking to establish their online presence.

Core functionality includes:
- Product catalog with search and filtering
- Shopping cart with persistent storage
- Secure checkout with Stripe integration
- Order history and tracking
- Admin dashboard for inventory management

The platform prioritizes user experience with fast page loads, intuitive navigation, and a seamless checkout process.`,
  },
  {
    slug: 'markdown-editor',
    title: 'Markdown Editor',
    description:
      'A distraction-free writing tool with live preview, syntax highlighting, and export capabilities.',
    date: 'September 2025',
    tags: ['TypeScript', 'CodeMirror', 'Electron'],
    image: '/images/markdown-editor.jpg',
    content: `A focused writing environment for developers and content creators who work with Markdown daily.

Key features:
- Split-pane editor with live preview
- Syntax highlighting for code blocks
- Export to HTML, PDF, and various formats
- Custom themes and font settings
- Keyboard shortcuts for common operations

Built as a desktop application using Electron, ensuring a native-like experience across Windows, macOS, and Linux.`,
  },
  {
    slug: 'api-monitoring-tool',
    title: 'API Monitoring Tool',
    description:
      'A developer tool for monitoring API health, response times, and uptime with alerting capabilities.',
    date: 'August 2025',
    tags: ['Go', 'Redis', 'Grafana'],
    image: '/images/api-monitoring.jpg',
    content: `A robust monitoring solution designed to keep track of API performance and availability.

Monitoring capabilities:
- Endpoint health checks at configurable intervals
- Response time tracking and historical data
- Custom alerting via email, Slack, and webhooks
- Dashboard with real-time metrics
- Status page generation for public communication

The backend is written in Go for performance, with Redis handling real-time data and Grafana providing visualization dashboards.`,
  },
];
