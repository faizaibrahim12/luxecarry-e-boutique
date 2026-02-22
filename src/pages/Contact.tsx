import { useState } from "react";
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "We'll get back to you shortly." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="pt-20 md:pt-24">
      <section className="bg-secondary py-16 md:py-24">
        <div className="luxe-container text-center">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-accent mb-3">Get in Touch</p>
          <h1 className="luxe-heading">Contact Us</h1>
        </div>
      </section>

      <section className="luxe-section">
        <div className="luxe-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-serif text-2xl font-medium mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Name</label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-secondary border-border font-sans h-12"
                    maxLength={100}
                  />
                </div>
                <div>
                  <label className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Email</label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-secondary border-border font-sans h-12"
                    maxLength={255}
                  />
                </div>
                <div>
                  <label className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Message</label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-secondary border-border font-sans min-h-[150px]"
                    maxLength={1000}
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans text-sm uppercase tracking-widest h-12 px-8"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Info */}
            <div>
              <h2 className="font-serif text-2xl font-medium mb-6">Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail size={18} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-sans text-sm font-medium">Email</p>
                    <p className="font-sans text-sm text-muted-foreground">hello@luxecarry.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={18} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-sans text-sm font-medium">Phone</p>
                    <p className="font-sans text-sm text-muted-foreground">+1 (800) 555-LUXE</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-sans text-sm font-medium">Address</p>
                    <p className="font-sans text-sm text-muted-foreground">123 Fashion Avenue, New York, NY 10001</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-4">Follow Us</p>
                <div className="flex gap-4">
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Instagram">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Facebook">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Twitter">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
