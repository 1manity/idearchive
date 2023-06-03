import Directory from "../components/directory"
import {useState,useEffect} from "react";
import Content from "../components/content";


export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/posts');
    const data = await res.json();

    // 在这里处理数据，得到你需要的目录结构
    // const items = processData(data);

    return {
        props: {
            data: data,
        },
    };
}
export default function Home({data}) {
    const [selectedPostId, setSelectedPostId] = useState(null);
    const [postContent, setPostContent] = useState('');
    useEffect(() => {
        async function fetchPostContent() {
            if (selectedPostId !== null) {
                const res = await fetch(`/api/post?path=${selectedPostId}`);
                const data = await res.json();
                setPostContent(data.content);
            }
        }

    fetchPostContent();
    }, [selectedPostId]);
    return (
    <div className="container  h-[calc(100vh-0px)] w-[calc(100vw-0px)] min-w-full max-w-full bg-blue-50">


        <div className="text-sm text-gray-900  w-full ">
            <div className="navbar bg-base-100 ">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">1manity</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto"/>
                    </div>

                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/10.jpg"/>
                            </div>
                        </label>
                </div>
            </div>
        </div >

        <div className=" flex flex-row ">
            <div className=" md:flex  flex-col w-1/5  rounded-sm border-2 border-zinc-100">
                {data.map((item) => {
                if (item.name !== '') {
                    return <Directory key={item.id} item={item} onSelectPost={setSelectedPostId} />;
                }
                return null; // 如果name为空，则返回null
                })}
            </div>
            <div className="md:flex w-4/5  rounded-sm border-2 border-zinc-100">
                <Content data={postContent}></Content>
            </div>
        </div>

    </div>

    )
  }