import { React, useState }from 'react';
import Logo from './Logo.js';
import '../style/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

    const [ search, setSerach ] = useState("");

    function searchHandle(e) {
        setSerach(e.target.value);
    }

    return (
        <div id="HeaderDiv">
            <div id="LeftBOx">
            <Logo margin="0%" width="40%" />
            </div>
            <div id="RightBox">
                <input style={{height: '70%', marginBottom:'auto', marginTop:'auto'}} type="text" placeholder="찾는 물건을 입력하세요" onChange={searchHandle}/>
                <div><button style={{backgroundColor:'#cdccf7', border:'0', outline:'0'}}><Link to={`/serach`}><img src='/Search.png' alt='이미지 없습니다'></img></Link></button></div>
                <a href="/login">로그인/회원가입</a>
            </div>
        </div>
    );
};

export default Header;

