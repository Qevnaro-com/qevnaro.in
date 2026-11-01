import { ShoppingCart } from 'lucide-react';
import { ServiceDetailLayout, type ServicePageData } from '../../components/common/ServiceDetailLayout';

const DATA: ServicePageData = {
  badge: 'Technology & Development · E-commerce',
  title: 'Online Stores Built to Sell, Ship and Scale.',
  subtitle: 'Shopify, WooCommerce and custom e-commerce builds covering catalogue, checkout, payments, inventory and shipping, so the shop runs smoothly behind the scenes.',
  slug: 'ecommerce-development',
  art: 'growth',
  icon: ShoppingCart,
  seoTitle: 'E-commerce Development: Shopify, WooCommerce, Custom | Qevnaro',
  seoDescription: 'E-commerce stores on Shopify, WooCommerce or custom stacks with payments, inventory, shipping and SEO-ready product pages.',
  overview: [
    'An online store is a system, not just a page. Product data, stock levels, pricing rules, payments, taxes, shipping rates and order emails all have to agree with one another, and a gap in any of them costs sales or creates support work.',
    'Qevnaro selects the platform that fits your catalogue size, team skills and growth plans, then builds the storefront, checkout and back-office connections around it. Product pages are structured for search from the start.'
  ],
  whyNeeded: {
    heading: 'What separates a store that sells from one that just exists',
    points: [
      { title: 'Checkout friction loses orders', desc: 'Extra steps, limited payment options and unclear delivery costs are common reasons for abandoned carts.' },
      { title: 'Catalogue structure drives discovery', desc: 'Categories, filters and search help shoppers find products and help search engines index them.' },
      { title: 'Operations must stay in sync', desc: 'Inventory, order status and accounting need to update automatically as sales happen.' },
      { title: 'Own your customer relationship', desc: 'A branded store gives you customer data and repeat-purchase channels that marketplaces do not.' }
    ]
  },
  problemsSolved: [
    { title: 'Overselling and stock mismatches', problem: 'Manually updated spreadsheets cause orders for products you no longer have.', solution: 'Inventory sync between store, warehouse and marketplace channels with low-stock alerts.' },
    { title: 'Abandoned carts', problem: 'Complex checkouts and few payment methods push buyers away.', solution: 'Streamlined checkout, UPI, cards, wallets and cash-on-delivery where appropriate, with recovery emails.' },
    { title: 'Manual shipping work', problem: 'Copying addresses to courier portals and updating customers by hand does not scale.', solution: 'Courier and aggregator integrations with automatic tracking updates.' }
  ],
  deliverables: [
    'Platform recommendation and store architecture',
    'Storefront design for mobile-first shopping',
    'Product catalogue setup and bulk import',
    'Payment gateway integration',
    'Shipping rules, rate tables and courier integration',
    'Inventory and order management configuration',
    'Transactional email and WhatsApp/SMS notifications',
    'Product schema and SEO-ready category pages',
    'Analytics and conversion tracking',
    'Admin training and documentation'
  ],
  subServices: [
    { title: 'Shopify store development', desc: 'Theme customisation, apps, metafields and checkout configuration on Shopify.' },
    { title: 'WooCommerce development', desc: 'Flexible WordPress-based stores with custom plugins and product types.' },
    { title: 'Custom e-commerce builds', desc: 'Headless or bespoke platforms for complex pricing, B2B ordering or unusual workflows.' },
    { title: 'Payment gateway integration', desc: 'Razorpay, Stripe, PayU and similar providers, including refunds and webhooks.' },
    { title: 'Inventory management', desc: 'Stock tracking, variants, bundles and warehouse or ERP synchronisation.' },
    { title: 'Shipping and logistics integration', desc: 'Rate calculation, label generation and tracking through courier partners.' },
    { title: 'Product catalogue management', desc: 'Data cleanup, attributes, imports and merchandising structure.' },
    { title: 'Marketplace and feed integration', desc: 'Product feeds for Google Merchant Center and marketplace channels.' },
    { title: 'Conversion optimisation', desc: 'Product page, cart and checkout improvements guided by analytics.' },
    { title: 'Store maintenance', desc: 'Updates, security, speed monitoring and feature additions.' }
  ],
  methodology: [
    { step: '01', title: 'Catalogue and platform review', desc: 'We assess product count, variants, payment needs and team workflow, then recommend a platform.' },
    { step: '02', title: 'Store design', desc: 'Shopper journeys from landing to confirmation are designed and approved.' },
    { step: '03', title: 'Build and integrate', desc: 'Storefront, payments, shipping and inventory connections are built and tested together.' },
    { step: '04', title: 'Test orders end to end', desc: 'We place test orders across payment methods, addresses and failure cases.' },
    { step: '05', title: 'Launch and optimise', desc: 'Go-live monitoring followed by analytics-led improvements.' }
  ],
  toolsAndTech: [
    { category: 'Platforms', items: ['Shopify', 'WooCommerce', 'Headless storefronts', 'Custom Node.js'] },
    { category: 'Payments and logistics', items: ['Razorpay', 'Stripe', 'Courier aggregators', 'GST-ready invoicing'] },
    { category: 'Measurement', items: ['GA4 e-commerce events', 'Meta Pixel', 'Google Merchant Center', 'Search Console'] }
  ],
  whoNeedsThis: [
    'Brands launching their first direct-to-consumer store',
    'Retailers moving away from marketplace dependence',
    'Stores outgrowing a basic template or plugin setup',
    'Wholesalers needing B2B ordering and tiered pricing',
    'Businesses with offline stock that needs online synchronisation',
    'Founders planning paid ads that need a conversion-ready store'
  ],
  businessOutcomes: [
    { metric: 'Smoother', label: 'Checkout', desc: 'Fewer steps and more payment options for buyers.' },
    { metric: 'Accurate', label: 'Stock and orders', desc: 'Inventory and order status that stay aligned across channels.' },
    { metric: 'Trackable', label: 'Revenue funnel', desc: 'Product views, carts and purchases measured so decisions use real data.' }
  ],
  relatedCaseStudies: [
    { title: 'MenuSQR', desc: 'A digital menu and ordering experience from our portfolio.', href: '/work/menusqr', tag: 'Case study' },
    { title: 'PulsenCare', desc: 'A digital product build from our portfolio.', href: '/work/pulsencare', tag: 'Case study' }
  ],
  relatedServices: [
    { title: 'Performance Marketing', desc: 'Drive paid traffic to your store.', href: '/services/performance-marketing' },
    { title: 'SEO', desc: 'Category and product page search visibility.', href: '/services/seo' },
    { title: 'Email Marketing', desc: 'Cart recovery and repeat purchase flows.', href: '/services/email-marketing' }
  ],
  faqs: [
    { q: 'Shopify or WooCommerce: which is better?', a: 'Shopify suits teams wanting managed hosting and speed to launch. WooCommerce suits those needing deeper customisation and WordPress content. We recommend after reviewing your catalogue and budget.' },
    { q: 'Can you migrate my existing store?', a: 'Yes. We migrate products, customers and orders where the source platform allows, and map URLs to protect search visibility.' },
    { q: 'Which payment methods can be supported?', a: 'Most Indian and international gateways, including UPI, cards, net banking and wallets. Availability depends on gateway approval.' },
    { q: 'Do you set up GST invoicing?', a: 'We configure tax settings and invoice templates. You should confirm tax treatment with your accountant.' },
    { q: 'Will the store be fast on mobile?', a: 'Performance is a build requirement: optimised images, lean scripts and tested checkout on typical phones.' }
  ]
};

export const EcommerceDevelopment = () => <ServiceDetailLayout data={DATA} />;
export default EcommerceDevelopment;
