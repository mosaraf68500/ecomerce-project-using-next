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
