import Head from "next/head"

export default function MyHead({ title }: { title: string }) {
   return (
      <Head>
         <title>{title}</title>
         <link rel="apple-touch-icon" sizes="180x180" href="/programming/icon/apple-touch-icon.png" />
         <link rel="icon" type="image/png" sizes="32x32" href="/programming/icon/favicon-32x32.png" />
         <link rel="icon" type="image/png" sizes="16x16" href="/programming/icon/favicon-16x16.png" />
         <link rel="manifest" href="/programming/icon/site.webmanifest" />
         <link rel="mask-icon" href="/programming/icon/safari-pinned-tab.svg" color="#5bbad5" />
         <link rel="shortcut icon" href="/programming/icon/favicon.ico" />
         <meta name="msapplication-TileColor" content="#b91d47" />
         <meta name="msapplication-config" content="/programming/icon/browserconfig.xml" />
         <meta name="theme-color" content="#ffffff" />
      </Head>
   )
}