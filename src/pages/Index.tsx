import { Link } from "react-router-dom";
import { Star, ArrowRight, Gem, Truck, Shield } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import heroBag from "@/assets/hero-bag.jpg";

const reviews = [
  { name: "Sarah M.", text: "The quality is absolutely unmatched. My LuxeCarry tote has become my everyday essential.", rating: 5 },
  { name: "Priya K.", text: "Elegant, practical, and worth every penny. I've received so many compliments!", rating: 5 },
  { name: "Emma L.", text: "Finally found a brand that combines luxury with affordability. Obsessed!", rating: 5 },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={heroBag} alt="LuxeCarry hero handbag" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />
        </div>
        <div className="relative luxe-container pt-20">
          <div className="max-w-xl">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-primary-foreground/80 mb-4 animate-fade-up">
              New Collection 2026
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-primary-foreground leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Carry Confidence.<br />Carry Style.
            </h1>
            <p className="font-sans text-base md:text-lg text-primary-foreground/80 mb-8 max-w-md animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Timeless bags handcrafted from premium leather. Designed for women who define their own elegance.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 font-sans text-sm uppercase tracking-widest hover:bg-accent/90 transition-colors animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              Shop Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="luxe-section bg-background">
        <div className="luxe-container">
          <div className="text-center mb-12">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-accent mb-3">Curated Selection</p>
            <h2 className="luxe-heading">Featured Collection</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="luxe-link font-sans text-sm uppercase tracking-widest text-foreground"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="luxe-section bg-secondary">
        <div className="luxe-container">
          <div className="text-center mb-16">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-accent mb-3">The LuxeCarry Promise</p>
            <h2 className="luxe-heading">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Gem, title: "Quality Materials", desc: "Every bag is crafted from premium Italian leather, selected for its durability and natural beauty." },
              { icon: Shield, title: "Affordable Luxury", desc: "We believe luxury should be accessible. Premium craftsmanship without the premium markup." },
              { icon: Truck, title: "Fast Delivery", desc: "Free worldwide shipping on all orders. Your bag arrives beautifully packaged within 3–5 business days." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-6">
                  <item.icon size={24} />
                </div>
                <h3 className="font-serif text-xl font-medium mb-3">{item.title}</h3>
                <p className="luxe-body max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="luxe-section bg-background">
        <div className="luxe-container">
          <div className="text-center mb-16">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-accent mb-3">Testimonials</p>
            <h2 className="luxe-heading">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.name} className="bg-card p-8 rounded-sm">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground mb-6 italic">
                  "{review.text}"
                </p>
                <p className="font-sans text-sm font-medium text-foreground">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
