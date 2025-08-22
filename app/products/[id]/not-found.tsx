import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="font-serif font-bold text-4xl text-foreground">Product Not Found</h1>
          <p className="text-xl text-muted-foreground">Sorry, we couldn't find the product you're looking for.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products">
            <Button className="bg-primary hover:bg-primary/90">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Browse Products
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
