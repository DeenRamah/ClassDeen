import type { MetaTagsProps } from 'svelte-meta-tags';

export const prerender = true;

export function load({ url }) {
  return {
    baseMetaTags: getBaseMetaTags(url),
    url: url.pathname
  };
}

function getBaseMetaTags(url: URL) {
  const metatags = Object.freeze({
    title: 'ClassDeen | The Open Source Learning Management System for Companies',
    description:
      'A flexible, user-friendly platform for creating, managing, and delivering courses for companies and training organisations',
    canonical: new URL(url.pathname, url.origin).href,
    openGraph: {
      type: 'website',
      url: new URL(url.pathname, url.origin).href,
      locale: 'en_IE',
      title: 'ClassDeen | The Open Source Learning Management System for Companies',
      description:
        'A flexible, user-friendly platform for creating, managing, and delivering courses for companies and training organisations',
      siteName: 'ClassDeen',
      images: [
        {
          url: 'https://brand.cdn.clsrio.com/og/classroomio-og.png',
          alt: 'ClassDeen OG Image',
          width: 1920,
          height: 1080,
          secureUrl: 'https://brand.cdn.clsrio.com/og/classDeen-og.png',
          type: 'image/jpeg'
        }
      ]
    },
    twitter: {
      handle: '@classDeen',
      site: '@classDeen',
      cardType: 'summary_large_image' as const,
      title: 'ClassDeen | The Open Source Learning Management System for Companies',
      description:
        'A flexible, user-friendly platform for creating, managing, and delivering courses for companies and training organisations',
      image: 'https://brand.cdn.clsrio.com/og/classroomio-og.png',
      imageAlt: 'ClassDeen OG Image'
    }
  }) satisfies MetaTagsProps;

  return metatags;
}
