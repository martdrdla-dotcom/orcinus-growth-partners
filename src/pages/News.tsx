import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

const News = () => {
  // Placeholder news items - in real app, these would come from a CMS or API
  const newsItems = [
    {
      id: 1,
      title: "ORCINUS investuje do nového projektu v oblasti zdravotnictví",
      excerpt: "Rozšiřujeme naše portfolio o další zajímavý projekt v oblasti farmaceutických služeb...",
      date: "2024-01-15",
      category: "Investice"
    },
    {
      id: 2,
      title: "Úspěšné dokončení due diligence u PayTech projektu",
      excerpt: "Dokončili jsme komplexní analýzu a oficiálně vstoupili do fintech startup...",
      date: "2024-01-08",
      category: "Portfolio"
    },
    {
      id: 3,
      title: "ORCINUS na konferenci Invest Summit 2024",
      excerpt: "Naši zástupci se zúčastnili prestižní investiční konference a představili náš přístup...",
      date: "2024-01-02",
      category: "Události"
    }
  ];

  return (
    <Layout>
      <div className="py-20">
        {/* Hero Section */}
        <section className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Novinky
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Sledujte aktuální dění v našem portfoliu, nové investice a významné milníky 
              našich projektů.
            </p>
          </div>
        </section>

        {/* News Articles */}
        <section className="container mb-20">
          {newsItems.length > 0 ? (
            <div className="space-y-8 max-w-4xl mx-auto">
              {newsItems.map((item) => (
                <Card key={item.id} className="shadow-medium hover:shadow-strong transition-smooth">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="inline-block bg-accent/10 text-accent text-sm font-medium px-3 py-1 rounded-full">
                        {item.category}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(item.date).toLocaleDateString('cs-CZ')}
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-4 hover:text-primary transition-smooth cursor-pointer">
                      {item.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {item.excerpt}
                    </p>
                    
                    <Button variant="ghost" className="p-0 h-auto font-medium">
                      Číst více
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <h3 className="text-2xl font-bold mb-4">Připravujeme obsah</h3>
                <p className="text-muted-foreground mb-8">
                  Sekce novinek bude brzy naplněna aktuálními informacemi o našich investicích 
                  a portfoliových společnostech.
                </p>
                <Button asChild>
                  <Link to="/portfolio">Prozkoumejte naše portfolio</Link>
                </Button>
              </div>
            </div>
          )}
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-subtle py-16">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Zůstaňte v obraze</h2>
              <p className="text-muted-foreground mb-8">
                Chcete být informováni o našich nových investicích a úspěších portfoliových společností? 
                Kontaktujte nás pro více informací.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/kontakt">Kontaktujte nás</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/pro-partnery">Nabídněte projekt</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default News;