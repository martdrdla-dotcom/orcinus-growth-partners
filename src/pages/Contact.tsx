import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
      title: "Zpráva odeslána!",
      description: "Děkujeme za váš zájem, ozveme se co nejdříve.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
      hasAgreed: false
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Adresa",
      content: ["ORCINUS s.r.o.", "Kubelíkova 1224/42", "Žižkov, 130 00 Praha"]
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Telefon",
      content: ["+420 228 226 013"]
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "E-mail",
      content: ["orcinus@orcinus.cz"]
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Úřední údaje",
      content: ["IČ: 25953265", "DIČ: CZ25953265"]
    }
  ];

  return (
    <Layout>
      <div className="py-20">
        {/* Hero Section */}
        <section className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Kontakt
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Máte otázky o našich investicích nebo chcete projednat možnosti spolupráce? 
              Neváhejte nás kontaktovat.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="container mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center shadow-medium">
                <CardContent className="pt-8 pb-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      {info.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.content.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-muted-foreground text-sm">
                        {info.title === "Telefon" ? (
                          <a href={`tel:${line.replace(/\s/g, '')}`} className="hover:text-primary transition-smooth">
                            {line}
                          </a>
                        ) : info.title === "E-mail" ? (
                          <a href={`mailto:${line}`} className="hover:text-primary transition-smooth">
                            {line}
                          </a>
                        ) : (
                          line
                        )}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="bg-gradient-subtle py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-strong">
                <CardHeader>
                  <CardTitle className="text-2xl">Napište nám</CardTitle>
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

                    <div>
                      <Label htmlFor="message">Zpráva *</Label>
                      <Textarea
                        id="message"
                        placeholder="Vaše zpráva, dotaz nebo návrh spolupráce..."
                        className="min-h-[120px]"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
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
                        Souhlasím se zpracováním osobních údajů pro účely vyřízení tohoto dotazu. 
                        Více informací v našich <a href="/gdpr" className="text-primary hover:underline">zásadách ochrany osobních údajů</a>.
                      </Label>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Odeslat zprávu
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Map & Additional Info */}
              <div className="space-y-6">
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle>Kde nás najdete</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                      {/* Placeholder for map - in real implementation, use Google Maps embed or similar */}
                      <div className="text-center text-muted-foreground">
                        <MapPin className="h-12 w-12 mx-auto mb-2" />
                        <p className="text-sm">Mapa bude zde</p>
                        <p className="text-xs">Kubelíkova 1224/42, Praha 3</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Naše kanceláře se nacházejí v centru Prahy na Žižkově. 
                      Jsme dobře dostupní veřejnou dopravou i autem.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle>Rychlý kontakt</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Pro rychlé dotazy nebo domluvení schůzky nás můžete kontaktovat přímo:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <span className="font-medium">Telefon:</span>
                        <a href="tel:+420228226013" className="text-primary hover:underline">
                          +420 228 226 013
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <span className="font-medium">E-mail:</span>
                        <a href="mailto:orcinus@orcinus.cz" className="text-primary hover:underline">
                          orcinus@orcinus.cz
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Hledáte investora?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Pokud máte zajímavý projekt a hledáte partnera pro růst, 
              využijte naši specializovanou sekci pro partnery.
            </p>
            <Button asChild size="lg">
              <Link to="/pro-partnery">Nabídněte nám projekt</Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;