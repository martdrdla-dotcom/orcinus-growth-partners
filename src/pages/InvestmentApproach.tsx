import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle, Search, FileText, Users, Handshake, TrendingUp } from 'lucide-react';

const InvestmentApproach = () => {
  const criteria = [
    "Jasná hodnota pro zákazníka a opakované tržby",
    "Jednoduchý, škálovatelný model s kontrolou nad klíčovými vstupy",
    "Orientace na kvalitu a dlouhodobé vztahy",
    "Tým, který je ochotný transparentně spolupracovat"
  ];

  const parameters = [
    {
      title: "Vstup",
      description: "Menšinový i většinový dle dohody"
    },
    {
      title: "Horizont držby",
      description: "Dlouhodobý, s důrazem na organický růst"
    },
    {
      title: "Role po vstupu",
      description: "Aktivní podpora strategických a provozních témat"
    },
    {
      title: "Struktura transakce",
      description: "Flexibilní (navýšení kapitálu, odkup podílu apod.)"
    }
  ];

  const processSteps = [
    {
      icon: <Search className="h-8 w-8 text-accent" />,
      title: "Seznámení s projektem",
      description: "Stručná prezentace, finanční rámec, podpis NDA"
    },
    {
      icon: <FileText className="h-8 w-8 text-accent" />,
      title: "Předběžná analýza",
      description: "Ověření trhu, jednotkové ekonomiky a týmu"
    },
    {
      icon: <Handshake className="h-8 w-8 text-accent" />,
      title: "Term‑sheet",
      description: "Rámcové podmínky investice a klíčové milníky"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Due diligence",
      description: "Finanční, právní a provozní prověrka projektu"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-accent" />,
      title: "Uzavření transakce",
      description: "Dohoda akcionářů, governance a finalizace vstupu"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: "Společná exekuce",
      description: "Růstové iniciativy, reporting a pravidelné review"
    }
  ];

  return (
    <Layout>
      <div className="py-20">
        {/* Hero Section */}
        <section className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Investiční přístup
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Hledáme srozumitelné byznysy s reálnou poptávkou, zdravou ekonomikou a vedením, které zná své zákazníky. 
              Preferujeme projekty, kde má smysl přinést nejen kapitál, ale i provozní podporu a zkušenost z řízení.
            </p>
          </div>
        </section>

        {/* Investment Criteria */}
        <section className="container mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Co typicky hledáme</h2>
              <div className="space-y-4">
                {criteria.map((criterion, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{criterion}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="shadow-strong">
              <CardHeader>
                <CardTitle>Investiční parametry</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {parameters.map((param, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-primary mb-1">{param.title}</h4>
                    <p className="text-sm text-muted-foreground">{param.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-gradient-subtle py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Proces spolupráce</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Strukturovaný přístup k vyhodnocení a realizaci investičních příležitostí
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="text-center shadow-medium hover:shadow-strong transition-smooth">
                  <CardContent className="pt-8 pb-6">
                    <div className="flex justify-center mb-4">
                      {step.icon}
                    </div>
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-semibold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-16">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Máte zajímavý projekt?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Pokud máte projekt, který odpovídá našim kritériím, rádi si s vámi promluvíme o možnostech spolupráce.
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

export default InvestmentApproach;