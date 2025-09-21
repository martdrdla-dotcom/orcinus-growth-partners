import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Cookies = () => {
  return (
    <Layout>
      <div className="py-20">
        <section className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
              Zásady používání cookies
            </h1>

            <Card className="shadow-medium mb-8">
              <CardHeader>
                <CardTitle>Co jsou cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cookies jsou malé textové soubory, které se ukládají do vašeho prohlížeče při návštěvě 
                  našich webových stránek. Pomáhají nám zajistit správné fungování webu a zlepšovat 
                  vaši uživatelskou zkušenost.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium mb-8">
              <CardHeader>
                <CardTitle>Jaké cookies používáme</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Nezbytné cookies</h4>
                  <p className="text-muted-foreground text-sm">
                    Tyto cookies jsou nezbytné pro základní funkčnost webu, jako je navigace 
                    a přístup k zabezpečeným oblastem. Web bez nich nemůže správně fungovat.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Analytické cookies</h4>
                  <p className="text-muted-foreground text-sm">
                    Používáme je pouze s vaším souhlasem pro pochopení toho, jak návštěvníci 
                    používají náš web. Pomáhají nám vylepšovat obsah a funkčnost.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Marketingové cookies</h4>
                  <p className="text-muted-foreground text-sm">
                    Tyto cookies používáme pouze s vaším souhlasem k zobrazování relevantních 
                    reklam a měření efektivity marketingových kampaní.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium mb-8">
              <CardHeader>
                <CardTitle>Správa cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Svá nastavení cookies můžete kdykoli změnit prostřednictvím:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Cookie lišty, která se zobrazí při první návštěvě</li>
                  <li>Nastavení vašeho webového prohlížeče</li>
                  <li>Kontaktováním nás na e-mailu orcinus@orcinus.cz</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-medium mb-8">
              <CardHeader>
                <CardTitle>Doba uchování</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-1">Cookies pro relaci</h4>
                    <p className="text-muted-foreground text-sm">
                      Ukládají se pouze po dobu vaší návštěvy a automaticky se smažou po zavření prohlížeče.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Trvalé cookies</h4>
                    <p className="text-muted-foreground text-sm">
                      Zůstávají uložené po stanovenou dobu (obvykle 1-2 roky) nebo dokud je nessmažete.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium mb-8">
              <CardHeader>
                <CardTitle>Třetí strany</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Můžeme používat služby třetích stran (např. Google Analytics) pro analýzu 
                  návštěvnosti. Tyto služby mohou také používat cookies podle svých vlastních zásad.
                </p>
              </CardContent>
            </Card>

            <div className="bg-accent/10 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">💡 Důležité upozornění</h3>
              <p className="text-sm text-muted-foreground">
                Vypnutím cookies může dojít k omezení funkčnosti našeho webu. 
                Nezbytné cookies nelze vypnout, protože jsou důležité pro správné fungování stránek.
              </p>
            </div>

            <div className="text-sm text-muted-foreground mt-8">
              <p>
                Tyto zásady jsou v souladu se směrnicí o cookies a GDPR.
                Poslední aktualizace: 1. ledna 2024.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Cookies;