import type { Project } from "./types"

export const projects: Project[] = [
  {
    id: "cryptotracker",
    title: "Cryptocurrency Tracker",
    description:
      "Monitor the live cryptocurrency market in real-time. Track your favorite coins, view detailed statistics, and manage your personal portfolio on the go. Stay informed with instant price alerts and interactive performance charts.",
    image: "/cryptotracker.jpeg",
    tags: ["Mobile App", "React Native", "Expo", "Firebase", "CoinLore API"],
    sourceUrl: "https://github.com/arjunbishnoi/CryptoTracker",
    featured: true,
    challenge:
      "Building a cross-platform mobile app with real-time data synchronization and offline capabilities.",
    solution:
      "Implemented Firebase Firestore for real-time data, Expo for cross-platform development, and optimized API calls for smooth performance.",
  },
  {
    id: "4rent",
    title: "4rent",
    description:
      "Find your next home with this modern rental marketplace. Browse through high-resolution property galleries, check detailed pricing, and save your favorite listings. Streamline your search with smart filters and instant landlord communication.",
    image: "/4rent.jpeg",
    tags: ["Mobile App", "SwiftUI", "Combine", "MVVM", "iOS"],
    sourceUrl: "https://github.com/arjunbishnoi/4rent",
    featured: true,
  },
  {
    id: "carrental",
    title: "Car Rental",
    description:
      "Make booking your next vehicle effortless. Search through available cars, filter by your specific needs, pick your dates, and complete your reservation. Enjoy a seamless checkout experience with real-time availability and transparent pricing.",
    image: "/carrental.png",
    tags: ["Mobile App", "Kotlin", "MVVM", "Jetpack Navigation", "Retrofit", "Room", "Hilt"],
    sourceUrl: "https://github.com/arjunbishnoi/CarRental",
    featured: true,
  },
]
