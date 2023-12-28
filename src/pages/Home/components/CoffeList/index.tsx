import { ShoppingCart } from '@phosphor-icons/react';
import coffeExemplo from '../../../../assets/coffeExemplo.svg';
import { CoffeCard, CoffeShopping, ContextListCoffe, ListCoffee } from './style';
import { useContext } from 'react';
import { CoffeeContext } from '../../../../contexts/CoffeContexts';
// import { useState } from 'react';



export function CoffeList() {
    const { coffeeList, addCoffe } = useContext(CoffeeContext);


    return (
        <ContextListCoffe>
            <h2>Nossos cafés</h2>
            <ListCoffee>

                {coffeeList.map((coffee) => (
                    <CoffeCard>
                    <img src={coffeExemplo} alt="" />
                    <div>
                        {coffee.tag.map((t) => (
                            <label htmlFor="">{t}</label>

                        ))}
                    </div>
                    <h3>{coffee.name}</h3>
                    <span>O tradicional café feito com água quente e grãos moídos</span>
                    <form onSubmit={(e) => {
                        addCoffe(coffee.id, Number(e.target.quantity.value))
                        e.preventDefault();
                    }}>

                    <CoffeShopping>
                        <p>R$</p>
                        <span>{coffee.price}</span>

                        <input type="number"
                        name='quantity'
                        min={1}
                        ></input>
                        <button type='submit'>
                            <ShoppingCart size={20} weight='fill'  />
                        </button>
                    </CoffeShopping>
                    </form>
                </CoffeCard>

                ))}
            </ListCoffee>
        </ContextListCoffe>
    )
}