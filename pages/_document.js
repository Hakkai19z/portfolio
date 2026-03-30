import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Kahil Mokhtari — Développeur Web Full-Stack & Expert Automatisation Office basé à Paris. Sites modernes, applications React/Next.js et automatisation Excel/VBA." />
        <meta name="author" content="Kahil Mokhtari" />
        <meta name="keywords" content="développeur web, freelance, React, Next.js, Paris, automatisation Excel, VBA, PHP, Symfony" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kahil Mokhtari — Développeur Web Full-Stack" />
        <meta property="og:description" content="Développeur web freelance basé à Paris. Sites modernes, applications web React/Next.js et automatisation Office." />
        <meta property="og:image" content="/img/about/photo.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kahil Mokhtari — Développeur Web Full-Stack" />
        <meta name="twitter:description" content="Développeur web freelance basé à Paris. Sites modernes et automatisation Office." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
