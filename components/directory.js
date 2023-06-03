import React, { useState } from 'react';
import Link from 'next/link';



const Directory = ({ item , onSelectPost }) => {
    console.log(item);
    const isDic = item.category==="dictionary";
    console.log(isDic);
    const hasChildren = item.children && item.children.length > 0;
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = (id) => {
        setIsOpen(!isOpen);
        if(!isDic) {
            onSelectPost(id);
        }


    };

    return (
        <div className=''>
            <div className="pl-2 pr-2  pt-1 pb-1  max-w-sm mx-auto bg-white rounded-xl shadow-lg space-x-3 ">


                <button
                    className="btn  w-full rounded-xl text-sm flex flex-row items-center justify-center pt-[0px] pb-[0px]  h-auto  "
                    onClick={()=>toggleOpen(item.id)}
                >

                    <p className={`text-black pt-[0px] pb-[0px] my-0.5 ${isDic ? 'text-xl font-semibold' : 'text-lg font-normal'}`}>{item.title}</p>

                    {item.children && item.children.length > 0 ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className={`w-4 h-4  ml-auto mr-1 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-40'}`}
                        >
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            )}
                        </svg>
                    ):(<div className=""></div>)}

                </button>

            </div>
            {isOpen && hasChildren && (
                <ul className="pl-2 pt-0 mt-0 mb-1">
                    {item.children.map((child) => (
                        <li key={child.id}>
                            <Directory  item={child} onSelectPost={onSelectPost}/>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Directory;
