import { ShoppingCart } from '@phosphor-icons/react';
import coffeExemplo from '../../../../assets/coffeExemplo.svg';
import { CoffeCard, CoffeShopping, ContextListCoffe, ListCoffee } from './style';


const coffe = [ 1,2,3,4,5,6,7,8,9,10, ];

export function CoffeList() {
    return (
        <ContextListCoffe>
            <h2>Nossos cafés</h2>
            <ListCoffee>

                <CoffeCard>
                    <img src={coffeExemplo} alt="" />
                    <div>
                        <label htmlFor="">tradicional</label>
                        <label htmlFor="">com leite</label>
                    </div>
                    <h3>Expresso Tradicional</h3>
                    <span>O tradicional café feito com água quente e grãos moídos</span>

                    <CoffeShopping>
                        <p>R$</p>
                        <span>4,00</span>

                        <input type="number" />
                        <button>
                            <ShoppingCart size={20} weight='fill'  />
                        </button>
                    </CoffeShopping>
                </CoffeCard>

                {coffe.map((item) => (
                    <CoffeCard>
                    <img src={coffeExemplo} alt="" />
                    <div>
                        <label htmlFor="">tradicional</label>
                        <label htmlFor="">com leite</label>
                    </div>
                    <h3>Expresso Tradicional</h3>
                    <span>O tradicional café feito com água quente e grãos moídos</span>

                    <CoffeShopping>
                        <p>R$</p>
                        <span>4,00</span>

                        <input type="number" />
                        <button>
                            <ShoppingCart size={20} weight='fill'  />
                        </button>
                    </CoffeShopping>
                </CoffeCard>

                ))}



            </ListCoffee>
        </ContextListCoffe>
    )
}