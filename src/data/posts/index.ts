import type { BlogPost } from '../blogPosts';

// Automatski učitaj sve post fajlove iz foldera
const postModules = import.meta.glob<Record<string, BlogPost>>('./*.ts', { eager: true });

export const allPosts: BlogPost[] = Object.entries(postModules)
  .filter(([path]) => !path.endsWith('/index.ts'))
  .flatMap(([, module]) =>
    Object.values(module).filter((val): val is BlogPost =>
      typeof val === 'object' && val !== null && 'id' in val && 'title' in val && 'content' in val
    )
  )
  .sort((a, b) => b.id - a.id);
