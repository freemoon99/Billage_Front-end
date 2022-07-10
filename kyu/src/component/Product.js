import React from 'react';
import { Carousel } from 'react-bootstrap';
import defaultImg from './HOME_image.png';

// 캐러셀 이라는 부트스트랩 예시 이용 -> 회전목마 구현
const Product = (props) => {
    
    const onErrorImg = (e) => {
        e.target.src = defaultImg;
    }
    
    return (
        <div style={{width:'40%', margin:'auto'}}>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img style={{width:'100%', height:'300px'}}
                    className="d-block w-100"
                    src={props.person.photo}
                    onError={onErrorImg}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{width:'100%', height:'300px'}}
                    className="d-block w-100"
                    src="holder.js/400x400?text=Second slide&bg=282c34"
                    onError={onErrorImg}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{width:'100%', height:'300px'}}
                    className="d-block w-100"
                    src="holder.js/400x400?text=Third slide&bg=20232a"
                    onError={onErrorImg}
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Product;