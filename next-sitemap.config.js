module.exports = {
  siteUrl: "https://e2eresearch.com", // Replace with your site's URL
  generateRobotsTxt: true, // Optional: generates robots.txt file
  changefreq: "daily", // Optional: set the default change frequency for all pages
  priority: 0.7, // Optional: set the default priority for all pages
  sitemapSize: 5000, // Optional: define the maximum number of URLs per sitemap file
  additionalPaths: async (config) => {
    // You can dynamically generate or fetch URLs here
    return [
      await config.transform(config, "/about"),
      await config.transform(config, "/advertising"),
    ];
  },
};
