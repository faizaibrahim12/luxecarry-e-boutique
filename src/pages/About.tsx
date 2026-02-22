import { Gem, Heart, Leaf } from "lucide-react";

const About = () => {
  return (
    <main className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="luxe-container text-center max-w-3xl mx-auto">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-accent mb-3">Our Story</p>
          <h1 className="luxe-heading mb-6">About LuxeCarry</h1>
          <p className="luxe-body text-lg">
            Born from a passion for timeless design and exceptional craftsmanship, LuxeCarry creates bags that
            empower women to express their unique style with confidence.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="luxe-section">
        <div className="luxe-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-medium mb-6">Our Journey</h2>
              <div className="space-y-4 luxe-body">
                <p>
                  LuxeCarry was founded in 2024 with a simple belief: every woman deserves a bag that makes her feel extraordinary
                  without an extraordinary price tag.
                </p>
                <p>
                  We partner with skilled artisans in Italy who share our dedication to quality. Each bag is crafted from hand-selected
                  leathers, finished with precision, and designed to age beautifully over time.
                </p>
                <p>
                  Our collections are intentionally small — because we believe in creating fewer, better things. No fast fashion,
                  no compromises, just pieces you'll treasure for years.
                </p>
              </div>
            </div>
            <div className="bg-secondary aspect-[4/5] rounded-sm flex items-center justify-center">
              <span className="font-serif text-6xl text-accent/30">LC</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary luxe-section">
        <div className="luxe-container">
          <div className="text-center mb-16">
            <h2 className="luxe-heading">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Gem, title: "Uncompromising Quality", desc: "We source only the finest materials and work with master craftsmen to ensure every stitch is perfect." },
              { icon: Heart, title: "Accessible Luxury", desc: "By selling directly to you, we offer exceptional quality at prices that don't demand a second mortgage." },
              { icon: Leaf, title: "Sustainable Practices", desc: "We're committed to ethical sourcing, minimal waste, and creating products that stand the test of time." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-6">
                  <item.icon size={24} />
                </div>
                <h3 className="font-serif text-xl font-medium mb-3">{item.title}</h3>
                <p className="luxe-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
