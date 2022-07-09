import React from 'react';
import Header from '../component/Header';
import { Outlet } from 'react-router-dom';
import Post from '../component/Post';

function Main() {
    return (
        <>
            <div style={{textAlign:'center', width:'80%' , border:"2px blue solid" , margin:"auto"}}>
                <div style={{margin:'3%'}}>
                    <Header/>
                    <div style ={{border:'2px solid grey', borderLeft:'0px', borderRight:'0px', padding:'10px', textAlign:'center'}}>
                        메인 베너 창<br/>
                        <img style = {{textAlign:'center', width:'98%'}} src='/Home_image.jpg' alt='이미지 없습니다'/>
                    </div>
                    <Outlet/>
                    <Post />
                </div>
            </div>
        </>
    );
}

export default Main;