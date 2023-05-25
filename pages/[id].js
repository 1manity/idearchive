import Layout from '../components/layout';
import Head from 'next/head';
import Date from '../components/date';
import { getAllPostIds, getPostData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';
import Directory from "../components/directory"
import {getDirectoryData} from "../lib/getDirectoryData"


export default function Post({ postData ,allPostsData}) {
    return (
  <div className="container  h-[calc(100vh-0px)] w-[calc(100vw-0px)] min-w-full max-w-full ">




  <div className="text-sm text-gray-900 h-[60px] w-full">
    <nav className="flex items-center  rounded-sm border-2 border-zinc-100 justify-between h-full w-full">

    </nav>
  </div >

  <div className=" flex items-center ">
      <div className=" md:flex  flex-col w-1/5 h-[calc(100vh-60px)] rounded-sm border-2 border-zinc-100">
          {allPostsData.map((item) => {
          if (item.name !== '') {
              return <Directory key={item.id} item={item} />;
          }
          return null; // 如果name为空，则返回null
          })}
      </div>
      <div className="md:flex w-4/5  h-[calc(100vh-60px)] rounded-sm border-2 border-zinc-100">

        <Layout>
          <Head>
            <title>{postData.title}</title>
          </Head>
          <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
              <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </article>
        </Layout>
      
      </div>
    </div>

  </div>
    );
  }
export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);
    const allPostsData =await getDirectoryData("posts");
  
    return {
      props: {
        postData,
        allPostsData,
      },
    };
  }