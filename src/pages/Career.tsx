import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, TrendingUp, Award, Globe } from 'lucide-react';

const Career = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: "Růstové příležitosti",
      description: "Práce s různorodými projekty a neustálé učení v dynamickém prostředí"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Silný tým",
      description: "Spolupráce s zkušenými profesionály a podnikatelskými osobnostmi"
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Významné projekty",
      description: "Možnost podílet se na investicích, které mění trh a přinášejí hodnotu"
    },
    {
      icon: <Globe className="h-8 w-8 text-accent" />,
      title: "Flexibilní přístup",
      description: "Moderní pracovní podmínky a respekt k work-life balance"
    }
  ];

  const positions = [
    {
      title: "Investment Associate",
      type: "Plný úvazek",
      location: "Praha",
      description: "Hledáme analytika pro vyhodnocování investičních příležitostí a podporu portfoliových společností.",
      requirements: [
        "Vysokoškolské vzdělání v ekonomii, financích nebo příbuzném oboru",
        "2+ roky zkušeností v investicích, poradenství nebo corporate finance",
        "Výborné analytické schopnosti a práce s daty",
        "Znalost angličtiny na pokročilé úrovni"
      ]
    },
    {
      title: "Business Development Manager",
      type: "Plný úvazek",
      location: "Praha",
      description: "Pozice pro podporu obchodního rozvoje našich portfoliových společností a identifikaci nových příležitostí.",
      requirements: [
        "Zkušenosti s rozvojem nových obchodních kanálů",
        "Prokázané úspěchy v sales nebo business development",
        "Schopnost pracovat samostatně i v týmu",
        "Komunikační a prezentační dovednosti"
      ]
    }
  ];

  return (
    <Layout>
      <div className="py-20">
        {/* Hero Section */}
        <section className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Kariéra
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Připojte se k našemu týmu a podílejte se na budování úspěšných projektů. 
              Hledáme talentované profesionály, kteří chtějí růst spolu s námi.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="container mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Proč pracovat s námi</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nabízíme příležitost být součástí dynamického týmu a podílet se na zajímavých investičních projektech
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center shadow-medium hover:shadow-strong transition-smooth">
                <CardContent className="pt-8 pb-6">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section className="bg-gradient-subtle py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Aktuální pozice</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Prozkoumejte naše současné nabídky práce a najděte pozici, která vám vyhovuje
              </p>
            </div>

            {positions.length > 0 ? (
              <div className="space-y-8 max-w-4xl mx-auto">
                {positions.map((position, index) => (
                  <Card key={index} className="shadow-strong">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <CardTitle className="text-xl mb-2">{position.title}</CardTitle>
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-primary/10 text-primary text-sm px-2 py-1 rounded-full">
                              {position.type}
                            </span>
                            <span className="bg-accent/10 text-accent text-sm px-2 py-1 rounded-full">
                              {position.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {position.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Požadujeme:</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button asChild>
                        <Link to="/kontakt">Poslat životopis</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-4">Momentálně nemáme otevřené pozice</h3>
                <p className="text-muted-foreground mb-6">
                  Ale rádi si s talentovanými lidmi promluvíme i mimo standardní nábor.
                </p>
                <Button asChild>
                  <Link to="/kontakt">Kontaktujte nás</Link>
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Spontaneous Applications */}
        <section className="container py-16">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Spontánní žádosti vítáme</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              I když právě nemáme otevřenou pozici přesně pro vás, rádi si promluvíme s talentovanými lidmi, 
              kteří sdílejí naše hodnoty a chtějí být součástí našich projektů.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
              <Link to="/kontakt">Napište nám</Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Career;