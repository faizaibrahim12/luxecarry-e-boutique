import bag1 from "@/assets/bag-1.jpg";
import bag2 from "@/assets/bag-2.jpg";
import bag3 from "@/assets/bag-3.jpg";
import bag4 from "@/assets/bag-4.jpg";

const imageMap: Record<string, string> = {
  "/bag-1": bag1,
  "/bag-2": bag2,
  "/bag-3": bag3,
  "/bag-4": bag4,
};

export const getProductImage = (key: string): string => {
  return imageMap[key] || bag1;
};
