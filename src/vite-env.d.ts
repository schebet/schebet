/// <reference types="vite/client" />
/// <reference types="vite-imagetools/client" />

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.JPG' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

// Support for vite-imagetools query parameters
declare module '*?format=webp&quality=85' {
  const src: string;
  export default src;
}

declare module '*?format=webp' {
  const src: string;
  export default src;
}
