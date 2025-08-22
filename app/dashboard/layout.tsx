import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Package, Plus, BarChart3, Settings, Users } from "lucide-react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <ShoppingCart className="h-8 w-8 text-primary" />
                <span className="font-serif font-bold text-xl text-foreground">EcoShop</span>
              </Link>
              <div className="ml-8">
                <span className="text-sm text-muted-foreground">Dashboard</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/products">
                <Button variant="outline" size="sm">
                  View Store
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-[calc(100vh-4rem)] bg-card border-r border-border">
          <div className="p-6">
            <h2 className="font-serif font-semibold text-lg mb-6">Admin Panel</h2>
            <nav className="space-y-2">
              <Link
                href="/dashboard"
                className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <BarChart3 className="h-4 w-4" />
                <span>Overview</span>
              </Link>
              <Link
                href="/dashboard/add-product"
                className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground"
              >
                <Plus className="h-4 w-4" />
                <span>Add Product</span>
              </Link>
              <Link
                href="/dashboard/products"
                className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <Package className="h-4 w-4" />
                <span>Manage Products</span>
              </Link>
              <Link
                href="/dashboard/users"
                className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <Users className="h-4 w-4" />
                <span>Users</span>
              </Link>
              <Link
                href="/dashboard/settings"
                className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  )
}
