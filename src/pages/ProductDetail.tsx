import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Star, ArrowLeft, ShoppingBag, Check } from "lucide-react";
import { getProductImage } from "@/lib/productImages";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <main className="pt-20 md:pt-24 luxe-section">
        <div className="luxe-container text-center">
          <h1 className="luxe-heading mb-4">Product Not Found</h1>
          <Link to="/shop" className="luxe-link font-sans text-sm uppercase tracking-widest">
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20 md:pt-24">
      <div className="luxe-container py-8">
        <Link to="/shop" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-sans text-sm mb-8">
          <ArrowLeft size={16} /> Back to Shop
        </Link>
      </div>

      <section className="luxe-container pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image */}
          <div className="aspect-square bg-secondary rounded-sm overflow-hidden">
            <img src={getProductImage(product.image)} alt={product.name} className="w-full h-full object-cover" />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-accent mb-2">{product.category}</p>
            <h1 className="font-serif text-3xl md:text-4xl font-medium mb-2">{product.name}</h1>
            <p className="font-serif text-2xl text-accent mb-6">${product.price}</p>

            <p className="luxe-body mb-8">{product.description}</p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-3">Features</h3>
              <ul className="space-y-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 font-sans text-sm text-foreground">
                    <Check size={14} className="text-accent shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => addToCart(product)}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 font-sans text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors w-full sm:w-auto"
            >
              <ShoppingBag size={16} /> Add to Bag
            </button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-secondary luxe-section">
        <div className="luxe-container">
          <h2 className="font-serif text-2xl font-medium mb-8">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.reviews.map((review, i) => (
              <div key={i} className="bg-background p-6 rounded-sm">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} size={12} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-sans text-sm text-muted-foreground italic mb-3">"{review.comment}"</p>
                <p className="font-sans text-sm font-medium">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
