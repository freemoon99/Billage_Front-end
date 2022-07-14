import React from 'react';
import {useParams} from 'react-router-dom';
import Blockcopy from './Blockcopy';

const Upost = (props) => {
    const params = useParams();
    console.log(typeof props);
    console.log(props);

    const filterData = props.data.filter((element)=>{ if(element.id === parseInt(params.productId)) return element.id});
    console.log(filterData);
    return (
        <>
            <div className='container' style={{width:'100%', border:'2px solid yellow', textAlign:'center'}}>
                <h4 style={{textAlign:'left'}}>게시물</h4>
                <div className='row'>
                    {
                        // id값을 받아와서 이동하기 위함
                        filterData.map((element)=>(
                                <Blockcopy frontEndInfo={element} key={element.id} i={element.id}/>
                        ))
                    }
                </div>
            </div>
        </>
        
    );
};

export default Upost;