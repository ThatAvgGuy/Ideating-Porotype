import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin } from 'lucide-react';
import { toast } from 'sonner';
import logo from '@/assets/logo.png';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    segment: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We will contact you soon.');
    setFormData({ name: '', phone: '', segment: '', message: '' });
  };

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold text-primary mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Get in touch with us for orders, partnerships, or any inquiries
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="segment">I am interested in</Label>
                  <Select
                    value={formData.segment}
                    onValueChange={(value) => setFormData({ ...formData, segment: value })}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="compost">Compost Fertilizer</SelectItem>
                      <SelectItem value="plastic">Plastic Granules</SelectItem>
                      <SelectItem value="paper">Recycled Paper</SelectItem>
                      <SelectItem value="crafts">Upcycled Crafts</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="mt-2"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <img src={logo} alt="SAFASAHAR Logo" className="w-48 mb-8" />
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">Phone</h3>
                    <a href="tel:+9779841234567" className="text-muted-foreground hover:text-primary">
                      +977 984-1234567
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      <a
                        href="https://wa.me/9779841234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        WhatsApp available
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:info@safasahar.com" className="text-muted-foreground hover:text-primary">
                      info@safasahar.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Balaju Industrial District
                      <br />
                      Kathmandu, Nepal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
