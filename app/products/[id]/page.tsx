import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star, ArrowLeft, Check, X, Heart, Share2 } from "lucide-react"
import type { Product } from "@/lib/products"

interface ProductPageProps {
  params: {
    id: string
  }
}

async function getProduct(id: string): Promise<Product | null> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/products/${id}`, {
      cache: "no-store", // Ensure fresh data
    })

    if (!response.ok) {
      return null
    }

    return await response.json()
  } catch (error) {
    console.error("Failed to fetch product:", error)
    return null
  }
}

async function getAllProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/products`, {
      cache: "no-store",
    })

    if (!response.ok) {
      return []
    }

    return await response.json()
  } catch (error) {
    console.error("Failed to fetch products:", error)
    return []
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.id)

  if (!product) {
    notFound()
  }

  const allProducts = await getAllProducts()
  const relatedProducts = allProducts.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <ShoppingCart className="h-8 w-8 text-primary" />
                <span className="font-serif font-bold text-xl text-foreground">EcoShop</span>
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/products" className="text-primary px-3 py-2 rounded-md text-sm font-medium">
                  Products
                </Link>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Dashboard link added */}
              <Link href="/dashboard">
                <Button variant="outline" size="sm">
                  Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <section className="py-4 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg bg-secondary">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-accent/10 text-accent-foreground">
                    {product.category}
                  </Badge>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <h1 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">{product.name}</h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-4xl text-foreground">${product.price}</span>
                  <div className="flex items-center space-x-2">
                    {product.inStock ? (
                      <>
                        <Check className="h-5 w-5 text-green-600" />
                        <span className="text-green-600 font-medium">In Stock</span>
                      </>
                    ) : (
                      <>
                        <X className="h-5 w-5 text-red-600" />
                        <span className="text-red-600 font-medium">Out of Stock</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90" disabled={!product.inStock}>
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="lg">
                    Buy Now
                  </Button>
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-serif font-semibold text-xl mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-16">
            <h2 className="font-serif font-bold text-2xl mb-8">Specifications</h2>
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-border last:border-b-0">
                      <span className="font-medium text-foreground">{key}</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="font-serif font-bold text-2xl mb-8">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Card key={relatedProduct.id} className="group hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="p-0">
                      <div className="aspect-square overflow-hidden rounded-t-lg">
                        <img
                          src={relatedProduct.image || "/placeholder.svg"}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardTitle className="font-serif text-lg mb-2">{relatedProduct.name}</CardTitle>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-xl text-foreground">${relatedProduct.price}</span>
                        <Link href={`/products/${relatedProduct.id}`}>
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Back to Products */}
      <section className="py-8 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/products">
            <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Products</span>
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
