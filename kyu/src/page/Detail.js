import React from 'react';
import Post from '../component/Post';
import Product from '../component/Product';
import Header from './../component/Header';
import { useParams } from 'react-router-dom';
import { getFrontEndPeple } from '../data/FrontEndInfo';

function Detail() {
    const params = useParams();
    const person = getFrontEndPeple(parseInt(params.productId));

    return (
        <>
            <div style={{textAlign:'center', width:'80%' , border:"2px blue solid" , margin:"auto"}}>
                <div style={{margin:'3%'}}>
                    <Header/>
                    <h2 style={{textAlign:'left', fontWeight:'bold'}}>상세페이지</h2>
                    <Product />
                    <h4 style={{textAlign:'left'} }>
                        <p style={{fontSize:'20px', fontWeight:'bold'}}>{person.name}</p>
                        <p style={{fontSize:'18px'}}>{person.age}</p>
                        <p style={{fontSize:'18px'}}>{person.department}</p>
                        <p style={{fontSize:'18px'}}>{person.MBTI}</p>
                        <p style={{fontSize:'18px'}}>{person.detail}</p>
                        <p>{person.photo}</p>
                    </h4>
                    <Post />
                </div>
            </div>
        </>
    );
};

export default Detail;