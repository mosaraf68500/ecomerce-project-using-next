import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  Star,
  Users,
  Shield,
  Truck,
  Heart,
  Gift,
  MessageSquare,
} from "lucide-react";
import Login from "./../components/Login";

export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      description:
        "Immersive audio with advanced noise cancellation and 20-hour battery life",
      price: 299.99,
      rating: 4.8,
      image: "https://i.ibb.co/MyPz8Xq4/download.jpg",
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      description:
        "Track fitness, heart rate, and sleep with a sleek, waterproof design",
      price: 199.99,
      rating: 4.6,
      image: "https://i.ibb.co/MyPz8Xq4/download.jpg",
    },
    {
      id: 3,
      name: "Eco-Friendly Water Bottle",
      description:
        "Sustainable stainless steel bottle with double-wall insulation",
      price: 29.99,
      rating: 4.9,
      image: "https://i.ibb.co/MyPz8Xq4/download.jpg",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      comment:
        "The quality of products at EcoShop is unmatched. Fast shipping and great support!",
      rating: 5,
    },
    {
      name: "James R.",
      comment:
        "Love the eco-friendly focus. The fitness watch is a game-changer!",
      rating: 4.7,
    },
    {
      name: "Emma L.",
      comment:
        "Amazing customer service and easy-to-use dashboard for managing my products.",
      rating: 4.9,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <ShoppingCart className="h-8 w-8 text-primary" />
                <span className="font-serif font-bold text-2xl text-foreground">
                  EcoShop
                </span>
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <Link
                  href="/products"
                  className="text-foreground hover:text-primary px-4 py-2 rounded-md text-base font-medium transition-colors duration-200"
                >
                  Products
                </Link>
                <Link
                  href="/About"
                  className="text-muted-foreground hover:text-primary px-4 py-2 rounded-md text-base font-medium transition-colors duration-200"
                >
                  About
                </Link>
                <Link
                  href="/About"
                  className="text-muted-foreground hover:text-primary px-4 py-2 rounded-md text-base font-medium transition-colors duration-200"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="outline" size="sm" className="px-4 py-2">
                  Dashboard
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 px-4 py-2"
                >
                  Shop Now
                </Button>
              </Link>
            </div>
            <div>
              <Login></Login>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-background py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://i.ibb.co/MyPz8Xq4/download.jpg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Discover Premium Products with Ease
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Explore a curated selection of eco-friendly products, manage your
              inventory effortlessly, and shop securely with EcoShop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg transform hover:scale-105 transition-transform duration-200"
                >
                  Shop Now
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 text-lg bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  Manage Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Why Choose EcoShop?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience seamless shopping and product management with our
              premium features.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg hover:bg-secondary/20 transition-colors duration-300">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-xl mb-2">
                Fast & Free Shipping
              </h3>
              <p className="text-muted-foreground text-sm">
                Enjoy free delivery on orders over $50, delivered in 2-3 days.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-secondary/20 transition-colors duration-300">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-xl mb-2">
                Secure Transactions
              </h3>
              <p className="text-muted-foreground text-sm">
                Shop with confidence with our encrypted payment systems.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-secondary/20 transition-colors duration-300">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-xl mb-2">
                24/7 Customer Support
              </h3>
              <p className="text-muted-foreground text-sm">
                Our team is here to assist you anytime, anywhere.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-secondary/20 transition-colors duration-300">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-xl mb-2">
                Exclusive Rewards
              </h3>
              <p className="text-muted-foreground text-sm">
                Earn points on every purchase and redeem exclusive offers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Our Top Picks
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our curated collection of high-quality, eco-conscious
              products.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-shadow duration-300 bg-card border-border rounded-lg overflow-hidden"
              >
                <CardHeader className="p-0">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge
                      variant="secondary"
                      className="bg-accent/20 text-accent-foreground"
                    >
                      Featured
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="font-serif text-xl font-semibold mb-2">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {product.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-2xl text-foreground">
                      ${product.price.toFixed(2)}
                    </span>
                    <Link href={`/products/${product.id}`}>
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90 px-4 py-2"
                      >
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                Browse All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our community of happy shoppers and product managers.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-card border-border p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(testimonial.rating)
                            ? "fill-accent text-accent"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter for exclusive offers, product updates,
              and eco-friendly tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-64"
              />
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <ShoppingCart className="h-8 w-8 text-accent" />
                <span className="font-serif font-bold text-2xl">EcoShop</span>
              </div>
              <p className="text-background/80 mb-6 max-w-md text-sm">
                Your trusted destination for sustainable, high-quality products.
                Shop smart, live green, and manage effortlessly.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://twitter.com"
                  className="text-background/80 hover:text-accent transition-colors"
                >
                  <MessageSquare className="h-6 w-6" />
                </Link>
                <Link
                  href="https://facebook.com"
                  className="text-background/80 hover:text-accent transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54v-2.892h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.892h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </Link>
                <Link
                  href="https://instagram.com"
                  className="text-background/80 hover:text-accent transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.317 3.608 1.292.975.975 1.23 2.242 1.292 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.317 2.633-1.292 3.608-.975.975-2.242 1.23-3.608 1.292-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.317-3.608-1.292-.975-.975-1.23-2.242-1.292-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.317-2.633 1.292-3.608.975-.975 2.242-1.23 3.608-1.292 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.332.014 7.052.072 5.775.13 4.586.387 3.61 1.363 2.634 2.339 2.377 3.528 2.319 4.805.014 8.332 0 8.741 0 12s.014 3.668.072 4.948c.058 1.277.315 2.466 1.291 3.442.976.976 2.165 1.233 3.442 1.291C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.058 2.466-.315 3.442-1.291.976-.976 1.233-2.165 1.291-3.442C23.986 15.668 24 15.259 24 12s-.014-3.668-.072-4.948c-.058-1.277-.315-2.466-1.291-3.442C21.661 2.634 20.472 2.377 19.195 2.319 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-lg mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/products"
                    className="text-background/80 hover:text-accent transition-colors"
                  >
                    Shop Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-background/80 hover:text-accent transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-background/80 hover:text-accent transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard"
                    className="text-background/80 hover:text-accent transition-colors"
                  >
                    Admin Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/help"
                    className="text-background/80 hover:text-accent transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shipping"
                    className="text-background/80 hover:text-accent transition-colors"
                  >
                    Shipping & Delivery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/returns"
                    className="text-background/80 hover:text-accent transition-colors"
                  >
                    Returns & Refunds
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-background/80 hover:text-accent transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-lg mb-4">
                Contact Us
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="text-background/80">
                  Email: support@ecoshop.com
                </li>
                <li className="text-background/80">Phone: (123) 456-7890</li>
                <li className="text-background/80">
                  Address: 123 Eco Lane, Green City
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-12 pt-8 text-center">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} EcoShop. All rights reserved. Built
              with Next.js and v0.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
