import React, { useState } from 'react';
import './css/App.css';

import HomeCarousel from './components/HomeCarousel.js'
import Navbar from './components/shared/Navbar';
import ItemCard from './components/shared/ItemCard.js'
import TakeBill from './components/TakeBill';
import { products, sections, WhatsappNumber } from './data';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';

export default function HomePage() {
    const [bill, setbill] = useState({
        products: products,
        cost: 0,
        order: false,
        clientData: {}
    });
    const handleUpdateCuantity = (cuantity, productID) => {
        const newBill = Object.assign({}, bill);
        const product = newBill.products[productID];
        // cuantity could be "1" or "-1"
        if(product.cuantity === undefined)
            product.cuantity = 0;
        product.cuantity += cuantity;
        newBill.cost += product.cost*cuantity;

        setbill(newBill);
    }
    const Category = ({category}) => {
        const thisCategory = sections[category];
        if(!(thisCategory && thisCategory.products && thisCategory.products.length > 0)) return <></>
        return(
            <div className="">
                <BgImgHero
                    is="is-small"
                    dark={true}
                    size="is-3"
                    img="img/banners/catalogo.jpg"
                    title={thisCategory.text}/>

                <div className="columns mt-1">
                    {
                        thisCategory.products.map( productID => {
                            const product = products[productID];
                            if(!product) return <></>;
                            return <ItemCard 
                                key={productID}
                                id={productID}
                                updateBillProduct={handleUpdateCuantity} 
                                {...product}/>;
                        })
                    }
                </div>
                <hr/>
            </div>
        )
    }
    const handleTakeBill = (clientData) => {
        const newBill = Object.assign({}, bill);
        newBill.clientData = clientData;
        newBill.order = true;
        setbill(newBill);
    }
    const handleCloseBill = () => {
        const newBill = Object.assign({}, bill);
        newBill.order = false;
        setbill(newBill);
    }
    const handleSendWhatsapp = () => {
        const url = `https://api.whatsapp.com/send?phone=${WhatsappNumber}`
        window.open(url);
    }

    const BgImgHero = ({img, title, subtitle, dark = false, is = "", size = ""}) => (
        <div className={`hero ${dark?'is-dark': ''} ${is}`} style={{
                background: 'url("'+img+'")',
                backgroundSize: 'cover',
                backgroundPositionY: 'center',
                backgroundPositionX: 'center',
            }}>

            <div className="hero-body">
            <div className="container">
                {title && <p className={`title ${size}`}>{title}</p>}
                {subtitle && <p className={`subtitle ${size}`}>{subtitle}</p>}
            </div>
            </div>
        </div>
    )
    const WhatsappButton = () => (
        <a className="box notification is-success disable-select" onClick={handleSendWhatsapp}>
            <article class="media">
                <figure class="media-left">
                    <p class="image is-32x32">
                        <img src="img/whatsappicon.png"/>
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <p className="is-size-6">Click aquí para pedidos especiales, verificar si aún hay productos en stock, o alguna otra cuestión del ministerio de magia 🔮</p>
                    </div>
                </div>
            </article>
        </a>
    )

    return (
        <div className="App">
            <Navbar billCost={bill.cost}/>
            <HomeCarousel/>

            <section className="section" id='catalogo'>
                <div className="container mt-5">
                    <BgImgHero
                        is="has-text-centered"
                        size="is-2"
                        dark={true}
                        img="img/banners/catalogo.jpg"
                        title="Catálogo"/>
                    <div className="box">


                    <Category category="carnicos"/>
                    <Category category="tamales"/>
                    <Category category="galletas"/>
                    <Category category="tortillas"/>
                    </div>
                </div>
            </section>

            <section className="section" id='pedido'>
                <div className="container mt-5">
                <p className="title is-3">Realiza tu pedido!</p>
                    <TakeBill 
                        bill={bill}
                        takeBill={handleTakeBill}/>

                    <OrderModal 
                        bill={bill}
                        close={handleCloseBill}/>
                    <WhatsappButton/>
                </div>
            </section>
            <Footer/>
        </div>
    )
}
