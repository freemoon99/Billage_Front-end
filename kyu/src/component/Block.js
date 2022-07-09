import React from 'react';

function Block(props){
    return (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2' style={{border:'2px solid pink', display:'flex', flexDirection:'row', margin:'0px', }}>
            <img style={{width:'70%', border:'2px solid red', margin:'0px'}} src='/ABOUT_image.png' alt='사진이 없습니다'/>
            <h4 style={{marginTop:'10%', fontSize:'95%', margin:'0px'}}>{props.frontEndInfo.name}<br/>{props.frontEndInfo.age}</h4>
        </div>
    )
}

export default Block;