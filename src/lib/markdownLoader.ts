import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

// Import all markdown files
const markdownFiles = import.meta.glob('/src/content/blog/*.md', { 
  eager: true, 
  as: 'raw' 
});

// Import all photos with optimization
const photos = import.meta.glob('/src/assets/photos/*.(jpg|jpeg|png|JPG|JPEG|PNG)', {
  eager: true,
  query: '?w=640;768;1024;1280;1920&format=webp&quality=85&as=srcset'
});

const photosUrl = import.meta.glob('/src/assets/photos/*.(jpg|jpeg|png|JPG|JPEG|PNG)', {
  eager: true,
  query: '?w=1024&format=webp&quality=85'
});

export interface BlogPostFrontmatter {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  featuredImage: string;
  ogImage: string;
}

export interface BlogPost extends BlogPostFrontmatter {
  imageUrl: string;
  imageSrcSet: string;
  content: string;
  slug: string;
}

// Helper to get image URL and srcset
function getImageData(imageName: string) {
  const photoPath = `/src/assets/photos/${imageName}`;
  
  const srcset = photos[photoPath] as any;
  const url = photosUrl[photoPath] as any;
  
  return {
    srcset: srcset?.default || '',
    url: url?.default || ''
  };
}

// Parse markdown content and convert image syntax
function parseMarkdownContent(content: string): string {
  // Convert markdown image syntax ![alt](image.jpg) to use our optimized images
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
  
  return content.replace(imageRegex, (match, alt, imagePath) => {
    // If it's a local image (no http/https), add full path
    if (!imagePath.startsWith('http')) {
      const imageData = getImageData(imagePath);
      // Return markdown with data attributes for later processing in component
      return `![${alt}](${imagePath}){srcset="${imageData.srcset}" url="${imageData.url}"}`;
    }
    return match;
  });
}

export function loadBlogPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const [filePath, fileContent] of Object.entries(markdownFiles)) {
    const { data, content } = matter(fileContent);
    const frontmatter = data as BlogPostFrontmatter;
    
    // Get slug from filename
    const slug = filePath.split('/').pop()?.replace('.md', '') || '';
    
    // Get optimized image data
    const imageData = getImageData(frontmatter.featuredImage);
    
    // Parse markdown content
    const parsedContent = parseMarkdownContent(content);
    
    posts.push({
      ...frontmatter,
      imageUrl: imageData.url,
      imageSrcSet: imageData.srcset,
      content: parsedContent,
      slug
    });
  }

  // Sort by id descending (newest first)
  return posts.sort((a, b) => b.id - a.id);
}

// Export parsed posts
export const blogPosts = loadBlogPosts();
