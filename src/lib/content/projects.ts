import type { Project } from "./types"
import { getProjectArticleBySlug } from "./project-articles"

const cryptoTrackerArticle = getProjectArticleBySlug("cryptocurrency-tracker")
const fourRentArticle = getProjectArticleBySlug("4rent")
const carRentalArticle = getProjectArticleBySlug("car-rental")

export const projects: Project[] = [
  {
    id: "cryptotracker",
    title: cryptoTrackerArticle?.title ?? "Cryptocurrency Tracker",
    description:
      cryptoTrackerArticle?.description ??
      "Monitor the live cryptocurrency market in real-time. Track your favorite coins, view detailed statistics, and manage your personal portfolio on the go. Stay informed with instant price alerts and interactive performance charts.",
    image: cryptoTrackerArticle?.image ?? "/cryptotracker.jpg",
    category: cryptoTrackerArticle?.category ?? "React Native",
    tags:
      cryptoTrackerArticle?.tags ??
      ["Mobile App", "React Native", "Expo", "Firebase", "CoinLore API"],
    date: cryptoTrackerArticle?.cardDate ?? "18 Mar 2026",
    url: cryptoTrackerArticle ? `/projects/${cryptoTrackerArticle.slug}` : "#",
    sourceUrl: "https://github.com/arjunbishnoi/CryptoTracker",
    featured: true,
    challenge:
      "Building a cross-platform mobile app with real-time data synchronization and offline capabilities.",
    solution:
      "Implemented Firebase Firestore for real-time data, Expo for cross-platform development, and optimized API calls for smooth performance.",
  },
  {
    id: "4rent",
    title: fourRentArticle?.title ?? "4rent",
    description:
      fourRentArticle?.description ??
      "Find your next home with this modern rental marketplace. Browse through high-resolution property galleries, check detailed pricing, and save your favorite listings. Streamline your search with smart filters and instant landlord communication.",
    image: fourRentArticle?.image ?? "/4rent.jpg",
    category: fourRentArticle?.category ?? "SwiftUI",
    tags:
      fourRentArticle?.tags ??
      ["Mobile App", "SwiftUI", "Combine", "MVVM", "iOS"],
    date: fourRentArticle?.cardDate ?? "06 Feb 2026",
    url: fourRentArticle ? `/projects/${fourRentArticle.slug}` : "#",
    sourceUrl: "https://github.com/arjunbishnoi/4rent",
    featured: true,
  },
  {
    id: "carrental",
    title: carRentalArticle?.title ?? "Car Rental",
    description:
      carRentalArticle?.description ??
      "Make booking your next vehicle effortless. Search through available cars, filter by your specific needs, pick your dates, and complete your reservation. Enjoy a seamless checkout experience with real-time availability and transparent pricing.",
    image: carRentalArticle?.image ?? "/carrental.png",
    category: carRentalArticle?.category ?? "Kotlin",
    tags:
      carRentalArticle?.tags ??
      ["Mobile App", "Kotlin", "MVVM", "Jetpack Navigation", "Retrofit", "Room", "Hilt"],
    date: carRentalArticle?.cardDate ?? "12 Dec 2025",
    url: carRentalArticle ? `/projects/${carRentalArticle.slug}` : "#",
    sourceUrl: "https://github.com/arjunbishnoi/CarRental",
    featured: true,
  },
]
