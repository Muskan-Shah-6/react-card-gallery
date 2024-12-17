import React from 'react'
import './index.css'
import Card from './Card'
import imgone from './images/img-1.jpeg';
import imgtwo from './images/img-2.jpeg';
import imgthree from './images/img-3.jpeg';
import imgfour from './images/img-4.jpeg';
import imgfive from './images/img-5.jpeg';
import imgsix from './images/img-6.jpg';
import imgseven from './images/img-7.jpeg';
import imgeight from './images/img-8.jpg';

// Create a component for main-page to display all the cards
function Mainpage() {
    return (
        <>
            <h1 className="heading">Card Gallery</h1>
            <div className='cardComp'>
                <Card title="Beutyfull Girl" img={imgone} />
                <Card title="Blooming flowers" img={imgtwo} />
                <Card title="Blooming Orchids" img={imgthree} />
                <Card title="Silent Road" img={imgfour} />
                <Card title="Red blooms flowers" img={imgfive} />
                <Card title="Flower bowl" img={imgsix} />
                <Card title="Happy kid" img={imgseven} />
                <Card title="Best Giraffee" img={imgeight} />
            </div>
        </>
    )
}

export default Mainpage;
