// @ts-check

/**
 * Docs: https://graphcommerce.org/docs/framework/config
 *
 * @type {import('@graphcommerce/next-config/src/generated/config').GraphCommerceConfig}
 */
const config = {
  hygraphEndpoint: 'https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clyx58d7100ny08uw0djefgrx/master',
  magentoEndpoint: 'https://backend.reachdigital.dev/graphql',
  canonicalBaseUrl: 'https://graphcommerce.vercel.app',
  storefront: [
    { locale: 'en', magentoStoreCode: 'en_US', defaultLocale: true },
    { locale: 'nl', magentoStoreCode: 'nl_NL' },
  ],
  recentlyViewedProducts: {
    enabled: true,
  },
}

module.exports = config
