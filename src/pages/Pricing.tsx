import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

export default function Pricing() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold text-primary mb-6">
            Pricing
          </h1>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Transparent pricing for all our products
          </p>
          <img src={logo} alt="SAFASAHAR Logo" className="w-48 mx-auto mt-8" />
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl space-y-16">
          {/* Compost */}
          <div>
            <h2 className="text-3xl font-heading font-semibold text-primary mb-6">Compost Fertilizer</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="border border-border p-4 text-left">Quantity</th>
                    <th className="border border-border p-4 text-left">Price per kg</th>
                    <th className="border border-border p-4 text-left">Minimum Order</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-border p-4">1–100 kg</td>
                    <td className="border border-border p-4 font-semibold">NPR 40</td>
                    <td className="border border-border p-4">25 kg</td>
                  </tr>
                  <tr className="bg-muted">
                    <td className="border border-border p-4">101–1,000 kg</td>
                    <td className="border border-border p-4 font-semibold">NPR 35</td>
                    <td className="border border-border p-4">100 kg</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-border p-4">1,001+ kg / ton</td>
                    <td className="border border-border p-4 font-semibold">NPR 30</td>
                    <td className="border border-border p-4">1 ton</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Plastic Granules */}
          <div>
            <h2 className="text-3xl font-heading font-semibold text-primary mb-6">
              Plastic Granules (mixed PET/PP/HDPE)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="border border-border p-4 text-left">Quantity</th>
                    <th className="border border-border p-4 text-left">Price per kg</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-border p-4">100–500 kg</td>
                    <td className="border border-border p-4 font-semibold">NPR 140</td>
                  </tr>
                  <tr className="bg-muted">
                    <td className="border border-border p-4">501–2,000 kg</td>
                    <td className="border border-border p-4 font-semibold">NPR 130</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-border p-4">2,001+ kg</td>
                    <td className="border border-border p-4 font-semibold">NPR 120</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Recycled Paper */}
          <div>
            <h2 className="text-3xl font-heading font-semibold text-primary mb-6">Recycled Kraft Paper</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="border border-border p-4 text-left">Quantity</th>
                    <th className="border border-border p-4 text-left">Price per kg</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-border p-4">100–500 kg</td>
                    <td className="border border-border p-4 font-semibold">NPR 60</td>
                  </tr>
                  <tr className="bg-muted">
                    <td className="border border-border p-4">501+ kg</td>
                    <td className="border border-border p-4 font-semibold">NPR 50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Upcycled Crafts */}
          <div>
            <h2 className="text-3xl font-heading font-semibold text-primary mb-6">Upcycled Crafts</h2>
            <p className="text-lg text-foreground mb-4">
              Price range: <span className="font-semibold">NPR 300–5,000 per item</span>
            </p>
            <Button className="bg-accent hover:bg-accent/90">Download Catalog (PDF)</Button>
          </div>

          {/* Note */}
          <div className="bg-muted p-6 rounded-lg">
            <p className="text-foreground">
              <strong>Note:</strong> Bulk & contract pricing available. All prices include delivery in Kathmandu Valley.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Contact Us for Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
