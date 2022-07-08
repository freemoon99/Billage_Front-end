import React from 'react';

function Block(props){
    return (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2' style={{border:'2px solid pink', margin:'0.5%', display:'flex', flexDirection:'row'}}>
            <img style={{width:'70%', border:'2px solid red', margin:'3%'}} src='/ABOUT_image.png' alt='사진이 없습니다'/>
            <h4 style={{marginTop:'10%', fontSize:'95%'}}>{props.frontEndInfo.name}<br/>{props.frontEndInfo.age}</h4>
        </div>
    )
}

export default Block;