import slika777 from "@/assets/photos/777.JPG?w=640;768;1024;1280;1920&format=webp&quality=85&as=srcset";
import slika777Url from "@/assets/photos/777.JPG?w=1024&format=webp&quality=85";
import rimsko1 from "@/assets/photos/rimsko_1.jpeg?w=640;768;1024;1280;1920&format=webp&quality=85&as=srcset";
import rimsko1Url from "@/assets/photos/rimsko_1.jpeg?w=1024&format=webp&quality=85";
import rimsko2 from "@/assets/photos/rimsko_2.jpeg?w=640;768;1024;1280;1920&format=webp&quality=85&as=srcset";
import rimsko2Url from "@/assets/photos/rimsko_2.jpeg?w=1024&format=webp&quality=85";

export interface ContentBlock {
  type: 'text' | 'image' | 'video' | 'quote';
  html?: string;
  src?: string;
  srcset?: string;
  alt?: string;
  caption?: string;
  videoUrl?: string;
  videoProvider?: 'youtube' | 'vimeo';
  quoteText?: string;
  quoteAuthor?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  imageSrcSet: string;
  ogImage: string;
  content: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 8,
    title: "Seoska zadruga i saradnja",
    excerpt: "Kako seljani zajedno rade i pomažu jedni drugima. Priča o zajedništvu i solidarnosti u Šebetu...",
    author: "Marko Petrović",
    date: "26. novembar 2025",
    category: "Ljudi",
    imageUrl: slika777Url,
    imageSrcSet: slika777,
    ogImage: "/og-images/777.jpg",
    content: [
      {
        type: 'text',
        html: '<h2>Zajedništvo kao temelj</h2><p>U selu Šebet, <strong>zajedništvo nije samo reč - to je način života</strong>. Od davnina, seljani su znali da je <em>međusobna pomoć</em> ključ za opstanak i napredak cele zajednice.</p><p>Kroz sve generacije, ljudi su se okupljali na &quot;mobe&quot; - zajedničkim radovima gde se pomaže komšiji bez očekivanja materijalne nadoknade.</p>'
      },
      {
        type: 'image',
        src: slika777Url,
        srcset: slika777,
        alt: 'Seoska zajednica na radu',
        caption: 'Zajednički rad seljana tokom žetve'
      },
      {
        type: 'text',
        html: '<h2>Moba - tradicija koja traje</h2><p>Moba je stara seoska tradicija gde se ljudi okupljaju da pomognu u velikim poslovima:</p><ul><li><strong>Žetva i vršidba</strong> - najvažniji poslovi u leto</li><li><strong>Branje kukuruza</strong> - jesenja okupljanja uz priče i smeh</li><li><strong>Gradnja kuća</strong> - celo selo dolazi da pomogne</li><li><strong>Sečenje drva</strong> - priprema za zimu</li></ul><p>Ova tradicija i danas živi u Šebetu, povezujući generacije i čuvajući duh zajedništva.</p>'
      },
      {
        type: 'quote',
        quoteText: 'Sam ideš brže, zajedno ideš dalje.',
        quoteAuthor: 'Afrička poslovica'
      },
      {
        type: 'text',
        html: '<h2>Moderna seoska zadruga</h2><p>Danas u Šebetu postoji <strong>aktivna zemljoradnička zadruga</strong> koja:</p><ol><li>Omogućava zajedničku kupovinu opreme i mašina</li><li>Organizuje zajedničku prodaju proizvoda</li><li>Pomaže u dobijanju povoljnih kredita</li><li>Spaja seljake sa kupcima i izvoznicima</li></ol><p>Zahvaljujući zadruzi, čak i mala domaćinstva mogu pristupiti modernoj mehanizaciji i tržištu.</p>'
      },
      {
        type: 'image',
        src: rimsko1Url,
        srcset: rimsko1,
        alt: 'Zadrugari na sastanku',
        caption: 'Godišnja skupština seoske zadruge'
      },
      {
        type: 'text',
        html: '<h2>Solidarnost u teškim trenucima</h2><p>Najlepši primeri zajedništva se vide kada neko od seljana doživi <strong>nepriliku ili nesreću</strong>:</p><blockquote>Kada je porodica Jovanović prošle godine izgubila štalu u požaru, celo selo se odmah organizovalo. Za mesec dana izgradili su novu štalu, skupili novac i donirali stoku. Ni jedna porodica u Šebetu ne ostaje sama u nevolji.</blockquote><p>Ovakvi primeri nisu retkost - oni su svakodnevica koja pokazuje pravu vrednost zajednice.</p>'
      },
      {
        type: 'quote',
        quoteText: 'Dobro selo nije ono sa lepim kućama, već ono sa dobrim ljudima.',
        quoteAuthor: 'Narodna izreka'
      },
      {
        type: 'text',
        html: '<h2>Mladi nastavljaju tradiciju</h2><p>Nova generacija seljana <em>ne napušta</em> principe zajedništva, već ih prilagođava savremenom dobu:</p><ul><li>Preko društvenih mreža organizuju <strong>zajedničke akcije</strong></li><li>Dele znanja i iskustva kroz <strong>online grupe</strong></li><li>Pokreću <strong>inovativne projekte</strong> poput zajedničkih plastenika</li><li>Kombinuju staro i novo - <strong>tradicija i inovacija</strong></li></ul><p>Tako selo Šebet ostaje primer kako tradicija i moderna mogu ići ruku pod ruku.</p>'
      },
      {
        type: 'image',
        src: rimsko2Url,
        srcset: rimsko2,
        alt: 'Mladi seljaci',
        caption: 'Nova generacija čuva tradicije i unosi nove ideje'
      },
      {
        type: 'text',
        html: '<h2>Zaključak</h2><p>Seoska zadruga i saradnja u Šebetu nisu relikt prošlosti - oni su <strong>živa stvarnost</strong> koja čini ovo selo posebnim.</p><p>U vreme kada mnogi govore o individualizmu i otuđenosti, Šebet pokazuje da zajedništvo i solidarnost nisu izgubljene vrednosti.</p><p><em>Selo Šebet je dokaz da zajedno možemo više, bolje i srećnije!</em></p>'
      }
    ],
  },
  {
    id: 7,
    title: "Šablon",
    excerpt: "Ovo je početni blog post koji služi kao šablon. Kopirajte i prilagodite sadržaj prema vašim potrebama...",
    author: "Admin",
    date: "25. novembar 2025",
    category: "Kultura",
    imageUrl: slika777Url,
    imageSrcSet: slika777,
    ogImage: "/og-images/777.jpg",
    content: [
      {
        type: 'text',
        html: '<h2>Uvod</h2><p>Ovo je primer uvodnog teksta. Ovde možete opisati temu blog posta. Tekst može biti kratak ili detaljan, zavisno od vaših potreba.</p><p>Možete dodati više paragrafa i oblikovati tekst HTML tagovima kao što su <strong>bold</strong>, <em>italic</em>, ili <u>underline</u>.</p>'
      },
      {
        type: 'image',
        src: slika777Url,
        srcset: slika777,
        alt: 'Primer slike',
        caption: 'Opis ispod slike - dodajte detalje o slici'
      },
      {
        type: 'text',
        html: '<h2>Osnovna sekcija sa tekstom</h2><p>Nastavite sa tekstom nakon slike. Možete dodavati više sekcija sa naslovima i paragrafima.</p><ul><li>Lista sa tačkama</li><li>Druga stavka liste</li><li>Treća stavka</li></ul><p>Možete koristiti i numerisane liste:</p><ol><li>Prva stavka</li><li>Druga stavka</li><li>Treća stavka</li></ol>'
      },
      {
        type: 'quote',
        quoteText: 'Ovo je primer inspirativnog citata. Koristite citate da naglasite važne misli ili izjave relevantne za temu.',
        quoteAuthor: 'Ime autora citata'
      },
      {
        type: 'text',
        html: '<h2>Dodatna slika sa opisom</h2><p>Možete dodati više slika kroz post. Svaka slika može imati svoj caption koji pruža dodatni kontekst.</p>'
      },
      {
        type: 'image',
        src: rimsko1Url,
        srcset: rimsko1,
        alt: 'Druga primer slika',
        caption: 'Svaka slika može imati jedinstven opis'
      },
      {
        type: 'text',
        html: '<h2>Sekcija sa formatiranim tekstom</h2><p>Koristite različite HTML tagove za formatiranje:</p><blockquote>Ovo je blockquote - možete ga koristiti za isticanje važnih informacija ili citata unutar teksta.</blockquote><p>Možete dodati i <a href="https://example.com" target="_blank">linkove ka eksternim stranicama</a>.</p>'
      },
      {
        type: 'quote',
        quoteText: 'Drugi primer citata. Možete dodati više citata kroz post za različite sekcije.',
        quoteAuthor: 'Drugi autor'
      },
      {
        type: 'text',
        html: '<h2>Video sadržaj</h2><p>Možete uključiti YouTube ili Vimeo video kako biste obogatili sadržaj. Jednostavno zamenite URL sa vašim video linkom.</p>'
      },
      {
        type: 'video',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoProvider: 'youtube',
        caption: 'Primer YouTube videa - zamenite sa pravim video linkom'
      },
      {
        type: 'text',
        html: '<h2>Još jedna slika</h2><p>Slike i video mogu se kombinovati kroz ceo post za dinamičan sadržaj.</p>'
      },
      {
        type: 'image',
        src: rimsko2Url,
        srcset: rimsko2,
        alt: 'Treća primer slika',
        caption: 'Dodajte onoliko slika koliko je potrebno za vašu priču'
      },
      {
        type: 'text',
        html: '<h2>Tabele (opciono)</h2><p>Možete dodati i tabele koristeći HTML:</p><table style="width:100%; border-collapse: collapse;"><thead><tr><th style="border: 1px solid #ddd; padding: 8px;">Kolona 1</th><th style="border: 1px solid #ddd; padding: 8px;">Kolona 2</th><th style="border: 1px solid #ddd; padding: 8px;">Kolona 3</th></tr></thead><tbody><tr><td style="border: 1px solid #ddd; padding: 8px;">Podatak 1</td><td style="border: 1px solid #ddd; padding: 8px;">Podatak 2</td><td style="border: 1px solid #ddd; padding: 8px;">Podatak 3</td></tr></tbody></table>'
      },
      {
        type: 'text',
        html: '<h2>Zaključak</h2><p>Završite post sa zaključkom ili pozivom na akciju.</p><p><strong>Kako koristiti ovaj šablon:</strong></p><ol><li>Kopirajte ceo objekat blog posta</li><li>Promenite ID (mora biti jedinstven broj)</li><li>Ažurirajte title, excerpt, author, date i category</li><li>Zamenite imageUrl i imageSrcSet sa vašim slikama</li><li>Prilagodite content blokove - dodajte, uklonite ili izmenite ih</li><li>Sačuvajte fajl i vaš post je spreman!</li></ol>'
      }
    ],
  },
  {
    id: 1,
    title: "Istorija sela kroz vekove",
    excerpt: "Otkrijte bogatu istoriju sela Šebet, od prvih naseljenika do danas. Priče koje oblikuju našu zajednicu...",
    author: "Neško - Škone",
    date: "15. januar 2025",
    category: "Istorija",
    imageUrl: rimsko1Url,
    imageSrcSet: rimsko1,
    ogImage: "/og-images/rimsko_1.jpg",
    content: [
      {
        type: 'text',
        html: '<h2>Početak naselja</h2><p>Selo Šebet ima bogatu istoriju koja seže nekoliko vekova unazad. Prvi pisani tragovi o selu datiraju iz 15. veka, kada je ovo područje bilo deo većeg feudalnog poseda.</p>'
      },
      {
        type: 'image',
        src: rimsko1Url,
        srcset: rimsko1,
        alt: 'Arheološko nalazište rimskog perioda',
        caption: 'Ostatci rimskog naselja u blizini Šebeta'
      },
      {
        type: 'quote',
        quoteText: 'Istorija nije ono što se dogodilo, već priče koje prenosimo o tome što se dogodilo.',
        quoteAuthor: 'Народна мудрост'
      },
      {
        type: 'text',
        html: '<h2>Razvoj kroz vekove</h2><p>Tokom 18. i 19. veka, selo je doživelo značajan razvoj. Građene su prve škole, crkve i javne zgrade koje su postale centar društvenog života zajednice.</p><p>Stanovništvo se bavilo uglavnom poljoprivredom, stočarstvom i tradicionalnim zanatima. Mnoge od ovih tradicija su očuvane i dan danas.</p>'
      },
      {
        type: 'image',
        src: slika777Url,
        srcset: slika777,
        alt: 'Centar sela Šebet',
        caption: 'Centralni deo sela danas'
      },
      {
        type: 'text',
        html: '<h2>Moderne prilike</h2><p>U 20. veku, selo je prošlo kroz modernizaciju infrastrukture. Elektrifikacija, putevi i vodosnabdevanje su značajno poboljšali kvalitet života stanovnika.</p><p>Danas, Šebet predstavlja spoj tradicionalnog seoskog života i modernih pogodnosti, čuvajući svoje nasleđe dok gleda ka budućnosti.</p>'
      }
    ],
  },
  {
    id: 2,
    title: "Tradicionalne svečanosti",
    excerpt: "Naše selo čuva jedinstvene tradicije i običaje. Saznajte više o godišnjim proslavama i festivalima...",
    author: "Ana Jovanović",
    date: "10. januar 2025",
    category: "Kultura",
    imageUrl: slika777Url,
    imageSrcSet: slika777,
    ogImage: "/og-images/777.jpg",
    content: [
      {
        type: 'text',
        html: '<h2>Godišnji običaji</h2><p>Selo Šebet neguje bogatu tradiciju kulturnih i verskih praznika koji se slave tokom cele godine. Ove svečanosti okupljaju zajednicu i prenose tradiciju sa kolena na koleno.</p>'
      },
      {
        type: 'image',
        src: slika777Url,
        srcset: slika777,
        alt: 'Seoska svečanost u Šebetu',
        caption: 'Okupljanje stanovnika na centralnom trgu'
      },
      {
        type: 'text',
        html: '<h2>Slava sela</h2><p>Svake godine u julu, selo proslavlja svoju krsnu slavu, koja okuplja sva domaćinstva i goste iz okolnih mesta. Ovo je najvažniji događaj u seoskom kalendaru.</p><h2>Tradicionalni festivali</h2><p>Pored verskih praznika, održavaju se i tradicionalni festivali: berba grožđa u jesen, žetveni praznik u leto, i zimski sajam u decembru.</p><p>Ovi događaji uključuju folklorne igre, tradicionalnu muziku, izložbe domaćih proizvoda i takmičenja u pripremi autentičnih jela.</p>'
      },
      {
        type: 'video',
        videoUrl: 'https://www.youtube.com/watch?v=qGgnaj6y75s',
        videoProvider: 'youtube',
        caption: 'Tradicionalna srpska muzika i igre'
      }
    ],
  },
  {
    id: 3,
    title: "Ljudi koji grade zajednicu",
    excerpt: "Upoznajte ljude koji čine srce našeg sela. Priče o pojedincima koji doprinose zajednici...",
    author: "Stefan Nikolić",
    date: "5. januar 2025",
    category: "Ljudi",
    imageUrl: slika777Url,
    imageSrcSet: slika777,
    ogImage: "/og-images/777.jpg",
    content: [
      {
        type: 'text',
        html: '<h2>Seoska zajednica</h2><p>Srce svakog sela su njegovi ljudi. U Šebetu živi zajednica koja čuva tradiciju, ali i gradi budućnost kroz svoje svakodnevne aktivnosti i doprinos.</p><h2>Lokalni proizvođači</h2><p>Mnoge porodice se bave organskom proizvodnjom hrane, pčelarstvom i tradiconalnim zanatima. Njihovi proizvodi su poznati širom regiona po kvalitetu i autentičnosti.</p>'
      },
      {
        type: 'quote',
        quoteText: 'Sila zajednice je u pojedincu, a snaga pojedinca u zajednici.',
        quoteAuthor: 'Stara srpska poslovica'
      },
      {
        type: 'image',
        src: rimsko2Url,
        srcset: rimsko2,
        alt: 'Lokalni proizvođači',
        caption: 'Tradicionalni zanati i proizvodi'
      },
      {
        type: 'text',
        html: '<h2>Aktivisti i volonteri</h2><p>Mlađe generacije su pokrenule brojne inicijative za očuvanje životne sredine, obnovu starih kuća, i digitalizaciju seoskog arhiva.</p><p>Kroz volonterski rad u udruženjima i lokalnim akcijama, građani Šebeta pokazuju da zajedništvo i solidarnost nisu izgubljene vrednosti.</p>'
      }
    ],
  },
  {
    id: 4,
    title: "Prirodne lepote okoline",
    excerpt: "Šebet je okružen prelepi prirodom. Istražite šume, reke i planine koje nas okružuju...",
    author: "Jelena Đorđević",
    date: "1. januar 2025",
    category: "Priroda",
    imageUrl: rimsko2Url,
    imageSrcSet: rimsko2,
    ogImage: "/og-images/rimsko_2.jpg",
    content: [
      {
        type: 'text',
        html: '<h2>Geografski položaj</h2><p>Selo Šebet se nalazi u podnožju planinskog masiva, okruženo šumama i livadama. Ovaj prirodni ambijent pruža neverovatne mogućnosti za aktivnosti na otvorenom.</p>'
      },
      {
        type: 'image',
        src: rimsko2Url,
        srcset: rimsko2,
        alt: 'Priroda oko Šebeta',
        caption: 'Planinski ambijent koji okružuje selo'
      },
      {
        type: 'text',
        html: '<h2>Planinske staze</h2><p>Brojne planinarske staze vode kroz okolne šume do vidikovaca sa kojih se pruža spektakularan pogled na dolinu. Najpoznatija staza vodi do vrha Veliki kamen.</p><h2>Reke i izvori</h2><p>Kroz selo protiče kristalno čista planinska reka, koja je dom brojnih riba i divljih životinja. Prirodni izvori vode su poznati po svom kvalitetu.</p><h2>Flora i fauna</h2><p>Područje je dom raznovrsnog biljnog i životinjskog sveta. U šumama žive srne, divlje svinje, lisice, a mogu se uočiti i retke vrste ptica.</p>'
      },
      {
        type: 'quote',
        quoteText: 'U svakom šetnji prirodom, čovek dobija mnogo više nego što je tražio.',
        quoteAuthor: 'John Muir'
      },
      {
        type: 'video',
        videoUrl: 'https://www.youtube.com/watch?v=iyLdoQGBchQ',
        videoProvider: 'youtube',
        caption: 'Prirodne lepote Srbije'
      }
    ],
  },
  {
    id: 5,
    title: "Gastronomska baština",
    excerpt: "Tradicionalna seoska kuhinja i recepti koji se prenose generacijama. Ukusi detinjstva...",
    author: "Milica Todorović",
    date: "28. decembar 2024",
    category: "Gastronomija",
    imageUrl: rimsko2Url,
    imageSrcSet: rimsko2,
    ogImage: "/og-images/rimsko_2.jpg",
    content: [
      {
        type: 'text',
        html: '<h2>Tradicionalna kuhinja</h2><p>Gastronomija Šebeta je rezultat vekova kulinarskog nasleđa. Recepti se prenose sa kolena na koleno, čuvajući autentične ukuse i tehnike pripreme.</p><h2>Karakteristična jela</h2><p>Posebno su poznati domaći sir, pršuta sušena na planinski način, ajvar, kiseli kupus i zimnica. Svaka domaćica ima svoje tajne sastojke koji čine jelo jedinstvenim.</p>'
      },
      {
        type: 'image',
        src: slika777Url,
        srcset: slika777,
        alt: 'Tradicionalna gozba',
        caption: 'Domaća jela i proizvodi'
      },
      {
        type: 'quote',
        quoteText: 'Najbolja hrana je ona spremljena sa ljubavlju i deljena sa radošću.',
        quoteAuthor: 'Tradicionalna kuharska mudrost'
      },
      {
        type: 'text',
        html: '<h2>Slavska gozba</h2><p>Za velike proslave priprema se tradicionalna gozba: pečenje na ražnju, sarma, gibanica, različiti kolaći i domaće rakije. Ova jela su neodvojivi deo svakog slavlja.</p><h2>Domaći proizvodi</h2><p>Većina namirnica potiče iz sopstvenih bašta i ekonomija. Organski uzgajano voće i povrće, domaće životinje i pčelinji proizvodi čine osnovu svake trpeze.</p>'
      }
    ],
  },
  {
    id: 6,
    title: "Arhitektonsko nasleđe",
    excerpt: "Stare kuće, crkve i mostovi koji svedoče o prošlosti. Očuvanje arhitektonskog nasleđa...",
    author: "Nikola Stanković",
    date: "20. decembar 2024",
    category: "Arhitektura",
    imageUrl: rimsko1Url,
    imageSrcSet: rimsko1,
    ogImage: "/og-images/rimsko_1.jpg",
    content: [
      {
        type: 'text',
        html: '<h2>Tradicionalna gradnja</h2><p>Arhitektura Šebeta odražava tradicionalni stil gradnje karakterističan za ovaj region. Stare kuće su građene od prirodnih materijala - kamena, drveta i ćerpiča.</p>'
      },
      {
        type: 'image',
        src: rimsko1Url,
        srcset: rimsko1,
        alt: 'Arhitektura Šebeta',
        caption: 'Tradicionalna gradnja i arhitektonski elementi'
      },
      {
        type: 'text',
        html: '<h2>Seoska crkva</h2><p>Crkva Svetog Nikole, građena u 18. veku, predstavlja najznačajniji spomenik u selu. Freske i ikonostas su delo poznatih umetnika tog doba.</p><h2>Kameni mostovi</h2><p>Nekoliko starih kamenih mostova preko potoka i reke svedoče o majstorstvu graditelja prošlosti. Ovi mostovi su još uvek u funkciji i predstavljaju vredne arhitektonske spomenike.</p>'
      },
      {
        type: 'image',
        src: rimsko2Url,
        srcset: rimsko2,
        alt: 'Kameni mostovi',
        caption: 'Stari mostovi koji su očuvani do danas'
      },
      {
        type: 'text',
        html: '<h2>Projekti očuvanja</h2><p>Pokrenute su inicijative za restauraciju najstarijih zgrada i njihovo pretvaranje u muzejski prostor i kulturne centre, kako bi se očuvalo nasleđe za buduće generacije.</p>'
      },
      {
        type: 'quote',
        quoteText: 'Arhitektura je svedok istorije, a njeno očuvanje dug prema budućim generacijama.',
        quoteAuthor: 'Branislav Kojić'
      }
    ],
  },
];

export const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    "Istorija": "bg-category-history/10 text-category-history border-category-history/20",
    "Kultura": "bg-category-culture/10 text-category-culture border-category-culture/20",
    "Ljudi": "bg-category-people/10 text-category-people border-category-people/20",
    "Priroda": "bg-category-nature/10 text-category-nature border-category-nature/20",
    "Gastronomija": "bg-category-gastronomy/10 text-category-gastronomy border-category-gastronomy/20",
    "Arhitektura": "bg-category-architecture/10 text-category-architecture border-category-architecture/20",
  };
  return colors[category] || "bg-primary/10 text-primary border-primary/20";
};
