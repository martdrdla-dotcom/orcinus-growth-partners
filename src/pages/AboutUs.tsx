import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Target, Award, Lightbulb } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: <CheckCircle className="h-8 w-8 text-accent" />,
      title: "Transparentnost",
      description: "Otevřená komunikace a jasné podmínky ve všech našich partnerstvích."
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Odpovědné vlastnictví",
      description: "Zvažujeme dopady rozhodnutí v celém životním cyklu firmy."
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Spolupodnikání",
      description: "Nejen kapitál, ale i čas, kontakty a know‑how pro společný úspěch."
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Disciplína",
      description: "Důraz na ekonomiku, cash‑flow a měřitelné cíle v každém projektu."
    }
  ];

  const offerings = [
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Kapitál pro růst a inovace",
      description: "Poskytujeme finanční prostředky potřebné pro expanzi a rozvoj."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Podporu řízení a nastavení procesů",
      description: "Pomáháme optimalizovat procesy a zlepšit efektivitu provozu."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: "Pomoc s náborem klíčových lidí",
      description: "Podporujeme při hledání a získávání talentovaných profesionálů."
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Přístup k síti dodavatelů a expertů",
      description: "Propojujeme s našimi partnery a odborníky z různých oblastí."
    }
  ];

  return (
    <Layout>
      <div className="py-20">
        {/* Hero Section */}
        <section className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Kdo jsme
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Jsme podnikatelé‑investoři. Věříme ve férové dohody, poctivou práci a dlouhodobou spolupráci. 
              Soustředíme se na projekty, kterým rozumíme a ve kterých můžeme být užiteční — od strategického 
              směřování přes provozní zlepšení až po rozšiřování obchodních příležitostí.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="container mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Naše hodnoty</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Principy, které řídí naše rozhodování a spolupráci s partnery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 shadow-medium hover:shadow-strong transition-smooth">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="bg-gradient-subtle py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Co přinášíme partnerům</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Komplexní podporu pro růst a rozvoj vašeho podnikání
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {offerings.map((offering, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg">
                    {offering.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{offering.title}</h3>
                    <p className="text-muted-foreground">{offering.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-16">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Připraveni na spolupráci?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Máte zajímavý projekt a hledáte partnera pro další růst? Spojme se a proberme možnosti spolupráce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                <Link to="/pro-partnery">Nabídněte nám projekt</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/kontakt">Kontaktujte nás</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutUs;