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
    slug: 'alacarte-mall',
    title: 'Alacarte Mall',
    description:
      'A modern e-commerce platform for premium coffee machine brands featuring membership system and personalized shopping experience.',
    date: 'January 2023 - June 2023',
    tags: ['Next.js', 'TypeScript', 'Emotion', 'React Query'],
    image: '/images/alacarte-mall.png',
    content: `An e-commerce website for a premium coffee machine brand, built with Next.js and TypeScript. The project focused on delivering a seamless shopping experience with modern web technologies and performance optimization.

Key features include:
- Product catalog with pagination and advanced filtering
- Comprehensive shopping cart and checkout system
- Membership tier system with exclusive benefits and coupon distribution
- Wishlist functionality and product inquiry system
- Customer review management
- Sticky CTA bar on product detail pages for better conversion
- Fully responsive design across all devices

The project emphasized performance optimization and smooth user interactions. Implemented infinite scroll and infinite pagination using React Query, which provided valuable experience in working with official documentation and understanding advanced data fetching patterns.

The design approach was minimal and modern, allowing the premium coffee machines to take center stage while maintaining excellent usability.`,
  },
  {
    slug: 'alacarte-mall-admin',
    title: 'Alacarte Mall Admin',
    description:
      'A full-stack admin dashboard for managing e-commerce operations including products, orders, memberships, and automated membership tier management and benefits distribution.',
    date: 'January 2023 - August 2023',
    tags: ['Next.js', 'TypeScript', 'Emotion', 'Chart.js', 'Nest.js', 'MSSQL'],
    image: '/images/alacarte-mall-admin.jpg',
    content: `A full-stack admin dashboard built for managing the Alacarte Mall e-commerce platform. The project involved both frontend development and backend API development, handling complex business operations including product management, order processing, and automated membership benefits distribution.

Key features include:
- Comprehensive product, order, and customer management system
- Membership tier and coupon management with automated distribution
- Customer inquiry and review moderation
- Interactive analytics dashboard with Chart.js visualizations
- Batch processing for monthly membership data updates
- Excel import/export functionality for bulk operations
- Role-based access control
- RESTful API development with Nest.js and MSSQL database

The project's highlight was developing a reusable member list component for coupon distribution. This component featured advanced search, filtering, and pagination capabilities while managing complex state with nested user data. The component was designed to be modular and reusable across different pages in the admin system.

Through code reviews and pair programming with team members, I learned the importance of seeking help when facing development bottlenecks rather than spending too much time stuck on complex problems. This collaborative approach was crucial in managing the intricate state management required for handling large datasets and multiple user interactions simultaneously. Working on both frontend and backend provided valuable experience in full-stack development and understanding the complete data flow.`,
  },
  {
    slug: 'hli-corporate-website',
    title: 'HLI Corporate Website',
    description:
      'A modern corporate website for HLI, a brand development company, featuring multi-language support and responsive design across multiple breakpoints.',
    date: 'June 2023 - July 2023',
    tags: ['Next.js', 'TypeScript', 'Emotion', 'i18n'],
    image: '/images/hli-corporate.jpg',
    content: `A corporate website for HLI, a brand development company specializing in launching and growing premium brands in the Korean market. The site showcases the company's portfolio of brands including Alacarte, Jura, and Caso Design.

Key features include:
- Comprehensive company introduction and values presentation
- People & Culture section featuring job roles, office spaces, benefits, and CSR activities
- Business solutions showcase (Brand Navigator, Sales, Customer Management)
- Brand portfolio presentation
- News, partnership inquiries, recruitment, and contact sections
- Multi-language support using i18n for global accessibility
- Smooth animations and interactive elements throughout the site
- Integrated admin panel managed through Alacarte Mall admin system

The project presented significant challenges in responsive design implementation, particularly managing layout transitions across breakpoints where the design structure fundamentally changed between desktop, tablet, and mobile views. This required extensive communication with the design team to clarify ambiguous specifications in Figma mockups, strengthening cross-functional collaboration skills.

Implementing i18n for multi-language support provided valuable experience in internationalization, while working through complex responsive layout challenges deepened understanding of adaptive design principles and the importance of clear design-development communication.`,
  },
  {
    slug: 'little-lemon-restaurant',
    title: 'Little Lemon Restaurant',
    description:
      'A restaurant website with table reservation system built with React and TypeScript, showcasing UI development skills and semantic HTML practices.',
    date: 'September 2024',
    tags: ['React', 'TypeScript', 'Emotion', 'Figma'],
    image: '/images/little-lemon.jpg',
    content: `A restaurant website developed as part of a Coursera course, demonstrating proficiency in modern React development and UI implementation. The project features a complete table reservation system with an intuitive user interface.

Key features include:
- Interactive reservation system with date, time, and party size selection
- Reservation confirmation and management
- Restaurant menu showcase
- About page highlighting the restaurant's story
- Responsive design optimized for all devices
- Semantic HTML markup for better accessibility and SEO

The project provided valuable hands-on experience in UI/UX design workflow, starting from wireframing in Figma to implementation. Emphasis was placed on writing semantic HTML markup to improve code quality, accessibility, and maintainability.

This is a work-in-progress project with potential for future enhancements such as advanced features, backend integration, and additional user-facing functionality.`,
  },
  {
    slug: 'no-more-bookmarks',
    title: 'No More Bookmarks',
    description:
      'A personal productivity web app that transforms bookmark collectors into action takers by turning saved social media inspiration into documented real-world experiences.',
    date: 'June 2025 - Present',
    tags: ['Next.js', 'TypeScript', 'Supabase'],
    image: '/images/no-more-bookmarks.jpg',
    content: `A personal project born from the frustration of endlessly saving travel posts and recipes from Instagram and YouTube without ever actually experiencing them. This web app encourages users to move beyond passive bookmarking and start creating real-world memories.

Key features include:
- Bookmark management by saving social media content URLs
- Experience documentation with text entries and photo attachments
- Category organization for different types of activities
- Personal dashboard for tracking progress and growth
- Image upload and storage via Supabase
- Email-based authentication system
- Privacy-focused design with personal experience tracking

Currently implemented features focus on core functionality: saving bookmarks, documenting experiences with text and images, and organizing them by categories. The platform is designed primarily for personal use, allowing users to measure their growth and track how many saved inspirations they've turned into actual experiences.

This ongoing project has provided valuable hands-on experience with Supabase for backend services and database management. Future enhancements include GDPR compliance implementation, social media API integration for seamless bookmark importing, and optional sharing features for users who want to share their experiences with others.`,
  },
];
