import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Resources',
      links: [
        { text: 'Overview', href: getPermalink('/resources') },
        { text: 'GPU & LLM Cluster', href: getPermalink('/gpu-cluster') },
        { text: 'Digitization', href: getPermalink('/digitization') },
        { text: 'SaaS / IaaS & storage', href: getPermalink('/saas') },
        { text: 'Open Source Software', href: getPermalink('/software') },
      ],
    },
    { text: 'Use Cases & News', href: getBlogPermalink() },
    { text: 'Partners', href: getPermalink('/partners') },
    { text: 'Governance', href: getPermalink('/governance') },
    { text: 'About', href: getPermalink('/about') },
  ],
  actions: [{ text: 'Contact', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Imprint', href: getPermalink('/imprint') },
    { text: 'Privacy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/dhinfra-at' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    A CLARIAH-AT initiative &middot; Funded 2023&ndash;2026 by the Austrian Federal Ministry (BMBWF) under
    &bdquo;(Digitale) Forschungsinfrastruktur&ldquo;, in cooperation with the EU Recovery and Resilience Facility (RRF) &ndash; NextGenerationEU.
  `,
};
