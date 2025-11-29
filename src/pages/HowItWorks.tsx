import logo from '@/assets/logo.png';

const steps = [
  {
    number: '1',
    title: 'Segregated Waste Arrives',
    description: 'We collect pre-sorted organic and recyclable waste from households and businesses across Kathmandu.',
  },
  {
    number: '2',
    title: 'Manual Sorting',
    description: 'Our trained team carefully sorts materials by type - organic, plastic, paper, and other recyclables.',
  },
  {
    number: '3',
    title: 'Processing',
    description: 'Each material type goes through specialized processing - composting for organics, granulation for plastics, pulping for paper.',
  },
  {
    number: '4',
    title: 'Quality Testing',
    description: 'All products undergo rigorous quality checks to ensure they meet our high standards before packaging.',
  },
  {
    number: '5',
    title: 'Delivery & Traceability',
    description: 'Products are packaged and delivered with QR code traceability, allowing customers to track the waste-to-product journey.',
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold text-primary mb-6">
            How It Works
          </h1>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Our transparent 5-step process from waste to valuable products
          </p>
          <img src={logo} alt="SAFASAHAR Logo" className="w-32 mx-auto mt-8" />
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-heading font-semibold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">{step.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center w-full md:w-auto">
                    <div className="w-full md:w-0.5 h-0.5 md:h-12 bg-border"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-heading font-semibold text-foreground mb-6">
            The Impact
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            Every ton of waste we process diverts materials from landfills, creates local jobs, reduces greenhouse gas emissions, 
            and provides affordable eco-friendly products to our community. Together, we're building a cleaner, greener Kathmandu.
          </p>
        </div>
      </section>
    </div>
  );
}
