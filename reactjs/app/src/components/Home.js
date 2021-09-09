import React, { useState } from "react";

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
    const [img, setImg] = useState(img1);
    const [h3, setH3] = useState(1);
    const [prev, setPrev] = useState(<div className='button-replace'></div>);
    const [next, setNext] = useState(<button onClick={to2} className='button-next'></button>);
    const [isBackground, setIsBackground] = useState(true);

    function to1() {
        setH1(<h1>Combien d'oreillers dans votre vie ?</h1>);
        setImg(img1);
        setH3(1);
        setPrev(<div className='button-replace'></div>);
        setNext(<button onClick={to2} className='button-next'></button>);
        setIsBackground(true);
    }
    function to2() {
        setH1("");
        setImg(img2);
        setH3(2);
        setPrev(<button onClick={to1} className='button-prev'></button>);
        setNext(<button onClick={to3} className='button-next'></button>);
        setIsBackground(false);
    }
    function to3() {
        setH1("");
        setImg(img3);
        setH3(3);
        setPrev(<button onClick={to2} className='button-prev'></button>);
        setNext(<button onClick={to4} className='button-next'></button>);
        setIsBackground(true);
    }
    function to4() {
        setH1("");
        setImg(img4);
        setH3(4);
        setPrev(<button onClick={to3} className='button-prev'></button>);
        setNext(<button onClick={to5} className='button-next'></button>);
        setIsBackground(false);
    }
    function to5() {
        setH1("");
        setImg(img5);
        setH3(5);
        setPrev(<button onClick={to4} className='button-prev'></button>);
        setNext(<button onClick={to6} className='button-next'></button>);
        setIsBackground(true);
    }
    function to6() {
        setH1("");
        setImg(img6);
        setH3(6);
        setPrev(<button onClick={to5} className='button-prev'></button>);
        setNext(<button onClick={to7} className='button-next'></button>);
        setIsBackground(false);
    }
    function to7() {
        setH1("");
        setImg(img7);
        setH3(7);
        setPrev(<button onClick={to6} className='button-prev'></button>);
        setNext(<button onClick={to8} className='button-next'></button>);
        setIsBackground(true);
    }
    function to8() {
        setH1("");
        setImg(img8);
        setH3(8);
        setPrev(<button onClick={to7} className='button-prev'></button>);
        setNext(<button onClick={to9} className='button-next'></button>);
        setIsBackground(false);
    }
    function to9() {
        setH1("");
        setImg(img9);
        setH3(9);
        setPrev(<button onClick={to8} className='button-prev'></button>);
        setNext(<button onClick={to10} className='button-next'></button>);
        setIsBackground(true);
    }
    function to10() {
        setH1("");
        setImg(img10);
        setH3(10);
        setPrev(<button onClick={to9} className='button-prev'></button>);
        setNext(<div className='button-replace'></div>);
        setIsBackground(false);
    }


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