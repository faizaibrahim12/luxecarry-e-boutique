import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/data/products";
import { ShoppingBag } from "lucide-react";
import { getProductImage } from "@/lib/productImages";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden bg-secondary rounded-sm mb-4">
          <img
            src={getProductImage(product.image)}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>
      <div className="flex items-start justify-between gap-2">
        <div>
          <Link to={`/product/${product.id}`}>
            <h3 className="font-serif text-base font-medium text-foreground group-hover:text-accent transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="font-sans text-sm text-muted-foreground mt-1">${product.price}</p>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="p-2 text-muted-foreground hover:text-accent transition-colors shrink-0"
          aria-label={`Add ${product.name} to bag`}
        >
          <ShoppingBag size={18} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
