import Directory from "../components/directory"
import {getDirectoryData} from "../lib/getDirectoryData"

export async function getStaticProps() {
    const allPostsData =await getDirectoryData("posts");

    return {
      props: {
        allPostsData,
      },
    };
  }

export default function Home({allPostsData}) {
    const directoryData = [
        {
          id: 1,
          name: 'Folder 1',
          children: [
            {
              id: 2,
              name: 'Subfolder 1',
              children: [
                {
                  id: 4,
                  name: 'Sub-subfolder 1',
                  children: [],
                },
              ],
            },
            {
              id: 3,
              name: 'Subfolder 2',
              children: [],
            },
          ],
        },
        {
          id: 5,
          name: 'Folder 2',
          children: [],
        },
      ];
      console.log(allPostsData);
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

            </div>
        </div>

    </div>

    )
  }