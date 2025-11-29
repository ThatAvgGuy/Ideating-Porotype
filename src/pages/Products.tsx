import ProductCard from '@/components/ProductCard';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';
import compostProduct from '@/assets/compost-product.jpg';
import plasticGranules from '@/assets/plastic-granules.jpg';
import recycledPaper from '@/assets/recycled-paper.jpg';
import upcycledCrafts from '@/assets/upcycled-crafts.jpg';

export default function Products() {
  const { t } = useLanguage();

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold text-primary mb-6">
            Our Products
          </h1>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            High-quality products made from recycled materials, supporting Nepal's circular economy
          </p>
          <img src={logo} alt="SAFASAHAR Logo" className="w-48 mx-auto mt-8" />
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard
              title={t('products.compost')}
              description="Premium quality organic compost for healthier soil and plants."
              image={compostProduct}
              link="/products/compost"
            />
            <ProductCard
              title={t('products.plastic')}
              description="High-grade recycled plastic granules for manufacturing."
              image={plasticGranules}
              link="/products/plastic"
            />
            <ProductCard
              title={t('products.paper')}
              description="Eco-friendly recycled kraft paper for various uses."
              image={recycledPaper}
              link="/products/paper"
            />
            <ProductCard
              title={t('products.crafts')}
              description="Beautiful handmade crafts from upcycled materials."
              image={upcycledCrafts}
              link="/products/crafts"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
