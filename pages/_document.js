import { Html, Head, Main, NextScript } from "next/document";
export const metadata = {
  title: {
    default: 'Engrave Tattoo School',
    template: "%s- Engrave Tattoo School"
  },
  description: 'Welcome to Engrave Tattoo School',
};

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <title>Engrave</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossrOigin/>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap" rel="stylesheet"/>
      </Head>
      <body >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
