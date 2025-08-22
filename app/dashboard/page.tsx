import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, Users, ShoppingCart, TrendingUp } from "lucide-react"
import { getProducts } from "@/lib/products"

export default function DashboardPage() {
  const products = getProducts()
  const totalProducts = products.length
  const inStockProducts = products.filter((p) => p.inStock).length
  const outOfStockProducts = totalProducts - inStockProducts
  const averagePrice = products.reduce((sum, p) => sum + p.price, 0) / totalProducts

  const stats = [
    {
      title: "Total Products",
      value: totalProducts,
      description: "Products in catalog",
      icon: Package,
      color: "text-blue-600",
    },
    {
      title: "In Stock",
      value: inStockProducts,
      description: "Available products",
      icon: ShoppingCart,
      color: "text-green-600",
    },
    {
      title: "Out of Stock",
      value: outOfStockProducts,
      description: "Need restocking",
      icon: TrendingUp,
      color: "text-red-600",
    },
    {
      title: "Average Price",
      value: `$${averagePrice.toFixed(2)}`,
      description: "Across all products",
      icon: Users,
      color: "text-purple-600",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif font-bold text-3xl text-foreground mb-2">Dashboard Overview</h1>
        <p className="text-muted-foreground">
          Welcome to your admin dashboard. Here's what's happening with your store.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Products */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Products</CardTitle>
          <CardDescription>Latest products added to your catalog</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {products
              .slice(-5)
              .reverse()
              .map((product) => (
                <div key={product.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-12 h-12 rounded-md object-cover"
                    />
                    <div>
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="font-semibold">${product.price}</span>
                    <Badge variant={product.inStock ? "default" : "secondary"}>
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </Badge>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
