import { useState, useMemo } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const categories = ["All", "Tote", "Crossbody", "Shoulder", "Bucket"];
const colors = ["All", "Ivory", "Cognac", "Blush", "Black"];
const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $225", min: 0, max: 225 },
  { label: "$225 – $275", min: 225, max: 275 },
  { label: "Over $275", min: 275, max: Infinity },
];

const Shop = () => {
  const [category, setCategory] = useState("All");
  const [color, setColor] = useState("All");
  const [priceIdx, setPriceIdx] = useState(0);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (color !== "All" && p.color !== color) return false;
      const range = priceRanges[priceIdx];
      if (p.price < range.min || p.price >= range.max) return false;
      return true;
    });
  }, [category, color, priceIdx]);

  return (
    <main className="pt-20 md:pt-24">
      {/* Header */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="luxe-container text-center">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-accent mb-3">Our Collection</p>
          <h1 className="luxe-heading">Shop All Bags</h1>
        </div>
      </section>

      <section className="luxe-section">
        <div className="luxe-container">
          {/* Filters */}
          <div className="flex flex-wrap gap-6 mb-12 pb-8 border-b border-border">
            {/* Category */}
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2">Category</p>
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`px-4 py-1.5 font-sans text-xs uppercase tracking-wide transition-colors rounded-sm ${
                      category === c
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Color */}
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2">Color</p>
              <div className="flex flex-wrap gap-2">
                {colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`px-4 py-1.5 font-sans text-xs uppercase tracking-wide transition-colors rounded-sm ${
                      color === c
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2">Price</p>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((r, i) => (
                  <button
                    key={r.label}
                    onClick={() => setPriceIdx(i)}
                    className={`px-4 py-1.5 font-sans text-xs uppercase tracking-wide transition-colors rounded-sm ${
                      priceIdx === i
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="luxe-subheading">No products match your filters.</p>
              <button
                onClick={() => { setCategory("All"); setColor("All"); setPriceIdx(0); }}
                className="mt-4 luxe-link font-sans text-sm uppercase tracking-widest text-foreground"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Shop;
