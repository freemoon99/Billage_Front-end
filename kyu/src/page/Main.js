import React from 'react';
import Header from '../component/Header';
import { Outlet } from 'react-router-dom';
import Post from '../component/Post';

function Main() {
    return (
        <>
            <div style={{width:'95%', margin:'4%'}}>
                <Header/>
                <div style ={{border:'2px solid grey', borderLeft:'0px', borderRight:'0px', padding:'10px'}}>
                    메인 베너 창<br/>
                    <img style = {{textAlign:'center', width:'98%'}} src='/Home_image.jpg' alt='이미지 없습니다'/>
                </div>
                <Post />
            </div>
            <Outlet/>
        </>
    );
}

export default Main;