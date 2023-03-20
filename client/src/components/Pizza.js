import React, {useState} from "react";
import "../styles/Pizza.css";

export default function Pizza({ pizza }) {
    const [quantity, setQuantity] = useState(1);
    const [ variant, setVariant] = useState("small");
   
    return (
        <div className='col-lg-6 mx-auto text-center'>
            <h1>{pizza.name}</h1>
            <img src={pizza.image} className="img-fluid atl=" />

            <div className="row">

                <div className="col-lg-6">
                    <p>Variants</p>
                    <select value={variant} onChange={(e) => {setVariant(e.target.value)}}>
                        {pizza.variants?.map(variant => {
                            return <option value={variant}>{variant}</option>
                        })}
                    </select>
                </div>

                <div className="col-lg-6">
                    <p>Quantity</p>
                    <select value={quantity} onChange={(e) => {setQuantity(e.target.value)}}>
                        {[...Array(10).keys()].map((x, i) => {

                            return <option value={i + 1}>{i + 1}</option>

                        })}
                    </select>
                </div>
            </div>

            <div className="">
            
              {/* <h1>Price : {pizza.prices[0][variant] * quantity}</h1> */}

            


            </div>

            <div>

            </div>
        </div>
    )
}
