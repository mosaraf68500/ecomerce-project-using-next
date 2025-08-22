import { type NextRequest, NextResponse } from "next/server"
import { loadProducts, addProduct, initializeData } from "@/lib/storage"

export async function GET() {
  await initializeData()
  const products = await loadProducts()
  return NextResponse.json(products)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const { name, description, price, category, inStock, features, specifications } = body

    if (!name || !description || !price || !category) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const newProduct = await addProduct({
      name,
      description,
      price: Number.parseFloat(price),
      rating: 0,
      reviews: 0,
      image: "/placeholder.svg?height=400&width=400",
      category,
      inStock: Boolean(inStock),
      features: features || [],
      specifications: specifications || {},
    })

    return NextResponse.json(newProduct, { status: 201 })
  } catch (error) {
    console.error("Error creating product:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
