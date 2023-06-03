import React, { useState } from 'react';
import Link from 'next/link';



const Content = ({ data }) => {
    return (<>

            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">

                    <div className="card" dangerouslySetInnerHTML={{ __html: data }}></div>
                    {/*<div className="card-actions justify-end">*/}
                    {/*    <button className="btn btn-primary">Buy Now</button>*/}
                    {/*</div>*/}
                </div>
            </div>


        </>
    );
};

export default Content;
