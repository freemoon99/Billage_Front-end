import React from 'react';
import Block from '../component/Block';
import { getFrontEndInfo } from '../data/FrontEndInfo';

const Post = () => {

    let frontEndInfo = getFrontEndInfo();

    return (
        <>
            <div className='container' style={{border:'2px solid blue'}}>
                <div className='row'>
                    {
                        frontEndInfo.map((a,i)=>{
                            return <Block frontEndInfo={frontEndInfo[i]} i={i}/>
                        })
                    }
                </div>
            </div>
        </>
        
    );
};

export default Post;