import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Клининг за 24 часа в Перми — Clean Inc | Уборка квартир, химчистка, мойка окон',
  description:
    'Клининговая компания в Перми: уборка квартир и домов, генеральная уборка, уборка после ремонта, химчистка диванов и мебели, мойка окон. Выезд на следующий день после заявки. Заказ от 4000 ₽.',
  keywords: [
    'клининг Пермь',
    'уборка квартир Пермь',
    'клининговая компания Пермь',
    'химчистка дивана Пермь',
    'химчистка мебели Пермь',
    'мойка окон Пермь',
    'генеральная уборка Пермь',
    'уборка после ремонта Пермь',
    'уборка дома Пермь',
    'заказать клининг Пермь',
    'уборка коттеджей Пермь',
    'химчистка Пермь',
    'клининг на дом Пермь',
    'профессиональная уборка Пермь',
    'Clean Inc Пермь',
  ],
  openGraph: {
    title: 'Клининг за 24 часа в Перми — Clean Inc',
    description:
      'Уборка квартир, химчистка диванов, мойка окон в Перми. Выезд на следующий день. Заказ от 4000 ₽.',
    type: 'website',
    locale: 'ru_RU',
    url: 'https://startling-griffin-dd9bd7.netlify.app',
    siteName: 'Clean Inc — клининг в Перми',
  },
  alternates: {
    canonical: 'https://startling-griffin-dd9bd7.netlify.app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Cleaning Services',
  authors: [{ name: 'Clean Inc' }],
  creator: 'Clean Inc',
  publisher: 'Clean Inc',
  other: {
    'yandex-verification': '',
    'google-site-verification': '',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#5A30F0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CleaningService',
    name: 'Clean Inc — клининг в Перми',
    description:
      'Клининговая компания в Перми: уборка квартир и домов, генеральная уборка, уборка после ремонта, химчистка диванов и мебели, мойка окон.',
    url: 'https://startling-griffin-dd9bd7.netlify.app',
    telephone: '+79082402525',
    priceRange: 'от 4000 ₽',
    areaServed: {
      '@type': 'City',
      name: 'Пермь',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Пермь',
      addressRegion: 'Пермский край',
      addressCountry: 'RU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 58.0105,
      longitude: 56.2502,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '22:00',
    },
    sameAs: [
      'https://t.me/cleaninc_perm',
      'https://instagram.com/clean.inc.perm',
    ],
    serviceType: [
      'Уборка квартир',
      'Генеральная уборка',
      'Уборка после ремонта',
      'Химчистка диванов',
      'Химчистка мебели',
      'Мойка окон',
      'Организация пространства',
    ],
  };

  return (
    <html lang="ru" className={inter.variable}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/assets/VkladkaLogo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/VkladkaLogo.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
