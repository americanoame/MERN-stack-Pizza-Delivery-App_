import React from 'react';
import pizzas from '../seeds/PizzasData';
import Pizza from "../components/Pizza";

export default function HomePage() {
    return (
        <div>
            <div className='row'>

                {pizzas.map(pizza => {

                    return <div className="col-md-4">
                        <div>
                          <Pizza pizza={pizza}/>
                        </div>
                    </div>

                })}

            </div>
        </div>
    )
}













