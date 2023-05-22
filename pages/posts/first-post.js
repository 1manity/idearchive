import Image from "next/image";
import Head from 'next/head';
import Link from "next/link";
import Script from 'next/script';
import Layout from '../../components/layout';
{/* <Image src="/images/1manity.jpg" height={144} width={144} alt="1manity" /> */}


export default function FirstPost() {
    // const YourComponent = () => (
    //     <Image
    //       src="/images/1manity.jpg" // Route of the image file
    //       height={144} // Desired size with correct aspect ratio
    //       width={144} // Desired size with correct aspect ratio
    //       alt="Your Name"
    //     />
    //   );

    return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </Layout>
  );
    
}