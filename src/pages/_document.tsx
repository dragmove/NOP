import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): ReactElement {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />

          {/* FIXME: Check favicon */}
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/assets/favicon/favicon.ico"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css?family=Lato:300,400|Carme|Roboto|Rubik:300,400|Gothic+A1|Montserrat:400,500,600,700,800"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/earlyaccess/nanumgothic.css"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
