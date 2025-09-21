import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LegalNotice = () => {
  return (
    <Layout>
      <div className="py-20">
        <section className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
              Právní upozornění
            </h1>

            <Card className="shadow-medium mb-8">
              <CardHeader>
                <CardTitle>Charakter informací</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tento web má <strong>informativní charakter</strong> a nepředstavuje investiční doporučení 
                  ani veřejnou nabídku investičních nástrojů ve smyslu příslušných právních předpisů 
                  České republiky a Evropské unie.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium mb-8">
              <CardHeader>
                <CardTitle>Investiční služby</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  ORCINUS s.r.o. <strong>nespravuje majetek veřejnosti</strong> a neposkytuje investiční 
                  služby široké veřejnosti ve smyslu zákona o podnikání na kapitálovém trhu. 
                  Veškeré spolupráce jsou sjednávány individuálně s konkrétními partnery.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium mb-8">
              <CardHeader>
                <CardTitle>Rizika investování</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Investování do podnikatelských projektů je spojeno s riziky:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Možnost ztráty části nebo celé investované částky</li>
                    <li>Kolísání hodnoty investice v čase</li>
                    <li>Riziko nelikvidity investice</li>
                    <li>Tržní, úvěrová a operační rizika</li>
                  </ul>
                  <p className="text-muted-foreground font-medium">
                    Minulé výsledky nezaručují budoucí výkonnost.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium mb-8">
              <CardHeader>
                <CardTitle>Odpovědnost za obsah</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Informace na tomto webu jsou poskytovány v dobré víře a podle nejlepšího vědomí. 
                  ORCINUS s.r.o. však nenesе odpovědnost za případné nepřesnosti, chyby nebo škody 
                  vznikající z používání těchto informací.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium mb-8">
              <CardHeader>
                <CardTitle>Odkazy na třetí strany</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Web může obsahovat odkazy na webové stránky třetích stran (portfoliové společnosti). 
                  Za obsah těchto stránek neneseme odpovědnost. Odkazy jsou poskytovány pouze 
                  pro informační účely.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium mb-8">
              <CardHeader>
                <CardTitle>Duševní vlastnictví</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Veškerý obsah tohoto webu včetně textů, obrázků, grafiky a designu je chráněn 
                  autorskými právy a jinými právy duševního vlastnictví. Jejich používání 
                  bez souhlasu je zakázáno.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium mb-8">
              <CardHeader>
                <CardTitle>Rozhodné právo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tyto podmínky a veškeré právní vztahy se řídí právním řádem České republiky. 
                  Případné spory budou řešeny u příslušných soudů České republiky.
                </p>
              </CardContent>
            </Card>

            <div className="bg-destructive/10 border border-destructive/20 p-6 rounded-lg">
              <h3 className="font-semibold mb-2 text-destructive">⚠️ Důležité upozornění</h3>
              <p className="text-sm text-muted-foreground">
                Před jakoukoli investicí doporučujeme konzultaci s nezávislým finančním poradcem 
                a pečlivé prostudování všech relevantních dokumentů. Investujte pouze prostředky, 
                jejichž ztrátu si můžete dovolit.
              </p>
            </div>

            <div className="text-sm text-muted-foreground mt-8">
              <p>
                Toto právní upozornění je v souladu s právními předpisy České republiky.
                Poslední aktualizace: 1. ledna 2024.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default LegalNotice;