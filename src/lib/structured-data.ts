import { SITE_DOMAIN, SITE_NAME } from "./seo";

export const ORG_ID = `${SITE_DOMAIN}/#organization`;
export const LOCAL_BUSINESS_ID = `${SITE_DOMAIN}/#localbusiness`;
export const WEBSITE_ID = `${SITE_DOMAIN}/#website`;

const PHONE_1 = "+91 88825 97076";
const PHONE_2 = "+91 97554 80080";
const EMAIL = "shreejienterprises1806@gmail.com";
const MAPS_URL = "https://maps.app.goo.gl/eKeMgDvY8DmRpAmh7";

const AREA_SERVED = [
  { "@type": "AdministrativeArea", name: "Satna" },
  { "@type": "AdministrativeArea", name: "Madhya Pradesh" },
  { "@type": "Country", name: "India" },
];

const CONTACT_POINTS = [
  {
    "@type": "ContactPoint",
    telephone: PHONE_1,
    email: EMAIL,
    contactType: "sales",
    areaServed: AREA_SERVED,
  },
  {
    "@type": "ContactPoint",
    telephone: PHONE_2,
    contactType: "sales",
    areaServed: AREA_SERVED,
  },
];

function organizationEntity() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    url: SITE_DOMAIN,
    telephone: PHONE_1,
    email: EMAIL,
    areaServed: AREA_SERVED,
    contactPoint: CONTACT_POINTS,
    sameAs: [MAPS_URL],
  };
}

function localBusinessEntity() {
  return {
    "@type": "LocalBusiness",
    "@id": LOCAL_BUSINESS_ID,
    name: SITE_NAME,
    url: SITE_DOMAIN,
    telephone: PHONE_1,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bus Stand, Navrang Park Colony, Jeevan Jyoti Colony",
      addressLocality: "Satna",
      addressRegion: "Madhya Pradesh",
      postalCode: "485005",
      addressCountry: "IN",
    },
    areaServed: AREA_SERVED,
    contactPoint: CONTACT_POINTS,
    sameAs: [MAPS_URL],
  };
}

function websiteEntity() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_DOMAIN,
    publisher: { "@id": ORG_ID },
  };
}

type PageSchemaInput = {
  path: string;
  name: string;
  type?: string;
  description?: string;
};

function pageEntity({ path, name, type = "WebPage", description }: PageSchemaInput) {
  const url = path === "/" ? SITE_DOMAIN : `${SITE_DOMAIN}${path}`;
  return {
    "@type": type,
    "@id": `${url}#page`,
    name,
    url,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    ...(description ? { description } : {}),
  };
}

function breadcrumbEntity(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? SITE_DOMAIN : `${SITE_DOMAIN}${item.path}`,
    })),
  };
}

export function organizationSchema() {
  return { "@context": "https://schema.org", ...organizationEntity() };
}

export function localBusinessSchema() {
  return { "@context": "https://schema.org", ...localBusinessEntity() };
}

export function websiteSchema() {
  return { "@context": "https://schema.org", ...websiteEntity() };
}

export function pageSchema(input: PageSchemaInput) {
  return { "@context": "https://schema.org", ...pageEntity(input) };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return { "@context": "https://schema.org", ...breadcrumbEntity(items) };
}

export function buildRouteGraph({
  page,
  breadcrumbs,
}: {
  page: PageSchemaInput;
  breadcrumbs?: { name: string; path: string }[];
}) {
  const graph: object[] = [
    organizationEntity(),
    localBusinessEntity(),
    websiteEntity(),
    pageEntity(page),
  ];
  if (breadcrumbs) graph.push(breadcrumbEntity(breadcrumbs));
  return { "@context": "https://schema.org", "@graph": graph };
}

export function jsonLdString(data: object | object[]): string {
  return JSON.stringify(data);
}
