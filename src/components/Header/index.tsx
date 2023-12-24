import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logoCoffeDelivery  from '../../assets/logoCoffeDelivery.svg'
import { HeaderButton, HeaderButtonCompra, HeaderContainer, HeaderInfo, HeaderInfoCompra, Local } from './styles'
export function Header(){
    return (
        <HeaderContainer>
            <a href="">
                <img src={logoCoffeDelivery} alt="" />
            </a>
            <HeaderInfo>
                <Local>
                    <MapPin size={20} color='#8047F8' weight='fill'/>
                    <input placeholder='Qual Seu estado?'></input>
                </Local>
                <HeaderButton>
                    <HeaderInfoCompra htmlFor="">3</HeaderInfoCompra>
                    <HeaderButtonCompra>
                        <ShoppingCart size={20} color='#C47F17' weight='fill' 
                        />
                    </HeaderButtonCompra>
                </HeaderButton>
            </HeaderInfo>
        </HeaderContainer>
    
    )
}