export interface Product {
  id: number
  name: string
  description: string
  price: number
  rating: number
  reviews: number
  image: string
  category: string
  inStock: boolean
  features: string[]
  specifications: Record<string, string>
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    description:
      "Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation and 30-hour battery life.",
    price: 299.99,
    rating: 4.8,
    reviews: 1247,
    image: "https://i.ibb.co.com/MyPz8Xq4/download.jpg",
    category: "Electronics",
    inStock: true,
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Quick charge (5 min = 3 hours)",
      "Premium leather comfort",
      "Hi-Res Audio certified",
    ],
    specifications: {
      "Driver Size": "40mm",
      "Frequency Response": "20Hz - 40kHz",
      "Battery Life": "30 hours",
      "Charging Time": "3 hours",
      Weight: "250g",
      Connectivity: "Bluetooth 5.0, USB-C",
    },
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    description:
      "Track your health and fitness goals with advanced sensors, GPS tracking, and comprehensive health monitoring.",
    price: 199.99,
    rating: 4.6,
    reviews: 892,
    image: "https://i.ibb.co.com/MyPz8Xq4/download.jpg",
    category: "Wearables",
    inStock: true,
    features: [
      "Heart rate monitoring",
      "GPS tracking",
      "Sleep analysis",
      "Water resistant (50m)",
      "7-day battery life",
    ],
    specifications: {
      Display: '1.4" AMOLED',
      "Battery Life": "7 days",
      "Water Resistance": "5ATM",
      Sensors: "Heart rate, GPS, Accelerometer",
      Compatibility: "iOS, Android",
      Weight: "45g",
    },
  },
  {
    id: 3,
    name: "Eco-Friendly Water Bottle",
    description:
      "Stay hydrated sustainably with our premium stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    price: 29.99,
    rating: 4.9,
    reviews: 2156,
    image: "https://i.ibb.co.com/MyPz8Xq4/download.jpg",
    category: "Lifestyle",
    inStock: true,
    features: [
      "Double-wall insulation",
      "24h cold / 12h hot",
      "BPA-free materials",
      "Leak-proof design",
      "Dishwasher safe",
    ],
    specifications: {
      Capacity: "500ml",
      Material: "Stainless Steel 304",
      Insulation: "Double-wall vacuum",
      Dimensions: "26cm x 7cm",
      Weight: "320g",
      Colors: "5 available",
    },
  },
  {
    id: 4,
    name: "Ergonomic Office Chair",
    description:
      "Enhance your productivity with our ergonomic office chair featuring lumbar support, adjustable height, and premium materials.",
    price: 449.99,
    rating: 4.7,
    reviews: 634,
    image: "https://i.ibb.co.com/MyPz8Xq4/download.jpg",
    category: "Furniture",
    inStock: true,
    features: ["Lumbar support system", "Height adjustable", "Breathable mesh back", "360° swivel", "5-year warranty"],
    specifications: {
      "Max Weight": "150kg",
      "Height Range": "42-52cm",
      Material: "Mesh, Steel, Plastic",
      Warranty: "5 years",
      Assembly: "Required",
      Dimensions: "65x65x110cm",
    },
  },
  {
    id: 5,
    name: "Wireless Charging Pad",
    description:
      "Charge your devices effortlessly with our fast wireless charging pad compatible with all Qi-enabled devices.",
    price: 39.99,
    rating: 4.4,
    reviews: 445,
    image: "https://i.ibb.co.com/MyPz8Xq4/download.jpg",
    category: "Electronics",
    inStock: false,
    features: ["Fast charging (10W)", "Qi-compatible", "LED indicator", "Non-slip surface", "Overcharge protection"],
    specifications: {
      Output: "10W max",
      Input: "USB-C",
      Compatibility: "Qi-enabled devices",
      Dimensions: "10cm diameter",
      Weight: "150g",
      "Cable Length": "1.2m",
    },
  },
  {
    id: 6,
    name: "Organic Cotton T-Shirt",
    description:
      "Comfortable and sustainable organic cotton t-shirt made from 100% certified organic materials with a perfect fit.",
    price: 24.99,
    rating: 4.5,
    reviews: 1089,
    image: "https://i.ibb.co.com/MyPz8Xq4/download.jpg",
    category: "Clothing",
    inStock: true,
    features: [
      "100% organic cotton",
      "GOTS certified",
      "Pre-shrunk fabric",
      "Reinforced seams",
      "Available in 8 colors",
    ],
    specifications: {
      Material: "100% Organic Cotton",
      Weight: "180 GSM",
      Fit: "Regular",
      Care: "Machine washable",
      Sizes: "XS - XXL",
      Origin: "Fair Trade Certified",
    },
  },
]

export function getProducts() {
  return products
}

export function getProduct(id: number) {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category.toLowerCase() === category.toLowerCase())
}

export function searchProducts(query: string) {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery),
  )
}

export function getCategories() {
  return [...new Set(products.map((product) => product.category))]
}
