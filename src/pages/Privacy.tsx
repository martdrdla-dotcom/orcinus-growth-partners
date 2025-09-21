import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Privacy = () => {
  return (
    <Layout>
      <div className="py-20">
        <section className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
              Ochrana osobních údajů
            </h1>

            <Card className="shadow-medium mb-8">
              <CardHeader>
                <CardTitle>Správce osobních údajů</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p className="mb-4">
                  Správcem osobních údajů je <strong>ORCINUS s.r.o.</strong>, se sídlem Kubelíkova 1224/42, 
                  Žižkov, 130 00 Praha, IČ: 25953265.
                </p>
                <p>
                  Kontakt na správce: <a href="mailto:orcinus@orcinus.cz" className="text-primary hover:underline">orcinus@orcinus.cz</a>
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium mb-8">
              <CardHeader>
                <CardTitle>Účel zpracování</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Osobní údaje zpracováváme pouze za účelem:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Vyřízení Vašeho dotazu nebo nabídky spolupráce</li>
                  <li>Následné komunikace vztahující se k Vašemu dotazu</li>
                  <li>Vedení evidence pro případné právní účely</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-medium mb-8">
              <CardHeader>
                <CardTitle>Právní základ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Právním základem pro zpracování je oprávněný zájem správce (čl. 6 odst. 1 písm. f) GDPR) 
                  nebo plnění smlouvy (čl. 6 odst. 1 písm. b) GDPR).
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium mb-8">
              <CardHeader>
                <CardTitle>Doba uchování</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Osobní údaje uchováváme po dobu nezbytnou k vyřízení Vašeho dotazu, maximálně však 
                  po dobu stanovených zákonných lhůt (typicky 3-10 let dle typu dokumentu).
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium mb-8">
              <CardHeader>
                <CardTitle>Vaše práva</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Máte právo na:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Přístup</strong> k osobním údajům a informacím o jejich zpracování</li>
                  <li><strong>Opravu</strong> nepřesných nebo neúplných údajů</li>
                  <li><strong>Výmaz</strong> údajů v zákonem stanovených případech</li>
                  <li><strong>Omezení zpracování</strong> v určitých situacích</li>
                  <li><strong>Námitku</strong> proti zpracování založenému na oprávněném zájmu</li>
                  <li><strong>Stížnost</strong> u Úřadu pro ochranu osobních údajů</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-medium mb-8">
              <CardHeader>
                <CardTitle>Kontakt pro výkon práv</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pro výkon svých práv nás kontaktujte na e-mailu: 
                  <a href="mailto:orcinus@orcinus.cz" className="text-primary hover:underline ml-1">
                    orcinus@orcinus.cz
                  </a>
                </p>
              </CardContent>
            </Card>

            <div className="text-sm text-muted-foreground">
              <p>
                Tato informace o zpracování osobních údajů je v souladu s nařízením EU 2016/679 (GDPR).
                Účinnost od 1. ledna 2024.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Privacy;