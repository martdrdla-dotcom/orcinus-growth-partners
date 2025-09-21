import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, TrendingUp, Users, Clock } from 'lucide-react';

const ForPartners = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectName: '',
    description: '',
    hasAgreed: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.hasAgreed) {
      toast({
        title: "Chyba",
        description: "Musíte souhlasit se zpracováním osobních údajů.",
        variant: "destructive"
      });
      return;
    }

    // Here would be the actual form submission logic
    toast({
      title: "Děkujeme za váš zájem!",
      description: "Vaši nabídku jsme obdrželi a ozveme se co nejdříve.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectName: '',
      description: '',
      hasAgreed: false
    });
  };

  const expectations = [
    {
      icon: <CheckCircle className="h-8 w-8 text-accent" />,
      title: "Stručnou prezentaci projektu",
      description: "Problém, řešení, trh, tým a finanční informace"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Transparentní data",
      description: "Ochotu sdílet klíčové informace a business metriky"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: "Realistický plán",
      description: "Konkrétní milníky a cíle na 12–24 měsíců"
    }
  ];

  const offerings = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Kapitál a know‑how",
      description: "Finanční prostředky a odborné znalosti pro další etapu růstu"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Aktivní podporu managementu",
      description: "Pomoc s řízením, strategií a operativními rozhodnutími"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Rychlou a věcnou komunikaci",
      description: "Efektivní rozhodovací procesy bez zbytečných průtahů"
    }
  ];

  return (
    <Layout>
      <div className="py-20">
        {/* Hero Section */}
        <section className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Hledáte investora nebo parťáka pro růst?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Pokud máte zajímavý projekt s potenciálem růstu a hledáte partnera, který přinese nejen kapitál, 
              ale i zkušenosti a aktivní podporu, rádi si s vámi promluvíme.
            </p>
          </div>
        </section>

        {/* What We Expect & Offer */}
        <section className="container mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* What We Expect */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Co očekáváme</h2>
              <div className="space-y-6">
                {expectations.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What We Offer */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Co nabízíme</h2>
              <div className="space-y-6">
                {offerings.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-gradient-subtle py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Form */}
                <Card className="shadow-strong">
                  <CardHeader>
                    <CardTitle className="text-2xl">Nabídněte nám svůj projekt</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Jméno *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">E-mail *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Telefon</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="projectName">Název projektu / firmy *</Label>
                          <Input
                            id="projectName"
                            value={formData.projectName}
                            onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="description">Stručný popis projektu *</Label>
                        <Textarea
                          id="description"
                          placeholder="Popište váš projekt, jeho cíle, aktuální stav a jak si představujete spolupráci... (max. 1500 znaků)"
                          className="min-h-[120px]"
                          maxLength={1500}
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          required
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          {formData.description.length}/1500 znaků
                        </p>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="agreement"
                          checked={formData.hasAgreed}
                          onCheckedChange={(checked) => 
                            setFormData({ ...formData, hasAgreed: !!checked })
                          }
                        />
                        <Label htmlFor="agreement" className="text-sm leading-relaxed">
                          Souhlasím se zpracováním osobních údajů pro účely kontaktování a vyřízení této nabídky. 
                          Více informací v našich <a href="/gdpr" className="text-primary hover:underline">zásadách ochrany osobních údajů</a>.
                        </Label>
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Odeslat nabídku projektu
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Direct Contact */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Kontakt napřímo</h3>
                    <p className="text-muted-foreground mb-6">
                      Preferujete přímý kontakt? Rádi si s vámi promluvíme telefonicky nebo e-mailem.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <span className="text-primary font-semibold">@</span>
                        </div>
                        <div>
                          <p className="font-medium">E-mail</p>
                          <a href="mailto:orcinus@orcinus.cz" className="text-primary hover:underline">
                            orcinus@orcinus.cz
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <span className="text-primary font-semibold">📞</span>
                        </div>
                        <div>
                          <p className="font-medium">Telefon</p>
                          <a href="tel:+420228226013" className="text-primary hover:underline">
                            +420 228 226 013
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent/10 p-6 rounded-lg">
                    <h4 className="font-semibold mb-2">💡 Tip pro přípravu</h4>
                    <p className="text-sm text-muted-foreground">
                      Připravte si stručnou prezentaci vašeho projektu obsahující problém, 
                      který řešíte, vaše řešení, velikost trhu, informace o týmu a základní 
                      finanční údaje. To nám pomůže rychleji pochopit potenciál spolupráce.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ForPartners;