# Next.js 15 E-commerce Application

A modern, responsive e-commerce application built with Next.js 15 featuring product catalog, search functionality, and admin dashboard for product management.

## 🚀 Features

### Public Features
- **Landing Page** - Hero section with product highlights and company information
- **Product Catalog** - Browse products with search, filtering, and sorting capabilities
- **Product Details** - Detailed product pages with specifications and features
- **Responsive Design** - Mobile-first design that works on all devices

### Admin Features
- **Product Management Dashboard** - Add new products with detailed information
- **File-based Storage** - Persistent data storage using JSON files
- **Form Validation** - Comprehensive validation for product creation

## 🛠️ Technologies Used

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Storage:** File-based JSON storage
- **Fonts:** Space Grotesk (headings), DM Sans (body text)

## 📦 Installation & Setup

1. **Clone the repository**
   \`\`\`bash
   git clone <your-repo-url>
   cd nextjs-ecommerce-app
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   \`\`\`env
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Route Summary

### Public Routes
- `/` - Landing page with hero section and product highlights
- `/products` - Product catalog with search and filtering
- `/products/[id]` - Individual product detail pages

### Admin Routes
- `/dashboard` - Admin dashboard overview with statistics
- `/dashboard/add-product` - Form to add new products

### API Routes
- `GET /api/products` - Fetch all products
- `POST /api/products` - Create a new product
- `GET /api/products/[id]` - Fetch single product by ID

## 🎯 Usage

### Browsing Products
1. Visit the homepage to see featured products
2. Navigate to `/products` to browse the full catalog
3. Use search, filters, and sorting to find specific products
4. Click on any product to view detailed information

### Adding Products (Admin)
1. Navigate to `/dashboard/add-product`
2. Fill out the product form with:
   - Basic information (name, description, price)
   - Product specifications
   - Features list
   - Category and availability
3. Submit the form to add the product to the catalog

## 📁 Project Structure

\`\`\`
├── app/
│   ├── api/
│   │   └── products/          # API routes for product operations
│   ├── dashboard/             # Admin dashboard pages
│   ├── products/              # Public product pages
│   ├── globals.css            # Global styles and design tokens
│   ├── layout.tsx             # Root layout with fonts and providers
│   └── page.tsx               # Homepage
├── components/
│   └── ui/                    # shadcn/ui components
├── lib/
│   ├── products.ts            # Product data and utilities
│   ├── storage.ts             # File-based storage utilities
│   └── utils.ts               # General utility functions
├── data/
│   ├── products.json          # Product data storage
│   └── users.json             # User data storage
└── public/                    # Static assets
\`\`\`

## 🎨 Design System

### Colors
- **Primary:** Emerald green (#10b981)
- **Secondary:** Slate gray (#64748b)
- **Accent:** Orange (#f97316)
- **Background:** White/Gray variants
- **Text:** Dark gray (#1f2937)

### Typography
- **Headings:** Space Grotesk (600, 700 weights)
- **Body:** DM Sans (400, 500 weights)
- **Responsive:** Mobile-first approach with consistent spacing

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 📝 Development Notes

### Data Storage
- Products are stored in `data/products.json`
- File-based storage is used for simplicity
- In production, consider migrating to a database (PostgreSQL, MongoDB)

### Adding New Features
- Follow the existing component structure
- Use TypeScript for type safety
- Maintain responsive design principles
- Add proper error handling and loading states

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

