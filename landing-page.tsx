import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, CheckCircle, Star, Menu } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full" />
            <span className="font-bold text-xl">FenceElements</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#products" className="text-sm font-medium hover:underline underline-offset-4">
              Products
            </Link>
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
          <div className="container flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Elevate Your Property with Premium Fence Elements
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Discover our range of high-quality, durable, and stylish fence elements. Perfect for residential and commercial properties.
            </p>
            <Button size="lg" className="mt-6">
              Explore Our Products
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Premium Quality", description: "Our fence elements are crafted from the finest materials, ensuring longevity and durability." },
                { title: "Custom Designs", description: "We offer a wide range of styles and can create custom designs to match your specific needs." },
                { title: "Expert Installation", description: "Our team of professionals ensures seamless installation for a perfect finish." },
              ].map((feature, index) => (
                <Card key={index}>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                    <CheckCircle className="h-12 w-12 text-primary" />
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container space-y-12 px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Classic Picket Fence", image: "/placeholder.svg?height=400&width=600" },
                { name: "Modern Aluminum Panels", image: "/placeholder.svg?height=400&width=600" },
                { name: "Rustic Wood Privacy Fence", image: "/placeholder.svg?height=400&width=600" },
              ].map((product, index) => (
                <Card key={index} className="overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <Button variant="link" className="p-0">
                      Learn More
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "John D.", quote: "The quality of their fence elements is unmatched. My property looks amazing!" },
                { name: "Sarah M.", quote: "Excellent customer service and the installation was quick and professional." },
                { name: "Robert L.", quote: "I'm impressed with the durability of their products. Worth every penny!" },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6 flex flex-col space-y-2">
                    <div className="flex space-x-1 text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground">"{testimonial.quote}"</p>
                    <p className="font-semibold">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Have questions or ready to start your project? Contact us today for a free consultation.
              </p>
            </div>
            <div className="mx-auto max-w-lg">
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Textarea placeholder="Your Message" />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <p className="text-sm text-muted-foreground">© 2024 FenceElements. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}