/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true, // Enables JS source maps for browsers
  // reactStrictMode: true,
  // output: 'export',

  serverRuntimeConfig: {
    sourceMaps: true,
  },
  webpack(config) {
    // ===== Handle SVGs =====
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: {
          not: [...(fileLoaderRule.resourceQuery?.not || []), /url/],
        },
        use: ["@svgr/webpack"],
      }
    );

    // Modify the file loader rule to ignore *.svg
    fileLoaderRule.exclude = /\.svg$/i;

    // ===== Handle Video files =====
    // config.module.rules.push({
    //   test: /\.(mp4|webm|ogg|mov)$/i,
    //   type: "asset/resource", // emits separate file & returns URL
    //   generator: {
    //     filename: "static/videos/[name].[hash][ext]", // organize in /static/videos
    //   },
    // });
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mov)$/i,
      // exclude: /public\/.*/, // 👈 don’t touch files in /public
      type: "asset/resource",
      generator: {
        filename: "static/videos/[name].[hash][ext]",
      },
    });

    return config;
  },

  async redirects() {
    return [
      {
        source: "/home/:path*",
        destination: "/",
        permanent: true, // 301 Permanent Redirect
      },
      // {
      //   source: '/wordpress-e2e-v2/:path*',
      //   destination: '/',
      //   permanent: true, // 301 Permanent Redirect
      // },
    ];
  },
};

export default nextConfig;
