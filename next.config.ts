import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site — `npm run build` writes plain HTML/CSS/JS to /out.
  output: "export",
  images: {
    // Static export has no image server; images in /public/images are
    // pre-optimised WebP (full size + /thumbs) so they can be served as-is.
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
