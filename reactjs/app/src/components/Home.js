import React, { useState, useEffect } from "react";

import "./css/style.css"

import img1 from './img/1.png';
import img2 from './img/2.png';
import img3 from './img/3.png';
import img4 from './img/4.png';
import img5 from './img/5.png';
import img6 from './img/6.png';
import img7 from './img/7.png';
import img8 from './img/8.png';
import img9 from './img/9.png';
import img10 from './img/10.png';

export function Home() {

    const [h1, setH1] = useState(<h1>Combien d'oreillers dans votre vie ?</h1>);
    const array = ["0", img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]
    const [img, setImg] = useState(array[1]);
    const [h3, setH3] = useState(1);
    const [prev, setPrev] = useState(<div className='button-replace'></div>);
    const [next, setNext] = useState(<button onClick={toNext} className='button-next'></button>);
    const [isBackground, setIsBackground] = useState(true);

    function toNext() {
        setH3(h3 => h3 + 1);
    }
    function toPrev() {
        setH3(h3 => h3 - 1);
    }
    useEffect(() => {
        setImg(array[h3])
        if (h3 % 2 === 0) {
            setIsBackground(false);
        }
        if (h3 % 2 !== 0) {
            setIsBackground(true);
        }
        if (h3 === 1) {
            setH1(<h1>Combien d'oreillers dans votre vie ?</h1>);
            setPrev(<div className='button-replace'></div>);
            setNext(<button onClick={toNext} className='button-next'></button>);
        }
        if (h3 > 1) {
            setH1("");
            setPrev(<button onClick={toPrev} className='button-prev'></button>);
        }
        if (h3 === 10) {
            setNext(<div className='button-replace'></div>);
        }
    }, [h3]);

    return (
        <div id="mybody" className={isBackground ? 'bg-w' : 'bg-r'}>
            <div id="top">{h1}</div>
            <div id="mid"><img src={img} alt="Coussin(s)" /></div>
            <div id="bot">
                {prev}
                <h3 className={isBackground ? 'bg-w-ft' : 'bg-r-ft'}>{h3}</h3>
                {next}
            </div>
        </div>
    );
}