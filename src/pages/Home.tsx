import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import StatsCard from '@/components/StatsCard';
import ProductCard from '@/components/ProductCard';
import logo from '@/assets/logo.png';
import compostProduct from '@/assets/compost-product.jpg';
import plasticGranules from '@/assets/plastic-granules.jpg';
import recycledPaper from '@/assets/recycled-paper.jpg';
import upcycledCrafts from '@/assets/upcycled-crafts.jpg';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-off-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-heading font-semibold text-primary mb-4">
                {t('hero.title')}
              </h1>
              <p className="text-2xl md:text-3xl font-heading text-secondary mb-6">
                {t('hero.tagline')}
              </p>
              <p className="text-lg text-foreground mb-8 max-w-2xl">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/pricing">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    {t('hero.cta.pricing')}
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    {t('hero.cta.contact')}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img src={logo} alt="SAFASAHAR Mascot" className="w-full max-w-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard text={t('stats.waste')} />
            <StatsCard text={t('stats.organic')} />
            <StatsCard text={t('stats.profit')} />
            <StatsCard text={t('stats.target')} />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-center text-foreground mb-12">
            Our Products
          </h2>
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
