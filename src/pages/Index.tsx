import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Users, 
  Target, 
  Award, 
  ExternalLink,
  ArrowRight,
  CheckCircle,
  FileText,
  Handshake
} from 'lucide-react';
import orcinusLogo from '@/assets/orcinus-logo.png';

const Index = () => {
  const pillars = [
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: "Dlouhodobost",
      description: "Podporujeme udržitelné byznysy s perspektivou."
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Partnerství",
      description: "Stavíme na otevřené komunikaci a sdílených cílech."
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Pragmatismus",
      description: "Rozhodujeme se na základě dat a praxe."
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Odpovědnost",
      description: "Respekt k lidem, zdrojům a závazkům."
    }
  ];

  const portfolioProjects = [
    {
      name: "Lékárna Živá",
      description: "Projekt v oblasti lékárenství a péče o zdraví.",
      website: "www.lekarnaziva.cz"
    },
    {
      name: "PekoKarton",
      description: "Projekt v oblasti obalů a zpracování kartonu.",
      website: "www.pekokarton.cz"
    },
    {
      name: "PayTech",
      description: "Projekt v oblasti platebních a fintech řešení.",
      website: "www.paytech.cz"
    }
  ];

  const processSteps = [
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "Úvodní rozhovor a NDA",
      description: "Seznámení s projektem a podpis dohody o mlčenlivosti"
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Předběžná analýza",
      description: "Ověření trhu a rámcových podmínek"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Due diligence",
      description: "Detailní prověrka všech aspektů projektu"
    },
    {
      icon: <Handshake className="h-6 w-6 text-primary" />,
      title: "Investiční rozhodnutí",
      description: "Finální rozhodnutí a uzavření smlouvy"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Společná realizace",
      description: "Aktivní podpora růstu a rozvoje"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle"></div>
        <div className="relative container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <img src={orcinusLogo} alt="ORCINUS s.r.o." className="h-20 w-auto" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Investujeme do smysluplných projektů
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Kapitál a know‑how pro firmy, které chtějí růst a zanechat stopu.
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              ORCINUS s.r.o. je investiční společnost zaměřená na projekty s jasnou hodnotovou nabídkou 
              a reálným dopadem. Kombinujeme kapitál, podnikatelskou zkušenost a dlouhodobou správu 
              vlastního majetku. Partnerům přinášíme férové podmínky, pragmatickou spolupráci a důraz na výsledky.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="shadow-accent">
                <Link to="/pro-partnery">
                  Nabídněte nám projekt
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/portfolio">Prohlédnout portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Naše principy</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Čtyři pilíře, na kterých stavíme všechny naše investice a partnerství
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <Card key={index} className="text-center shadow-medium hover:shadow-strong transition-smooth">
                <CardContent className="pt-8 pb-6">
                  <div className="flex justify-center mb-4">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="bg-gradient-subtle py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio – výběr</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Projekty, do kterých investujeme a které dlouhodobě podporujeme
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {portfolioProjects.map((project, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth group">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-smooth">{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground font-mono">{project.website}</span>
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
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/portfolio">Zobrazit všechny projekty</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How We Collaborate */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Jak spolupracujeme</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strukturovaný přístup k investičním příležitostem s důrazem na transparentnost
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-semibold mb-3">
                    {index + 1}
                  </div>
                  <h3 className="text-sm font-semibold mb-2">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="bg-gradient-primary py-16">
        <div className="container">
          <div className="text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Máte projekt?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Napište nám na orcinus@orcinus.cz nebo volejte +420 228 226 013.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                <Link to="/pro-partnery">Nabídněte projekt</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/kontakt">Kontakt</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;