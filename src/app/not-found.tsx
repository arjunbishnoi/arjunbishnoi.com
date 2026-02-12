import Link from 'next/link'
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
 
export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center px-6 text-center pt-24 pb-12">
        <h2 className="text-4xl font-bold mb-4">Not Found</h2>
        <p className="text-muted-foreground mb-8 text-lg">Could not find requested resource</p>
        <Link 
            href="/"
            className="px-6 py-3 bg-primary text-primary-content rounded-md font-semibold hover:bg-primary/90 transition-colors"
        >
          Return Home
        </Link>
      </div>
      <Footer />
    </div>
  )
}
