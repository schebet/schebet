
**Plan za automatsko učitavanje postova:**

1. **Ažurirati `src/data/posts/index.ts`** da koristi Vite-ov `import.meta.glob()` za automatsko pronalaženje svih `.ts` fajlova u folderu
2. **Ukloniti ručne importe** - više neće biti potrebno dodavati import za svaki novi post
3. **Automatsko sortiranje** po ID-u će ostati
4. **Jedino pravilo**: svaki post fajl mora imati `export const` sa objektom tipa `BlogPost`

Nakon implementacije, proces dodavanja novog posta će biti:
- Kopiraj `test.ts` kao šablon
- Preimenuj ga (npr. `moj-novi-post.ts`)
- Uredi sadržaj
- Gotovo! Post se automatski pojavljuje na sajtu.
