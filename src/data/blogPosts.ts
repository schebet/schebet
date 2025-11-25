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
<!doctype html>
<html lang="sr">
 <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jeremija – Seoska Slava i Litija u Srbiji</title>
  <script src="/_sdk/element_sdk.js"></script>
  <style>
        body {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Georgia', 'Times New Roman', serif;
            line-height: 1.7;
            color: #2c2c2c;
            background: #f8f6f3;
        }

        * {
            box-sizing: border-box;
        }

        .page-wrapper {
            width: 100%;
            min-height: 100%;
        }

        /* Hero sekcija */
        .hero {
            width: 100%;
            background: linear-gradient(135deg, #8b6f47 0%, #5d4e37 100%);
            color: #fff;
            padding: 80px 20px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '✦';
            position: absolute;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 40px;
            opacity: 0.3;
        }

        .hero h1 {
            font-size: 48px;
            margin: 0 0 20px 0;
            font-weight: 700;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .hero p {
            font-size: 22px;
            margin: 0;
            font-style: italic;
            opacity: 0.95;
        }

        /* Container za sadržaj */
        .main-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 60px 20px;
        }

        /* Sekcije */
        .content-section {
            background: #ffffff;
            border-radius: 12px;
            padding: 50px 40px;
            margin-bottom: 40px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }

        .section-title {
            font-size: 36px;
            color: #8b6f47;
            margin: 0 0 30px 0;
            padding-bottom: 15px;
            border-bottom: 3px solid #d4af37;
            font-weight: 600;
        }

        .section-text {
            font-size: 18px;
            margin-bottom: 20px;
            text-align: justify;
        }

        /* Placeholder za slike */
        .image-placeholder {
            width: 100%;
            height: 350px;
            background: linear-gradient(135deg, #e8dcc8 0%, #d4c4a8 100%);
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 30px 0;
            border: 2px dashed #8b6f47;
            position: relative;
            overflow: hidden;
        }

        .image-placeholder::before {
            content: '🖼️';
            font-size: 60px;
            margin-bottom: 15px;
            opacity: 0.6;
        }

        .image-label {
            font-size: 16px;
            color: #5d4e37;
            font-weight: 600;
            text-align: center;
            padding: 0 20px;
            font-style: italic;
        }

        /* Lista */
        .custom-list {
            list-style: none;
            padding: 0;
            margin: 20px 0;
        }

        .custom-list li {
            padding: 12px 0 12px 35px;
            position: relative;
            font-size: 18px;
        }

        .custom-list li::before {
            content: '✦';
            position: absolute;
            left: 0;
            color: #d4af37;
            font-size: 20px;
        }

        /* Grid za dve kolone */
        .two-column {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin: 30px 0;
        }

        .column-box {
            background: #faf8f5;
            padding: 25px;
            border-radius: 8px;
            border-left: 4px solid #8b6f47;
        }

        .column-box h3 {
            color: #8b6f47;
            margin-top: 0;
            font-size: 24px;
        }

        /* Highlight box */
        .highlight-box {
            background: #fff9e6;
            border-left: 5px solid #d4af37;
            padding: 25px 30px;
            margin: 30px 0;
            border-radius: 0 8px 8px 0;
        }

        .highlight-box p {
            margin: 0;
            font-size: 19px;
            font-weight: 500;
            color: #5d4e37;
        }

        /* Footer */
        .footer {
            width: 100%;
            background: #5d4e37;
            color: #e8dcc8;
            text-align: center;
            padding: 40px 20px;
            margin-top: 60px;
        }

        .footer p {
            margin: 0;
            font-size: 16px;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 32px;
            }

            .hero p {
                font-size: 18px;
            }

            .content-section {
                padding: 30px 20px;
            }

            .section-title {
                font-size: 28px;
            }

            .section-text {
                font-size: 16px;
            }

            .two-column {
                grid-template-columns: 1fr;
            }

            .image-placeholder {
                height: 250px;
            }
        }
    </style>
  <style>@view-transition { navigation: auto; }</style>
  <script src="/_sdk/data_sdk.js" type="text/javascript"></script>
  <script src="https://cdn.tailwindcss.com" type="text/javascript"></script>
 </head>
 <body>
  <div class="page-wrapper"><!-- Hero sekcija -->
   <header class="hero">
    <h1 id="main-title">Jeremija – seoska slava i litija u Srbiji</h1>
    <p id="hero-subtitle">Tradicija, vera i zajedništvo srpskog sela</p>
   </header>
   <main class="main-container"><!-- Uvod -->
    <section class="content-section">
     <h2 class="section-title" id="intro-title">Uvod</h2>
     <div class="image-placeholder">
      <div class="image-label">
       📷 Fotografija srpskog sela u proleće<br>
       (zelene livade, brda, crkva u daljini)
      </div>
     </div>
     <p class="section-text">Jeremija je stara seoska slava i litija koja se obeležava u pojedinim krajevima Srbije, najčešće u proleće, posle Uskrsa.</p>
     <p class="section-text">Ovaj dan je posvećen zaštiti sela, njiva i domaćinstava, ali i molitvi za zdravlje ljudi, stoke i dobar rod.</p>
     <p class="section-text">Kroz litiju – svečanu povorku sa krstom, barjacima i ikonama – stanovnici sela obilaze polja i važne tačke u ataru, tražeći Božji blagoslov i zaštitu od nepogoda.</p>
    </section><!-- Ko je Jeremija -->
    <section class="content-section">
     <h2 class="section-title" id="who-title">Ko je Jeremija?</h2>
     <p class="section-text">Iako u kalendaru nema posebne, široko rasprostranjene crkvene svetkovine pod imenom Jeremija kao sveca-krsne slave, u narodnoj tradiciji kod nas se pod nazivom <strong>Jeremija</strong> često podrazumeva:</p>
     <ul class="custom-list">
      <li>narodni običaj vezan za <strong>prolećno vreme i zaštitu od zla</strong></li>
      <li>dan kada se u nekim krajevima prave <strong>zavetine i litije</strong>, tj. zavetni dan sela</li>
      <li>u pojedinim mestima povezuje se sa <strong>svetim prorokom Jeremijom</strong> ili, šire, sa molitvom za zaštitu od bolesti, vremenskih nepogoda i štetočina</li>
     </ul>
     <div class="highlight-box">
      <p>Zato se Jeremija doživljava više kao <strong>seoska slava / zavetina</strong>, nego kao lična krsna slava.</p>
     </div>
     <div class="image-placeholder">
      <div class="image-label">
       📷 Ilustracija starog zapisa<br>
       (drvo sa urezanim krstom ili ikona proroka)
      </div>
     </div>
    </section><!-- Kada se slavi -->
    <section class="content-section">
     <h2 class="section-title" id="when-title">Kada se slavi Jeremija?</h2>
     <p class="section-text">Datum obeležavanja Jeremije <strong>razlikuje se od sela do sela</strong>, jer je u pitanju lokalna zavetina:</p>
     <ul class="custom-list">
      <li>u nekim mestima se slavi <strong>u maju</strong>, često u periodu posle Uskrsa</li>
      <li>negde se veže za <strong>određenu nedelju u godini</strong> kada se već tradicionalno izlazi u litiju</li>
      <li>datum najčešće čuva <strong>lokalna crkva ili najstariji meštani</strong></li>
     </ul>
     <p class="section-text">Zajedničko za većinu sela jeste da se Jeremija doživljava kao <strong>prolećni praznik</strong>, kada se priroda budi, kad se razmišlja o setvi, vremenu i rodu.</p>
     <div class="image-placeholder">
      <div class="image-label">
       📷 Prolećni pejzaž<br>
       (polje, njive, drveće u listanju, klas žita ili cvet)
      </div>
     </div>
    </section><!-- Litija -->
    <section class="content-section">
     <h2 class="section-title" id="litija-title">Litija – srce seoske slave Jeremija</h2>
     <p class="section-text">Centralni deo obeležavanja Jeremije jeste <strong>litija</strong> – svečana povorka vernika koja, uz sveštenika, nosi:</p>
     <ul class="custom-list">
      <li><strong>krst</strong></li>
      <li><strong>barjake</strong> (zastave)</li>
      <li><strong>ikone</strong></li>
      <li>često i <strong>bogoslužbene knjige</strong> ili kandila</li>
     </ul>
     <div class="image-placeholder">
      <div class="image-label">
       📷 Povorka ljudi kroz selo<br>
       (krst i barjak u prvom planu, crkva ili polje u pozadini)
      </div>
     </div>
     <h3 style="color: #8b6f47; font-size: 26px; margin-top: 40px;">Kako izgleda litija?</h3>
     <div class="two-column">
      <div class="column-box">
       <h3>1. Služba u crkvi</h3>
       <p>Obično se prvo služi liturgija u seoskoj crkvi. Ako selo nema crkvu, narod se okuplja kod <strong>zapisa</strong> – velikog drveta sa urezanim krstom.</p>
      </div>
      <div class="column-box">
       <h3>2. Kretanje kroz selo</h3>
       <p>Nakon molitve, litija kreće kroz selo, zaustavljajući se na važnim mestima: raskrsnice puteva, kraj bunara ili izvora, na ulazu u njive ili vinograde.</p>
      </div>
      <div class="column-box">
       <h3>3. Molitve i blagoslovi</h3>
       <p>Na svakoj stanici sveštenik čita molitve za zdravlje ljudi i stoke, zaštitu od bolesti, dobar rod i povoljne vremenske prilike, mir u porodicama i selu.</p>
      </div>
      <div class="column-box">
       <h3>4. Učešće meštana</h3>
       <p>U litiji učestvuju deca i omladina u narodnoj nošnji, domaćini sa svečanim ikonama, žene koje nose sveće i bosiljak, stariji meštani koji pamte običaje i pesme.</p>
      </div>
     </div>
     <div class="image-placeholder">
      <div class="image-label">
       📷 Detalj litije<br>
       (ruke koje drže krst ili ikonu, ljudi u povorci)
      </div>
     </div>
    </section><!-- Zavetina -->
    <section class="content-section">
     <h2 class="section-title" id="zavjet-title">Zavetina sela i zaštita</h2>
     <p class="section-text">Jeremija se često slavi kao <strong>zavetina</strong> – dan kada je selo nekada davno:</p>
     <ul class="custom-list">
      <li>preživelo neku veliku nevolju (bolest, poplavu, sušu, rat)</li>
      <li>ili se zavetovalo da će <strong>svake godine izlaziti u litiju i Bogu zahvaljivati</strong> ako ih sačuva</li>
     </ul>
     <div class="highlight-box">
      <p>Zato se i danas u molitvama na Jeremiju naglašava zahvalnost za sve što selo ima, molba za zaštitu u godini koja dolazi i čuvanje mira, ljubavi i sloge među meštanima.</p>
     </div>
     <div class="image-placeholder">
      <div class="image-label">
       📷 Stariji i mlađi zajedno<br>
       (porodična atmosfera, ruke u molitvi, selo u pozadini)
      </div>
     </div>
    </section><!-- Običaji -->
    <section class="content-section">
     <h2 class="section-title" id="customs-title">Običaji za stolom i u domaćinstvu</h2>
     <p class="section-text">Posle litije i molitve, običaj je da se narod <strong>okupi za trpezom</strong>:</p>
     <ul class="custom-list">
      <li>u porti crkve</li>
      <li>u dvorištu domaćina čiji je red da primi goste</li>
      <li>ili u seoskom domu / sali</li>
     </ul>
     <h3 style="color: #8b6f47; font-size: 26px; margin-top: 30px;">Trpeza na Jeremiju</h3>
     <p class="section-text">Na stolu se obično nalaze:</p>
     <ul class="custom-list">
      <li>hleb, so i vino</li>
      <li>domaća jela: supa, pečenje, pite, sirevi, proje</li>
      <li>kolači i voće, u zavisnosti od godišnjeg doba</li>
     </ul>
     <p class="section-text">U nekim mestima se za Jeremiju sprema <strong>slavski kolač</strong> i <strong>žito (koljivo)</strong>, slično kao za krsnu slavu, dok se u drugim selima polaže više naglasak na <strong>zajednički ručak</strong> i gostoprimstvo.</p>
     <div class="image-placeholder">
      <div class="image-label">
       📷 Rustičan sto sa tradicionalnom hranom<br>
       (slavski kolač, sveća, vino, domaća jela)
      </div>
     </div>
    </section><!-- Verovanja -->
    <section class="content-section">
     <h2 class="section-title" id="beliefs-title">Narodna verovanja vezana za Jeremiju</h2>
     <p class="section-text">U vezi sa Jeremijom, u narodu postoje različita verovanja, koja se razlikuju od kraja do kraja. Neka od njih su:</p>
     <ul class="custom-list">
      <li>da <strong>ne valja raditi teške poslove</strong> na dan Jeremije, posebno one koji se smatraju "udarom" na prirodu (seča drveća, krčenje šume)</li>
      <li>da će <strong>godina biti bolja</strong> ako se litija održi bez svađe, nereda i lošeg vremena</li>
      <li>da litija <strong>štiti selo od grada, oluje i štetočina</strong> na usevima</li>
      <li>da je važno da <strong>cela porodica prisustvuje</strong> bar delu obreda, radi zajedničkog blagoslova</li>
     </ul>
     <div class="highlight-box">
      <p>Ova verovanja nisu zvanični deo crkvenog učenja, već deo <strong>bogatog narodnog predanja</strong>, koje se prepliće sa pravoslavnom tradicijom.</p>
     </div>
     <div class="image-placeholder">
      <div class="image-label">
       📷 Simbolična ilustracija<br>
       (oblak nad selom, iznad njega krst ili svetlost, polje žita)
      </div>
     </div>
    </section><!-- Značaj danas -->
    <section class="content-section">
     <h2 class="section-title" id="today-title">Značaj Jeremije danas</h2>
     <p class="section-text">I danas, u vremenu brzih promena i odlaska mladih iz sela, obeležavanje Jeremije:</p>
     <ul class="custom-list">
      <li>čuva <strong>identitet i sećanje</strong> na pretke</li>
      <li>podseća da je selo zajednica, a ne samo skup kuća</li>
      <li>okuplja rodbinu koja dolazi iz grada na "svoj" praznik</li>
      <li>povezuje tradiciju, veru i svakodnevni život</li>
     </ul>
     <p class="section-text">Za mnoge, Jeremija je dan kada se:</p>
     <ul class="custom-list">
      <li>sreću rođaci koje dugo nisu videli</li>
      <li>obnavljaju prijateljstva</li>
      <li>prenose priče i običaji na najmlađe</li>
     </ul>
     <div class="image-placeholder">
      <div class="image-label">
       📷 Grupa ljudi ispred crkve<br>
       (različite generacije, deca koja trče ili nose buketiće cveća)
      </div>
     </div>
    </section><!-- Zaključak -->
    <section class="content-section">
     <h2 class="section-title">Zaključak</h2>
     <p class="section-text">Jeremija, kao seoska slava i litija, predstavlja spoj <strong>pravoslavne molitve, narodnih običaja i tradicije sela</strong>.</p>
     <p class="section-text">Iako se ne obeležava svuda i datumi mogu da se razlikuju, poruka je svuda slična:</p>
     <ul class="custom-list">
      <li>da se <strong>zatraži Božji blagoslov za selo</strong></li>
      <li>da se <strong>zahvali za sve što je dato</strong></li>
      <li>i da se <strong>sačuva zajedništvo i vera</strong></li>
     </ul>
     <div class="highlight-box">
      <p>Čuvanjem i obeležavanjem Jeremije, čuvamo i <strong>sećanje na svoje korene</strong> i način života koji je vekovima oblikovao srpsko selo.</p>
     </div>
     <div class="image-placeholder">
      <div class="image-label">
       📷 Zalazak sunca nad selom<br>
       (silueta crkve ili krsta, plamen sveće ili ikona u prvom planu)
      </div>
     </div>
    </section>
   </main><!-- Footer -->
   <footer class="footer">
    <p id="footer-text">© 2024 Jeremija – Seoska slava i litija | Čuvanje tradicije srpskog sela</p>
   </footer>
  </div>
  <script>
        const defaultConfig = {
            main_title: "Jeremija – seoska slava i litija u Srbiji",
            hero_subtitle: "Tradicija, vera i zajedništvo srpskog sela",
            intro_title: "Uvod",
            who_title: "Ko je Jeremija?",
            when_title: "Kada se slavi Jeremija?",
            litija_title: "Litija – srce seoske slave Jeremija",
            zavjet_title: "Zavetina sela i zaštita",
            customs_title: "Običaji za stolom i u domaćinstvu",
            beliefs_title: "Narodna verovanja vezana za Jeremiju",
            today_title: "Značaj Jeremije danas",
            footer_text: "© 2024 Jeremija – Seoska slava i litija | Čuvanje tradicije srpskog sela"
        };

        async function onConfigChange(config) {
            document.getElementById('main-title').textContent = config.main_title || defaultConfig.main_title;
            document.getElementById('hero-subtitle').textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
            document.getElementById('intro-title').textContent = config.intro_title || defaultConfig.intro_title;
            document.getElementById('who-title').textContent = config.who_title || defaultConfig.who_title;
            document.getElementById('when-title').textContent = config.when_title || defaultConfig.when_title;
            document.getElementById('litija-title').textContent = config.litija_title || defaultConfig.litija_title;
            document.getElementById('zavjet-title').textContent = config.zavjet_title || defaultConfig.zavjet_title;
            document.getElementById('customs-title').textContent = config.customs_title || defaultConfig.customs_title;
            document.getElementById('beliefs-title').textContent = config.beliefs_title || defaultConfig.beliefs_title;
            document.getElementById('today-title').textContent = config.today_title || defaultConfig.today_title;
            document.getElementById('footer-text').textContent = config.footer_text || defaultConfig.footer_text;
        }

        function mapToCapabilities(config) {
            return {
                recolorables: [],
                borderables: [],
                fontEditable: undefined,
                fontSizeable: undefined
            };
        }

        function mapToEditPanelValues(config) {
            return new Map([
                ["main_title", config.main_title || defaultConfig.main_title],
                ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
                ["intro_title", config.intro_title || defaultConfig.intro_title],
                ["who_title", config.who_title || defaultConfig.who_title],
                ["when_title", config.when_title || defaultConfig.when_title],
                ["litija_title", config.litija_title || defaultConfig.litija_title],
                ["zavjet_title", config.zavjet_title || defaultConfig.zavjet_title],
                ["customs_title", config.customs_title || defaultConfig.customs_title],
                ["beliefs_title", config.beliefs_title || defaultConfig.beliefs_title],
                ["today_title", config.today_title || defaultConfig.today_title],
                ["footer_text", config.footer_text || defaultConfig.footer_text]
            ]);
        }

        if (window.elementSdk) {
            window.elementSdk.init({
                defaultConfig,
                onConfigChange,
                mapToCapabilities,
                mapToEditPanelValues
            });
        }
    </script>
 <script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9a4088c7e0963267',t:'MTc2NDA2NzI5My4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>      },
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
