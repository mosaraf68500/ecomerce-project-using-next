import type { Product } from "./products"
import { promises as fs } from "fs"
import path from "path"

const DATA_FILE = path.join(process.cwd(), "data", "products.json")

// Ensure data directory exists
async function ensureDataDir() {
  const dataDir = path.dirname(DATA_FILE)
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
}

// Load products from file
export async function loadProducts(): Promise<Product[]> {
  try {
    await ensureDataDir()
    const data = await fs.readFile(DATA_FILE, "utf-8")
    return JSON.parse(data)
  } catch (error) {
    // If file doesn't exist, return empty array
    return []
  }
}

// Save products to file
export async function saveProducts(products: Product[]): Promise<void> {
  await ensureDataDir()
  await fs.writeFile(DATA_FILE, JSON.stringify(products, null, 2))
}

// Add a new product
export async function addProduct(product: Omit<Product, "id">): Promise<Product> {
  const products = await loadProducts()
  const newProduct: Product = {
    ...product,
    id: Date.now().toString(), // Simple ID generation
  }
  products.push(newProduct)
  await saveProducts(products)
  return newProduct
}

// Get product by ID
export async function getProductById(id: string): Promise<Product | null> {
  const products = await loadProducts()
  return products.find((p) => p.id === id) || null
}

// Initialize with sample data if empty
export async function initializeData() {
  const products = await loadProducts()
  if (products.length === 0) {
    const sampleProducts: Product[] = [
      {
        id: "1",
        name: "Wireless Headphones",
        description: "Premium noise-cancelling wireless headphones with superior sound quality.",
        price: 299.99,
        category: "Electronics",
        image: "/placeholder.svg?height=400&width=400",
        inStock: true,
        rating: 4.5,
        reviews: 128,
        features: ["Noise Cancellation", "30-hour Battery", "Quick Charge", "Bluetooth 5.0"],
        specifications: {
          "Battery Life": "30 hours",
          "Charging Time": "2 hours",
          Weight: "250g",
          Connectivity: "Bluetooth 5.0",
        },
      },
      {
        id: "2",
        name: "Smart Watch",
        description: "Advanced fitness tracking smartwatch with heart rate monitoring.",
        price: 399.99,
        category: "Electronics",
        image: "/placeholder.svg?height=400&width=400",
        inStock: true,
        rating: 4.3,
        reviews: 89,
        features: ["Heart Rate Monitor", "GPS Tracking", "Water Resistant", "Sleep Tracking"],
        specifications: {
          Display: '1.4" AMOLED',
          "Battery Life": "7 days",
          "Water Resistance": "5ATM",
          Sensors: "Heart Rate, GPS, Accelerometer",
        },
      },
    ]
    await saveProducts(sampleProducts)
  }
}
