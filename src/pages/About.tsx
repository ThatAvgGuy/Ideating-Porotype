import logo from '@/assets/logo.png';

export default function About() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold text-primary mb-6">
            About Us
          </h1>
          <img src={logo} alt="SAFASAHAR Logo" className="w-48 mx-auto mb-8" />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-semibold text-primary mb-6">Our Mission</h2>
            <p className="text-lg text-foreground leading-relaxed">
              We are changing the face of waste disposal in Nepal by recycling and composting to make cleaner cities and a circular economy. Create green jobs and fair partnerships that empower local communities. Divert at least 20% of urban waste from landfill to cut down pollution.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading font-semibold text-primary mb-6">Our Vision</h2>
            <p className="text-lg text-foreground leading-relaxed">
              To be Nepal's leading circular economy enterprise, transforming waste management practices across the nation while creating sustainable livelihoods and protecting our environment for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-center text-foreground mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Bibek Khatiwada', role: 'CEO' },
              { name: 'Roshan Kumal', role: 'COO' },
              { name: 'Shashank Ghimire', role: 'CTO' },
              { name: 'Barsa Yadav', role: 'CMO' },
              { name: 'Krisu Tandukar', role: 'CFO' },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 rounded-full bg-secondary/20 mx-auto mb-4"></div>
                <h3 className="text-lg font-heading font-medium text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-center text-foreground mb-12">
            Our Journey
          </h2>
          <div className="space-y-8">
            {[
              { year: '2025', goal: 'Launch operations, process 5 tons/day' },
              { year: 'Year 2', goal: 'Expand to 20 tons/day, add second facility' },
              { year: 'Year 3', goal: 'Reach 50 tons/day processing capacity' },
              { year: 'Year 4', goal: 'Valley-wide collection network' },
              { year: 'Year 5', goal: 'Expand to other major cities in Nepal' },
            ].map((milestone, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                  {index < 4 && <div className="w-0.5 h-full bg-border mt-2"></div>}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-heading font-medium text-primary mb-2">{milestone.year}</h3>
                  <p className="text-foreground">{milestone.goal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
