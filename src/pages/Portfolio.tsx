import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      name: "Lékárna Živá",
      description: "Projekt v oblasti lékárenství a péče o zdraví zaměřený na kvalitní farmaceutické služby a individuální přístup k zákazníkům.",
      website: "www.lekarnaziva.cz",
      category: "Healthcare & Pharmacy",
      features: ["Farmaceutické poradenství", "Individuální péče", "Kvalitní léčiva"]
    },
    {
      name: "PekoKarton",
      description: "Projekt v oblasti obalů a zpracování kartonu s důrazem na udržitelné a inovativní řešení pro různá průmyslová odvětví.",
      website: "www.pekokarton.cz",
      category: "Manufacturing & Packaging",
      features: ["Kartonové obaly", "Udržitelné řešení", "Průmyslové aplikace"]
    },
    {
      name: "PayTech",
      description: "Projekt v oblasti platebních a fintech řešení poskytující moderní technologie pro zpracování plateb a finanční služby.",
      website: "www.paytech.cz",
      category: "FinTech & Payments",
      features: ["Platební brána", "Finanční technologie", "Bezpečné transakce"]
    }
  ];

  return (
    <Layout>
      <div className="py-20">
        {/* Hero Section */}
        <section className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Spolupracujeme s projekty, které přinášejí hodnotu svým zákazníkům a mají zdravé základy 
              pro dlouhodobý rozvoj. Níže uvádíme výběr našich investic.
            </p>
          </div>
        </section>

        {/* Portfolio Projects */}
        <section className="container mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-smooth">
                        {project.name}
                      </CardTitle>
                      <div className="inline-block bg-accent/10 text-accent text-xs font-medium px-2 py-1 rounded-full">
                        {project.category}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Website Link */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground font-mono">
                      {project.website}
                    </span>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0"
                      onClick={() => window.open(`https://${project.website}`, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coming Soon Note */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground italic">
              Další projekty z našeho portfolia postupně doplníme včetně detailnějších informací a výsledků.
            </p>
          </div>
        </section>

        {/* Portfolio Stats - Placeholder */}
        <section className="bg-gradient-subtle py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Naše přístup k investicím</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Soustředíme se na dlouhodobý růst a udržitelné výsledky našich portfoliových společností
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Dlouhodobě</div>
                <p className="text-muted-foreground">Investujeme s horizontem 5+ let</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Aktivně</div>
                <p className="text-muted-foreground">Podporujeme management a strategii</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Odpovědně</div>
                <p className="text-muted-foreground">Respektujeme zaměstnance a komunity</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-16">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Chcete být součástí našeho portfolia?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Hledáme zajímavé projekty s potenciálem růstu a silným týmem. Podělte se s námi o svou vizi.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
              <Link to="/pro-partnery">Nabídněte nám projekt</Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Portfolio;