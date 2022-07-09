import React from 'react';
import Logo from './Logo.js';
import Slogan from './Slogan.js';
import '../style/Header.css';

const Header = () => {
    const glassClick = ()=>{
        //검색 돋보기 클릭시s
    }
    
    return (
        <div id="HeaderDiv">
            <Logo margin="%" width="5%" />
            <Slogan size="30%" />
            <input id="searchBar" type="text" placeholder="찾는 물건을 입력하세요" />
            <img id="searchGlass" src='/SearchGlass' alt="SearchGlass" onClick={glassClick}/>
            <p id="loginSignup"><a href="/login">로그인/회원가입</a></p>
        </div>
    );
};

export default Header;

