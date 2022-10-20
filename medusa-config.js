const plugins = [
  //...
  {
    resolve: `medusa-plugin-meilisearch`,
    options: {
      // config object passed when creating an instance of the MeiliSearch client
      config: {
        host: process.env.MEILISEARCH_HOST,
        apiKey: process.env.MEILISEARCH_API_KEY,
      },
      settings: {
        // index name
        products: {
          // MeiliSearch's setting options to be set on a particular index
          searchableAttributes: ["title", "description", "variant_sku"],
          displayedAttributes: ["title", "description", "variant_sku", "thumbnail", "handle"],
        },
      },
    },
  },
];