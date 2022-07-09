import React from 'react';

const Logo = ({margin,width}) => {
    const logoClick = ()=>{
        //로고 클릭시 홈 화면 가는 로직
    }
    return (
        <>
            <img src='/Logo.png' alt='이미지가 없습니다' onClick={logoClick} style={{width:width, margin:margin}} />
        </>
    );
};

export default Logo;

//사용법 <Logo width="넓이" margin="마진넓이" />