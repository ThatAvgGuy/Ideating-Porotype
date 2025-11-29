import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import compostProduct from '@/assets/compost-product.jpg';
import plasticGranules from '@/assets/plastic-granules.jpg';
import recycledPaper from '@/assets/recycled-paper.jpg';
import upcycledCrafts from '@/assets/upcycled-crafts.jpg';
import mascotHero from '@/assets/mascot-hero.png';

const productData: Record<string, any> = {
  compost: {
    title: 'Organic Compost',
    image: compostProduct,
    features: [
      'Rich in nutrients - NPK balanced',
      'Improves soil structure and water retention',
      'Made from 100% organic waste',
      'Free from harmful chemicals',
      'QR code traceability',
    ],
    benefits: [
      'Healthier plants and higher yields',
      'Reduces need for chemical fertilizers',
      'Supports sustainable agriculture',
      'Carbon neutral production',
    ],
    impact: {
      co2: '2.3 kg CO₂ saved per kg',
      jobs: '5 jobs created per ton processed',
    },
  },
  plastic: {
    title: 'Recycled Plastic Granules',
    image: plasticGranules,
    features: [
      'Mixed PET, PP, and HDPE grades',
      'Quality tested for manufacturing',
      'Clean and sorted by type',
      'Available in bulk quantities',
      'Consistent quality standards',
    ],
    benefits: [
      'Reduces virgin plastic demand',
      'Cost-effective raw material',
      'Supports circular economy',
      'Keeps plastic out of landfills',
    ],
    impact: {
      co2: '1.8 kg CO₂ saved per kg',
      jobs: '8 jobs created per ton processed',
    },
  },
  paper: {
    title: 'Recycled Kraft Paper',
    image: recycledPaper,
    features: [
      'Strong and durable kraft paper',
      'Made from 100% recycled materials',
      'Natural brown color',
      'Suitable for packaging and crafts',
      'Biodegradable and compostable',
    ],
    benefits: [
      'Saves trees and forests',
      'Lower water and energy use',
      'Reduces landfill waste',
      'Eco-friendly alternative',
    ],
    impact: {
      co2: '1.2 kg CO₂ saved per kg',
      jobs: '4 jobs created per ton processed',
    },
  },
  crafts: {
    title: 'Upcycled Crafts',
    image: upcycledCrafts,
    features: [
      'Unique handmade items',
      'Traditional Nepali designs',
      'Made from waste materials',
      'Support for local artisans',
      'Custom orders available',
    ],
    benefits: [
      'One-of-a-kind products',
      'Supports local communities',
      'Reduces waste creatively',
      'Preserves traditional crafts',
    ],
    impact: {
      co2: 'Varies by item',
      jobs: '15+ artisans employed',
    },
  },
};

export default function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const product = productData[productId || ''];

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-heading font-semibold mb-4">Product not found</h1>
        <Link to="/products">
          <Button>Back to Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <img src={product.image} alt={product.title} className="w-full rounded-lg" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-heading font-semibold text-primary mb-6">
                {product.title}
              </h1>
              <img src={mascotHero} alt="Mascot" className="w-32 mb-6" />
              <Link to="/pricing">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  See Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-heading font-semibold text-foreground mb-8">Features</h2>
          <ul className="space-y-4">
            {product.features.map((feature: string, index: number) => (
              <li key={index} className="flex gap-3 items-start">
                <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                <span className="text-lg text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-heading font-semibold text-foreground mb-8">Benefits</h2>
          <ul className="space-y-4">
            {product.benefits.map((benefit: string, index: number) => (
              <li key={index} className="flex gap-3 items-start">
                <span className="w-2 h-2 rounded-full bg-secondary mt-2"></span>
                <span className="text-lg text-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-heading font-semibold text-foreground mb-8">Environmental Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-heading font-medium text-primary mb-2">CO₂ Reduction</h3>
              <p className="text-2xl font-semibold text-foreground">{product.impact.co2}</p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-heading font-medium text-primary mb-2">Job Creation</h3>
              <p className="text-2xl font-semibold text-foreground">{product.impact.jobs}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
