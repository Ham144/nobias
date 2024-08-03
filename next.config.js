// next.config.js

module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    // Only include static pages in the export
    return {
      '/': { page: '/' },
      // List other static pages here
      // Exclude the /login page to avoid static export


    };

  },
  images: {
    remotePatterns: [
      {
        hostname: "lh3.googleusercontent.com"
      }
    ]
  },
};
