import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logoCoffeDelivery  from '../../assets/logoCoffeDelivery.svg'
import { HeaderButton, HeaderButtonCompra, HeaderContainer, HeaderInfo, HeaderInfoCompra, Local } from './styles'
import { CoffeeContext } from '../../contexts/CoffeContexts';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
export function Header(){
    const { coffeShoop } = useContext(CoffeeContext);

    return (
        <HeaderContainer>
            <nav>
                <NavLink to='/'>
                    <a href="">
                        <img src={logoCoffeDelivery} alt="" />
                    </a>
                </NavLink>
            </nav>
            <HeaderInfo>
                <Local>
                    <MapPin size={20} color='#8047F8' weight='fill'/>
                    <input placeholder='Qual Seu estado?'></input>
                </Local>
                <HeaderButton>
                    <nav>
                        <NavLink to='/checkout'>
                            <HeaderInfoCompra htmlFor="">{coffeShoop.totalNumberCoffe}</HeaderInfoCompra>
                            <HeaderButtonCompra>
                                <ShoppingCart size={20} color='#C47F17' weight='fill' 
                                />
                            </HeaderButtonCompra>
                        </NavLink>
                    </nav>
                </HeaderButton>
            </HeaderInfo>
        </HeaderContainer>
    
    )
}