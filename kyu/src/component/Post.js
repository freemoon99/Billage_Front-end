import React from 'react';
import Block from '../component/Block';
import { Link } from 'react-router-dom';
import { getFrontEndInfo } from '../data/FrontEndInfo';

const Post = () => {

    let frontEndInfo = getFrontEndInfo();

    return (
        <>
            <div className='container' style={{border:'2px solid blue', textAlign:'center', margin:'auto'}}>
                <div className='row'>
                    {
                        frontEndInfo.map((element)=>(
                            <Link to={`/detail/${element.id}`} key={element.id}>{<Block frontEndInfo={element} i={element.id}/>}</Link>
                        ))
                    }
                </div>
            </div>
        </>
        
    );
};

export default Post;