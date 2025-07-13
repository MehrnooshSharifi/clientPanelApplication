import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fa" dir="rtl" style={{ scrollBehavior: "smooth" }}>
      <Head>
        <link
          rel="shortcut icon"
          href="/assets/images/NewHomePage/TabadolLogo_01.png"
        />
        <meta
          name="description"
          content=".شرکت تبادل به عنوان کارگزار رسمی ثب احوال ارائه دهنده انواع سرویس های استعلامی و احراز هویت می باشد. شرکت تبادل همچنین در جهت پیشبرد اهداف فینتکی ارائه دهنده سرویس های استعلامی سایر ارگان ها نیز می باشد."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
