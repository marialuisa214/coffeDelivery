import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import coffe from '../../assets/coffe.svg';
import { IconBackgroud, IntroDivPrincipal, IntroDivText, IntroGridContext, IntroTitulo} from './styles';
import { useTheme } from 'styled-components';
import { CoffeList } from './components/CoffeList';
export function Home() {
    const theme = useTheme()

    return (
        <div>
        <IntroDivPrincipal>
            <IntroDivText>
                <IntroTitulo>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </IntroTitulo>
                <IntroGridContext>
                        <div>
                            <IconBackgroud statusColor="yellowDark">
                            <ShoppingCart size={20} color={theme['white-100']} weight='fill'/>
                            </IconBackgroud>
                            <label>Compra simples e segura</label>
                        </div>
                        <div>
                            <IconBackgroud statusColor="gray">
                            <Package size={20} color={theme['white-100']} weight='fill'/>
                            </IconBackgroud>
                            <label>Embalagem mantém o café intacto</label> 
                        </div>
                        <div>
                            <IconBackgroud statusColor="yellow">
                            <Timer size={20} color={theme['white-100']} weight='fill'/>
                            </IconBackgroud>
                            <label>Entrega rápida e rastreada</label>   
                        </div>
                        <div>
                            <IconBackgroud statusColor='purple'>
                            <Coffee size={20}  color={theme['white-100']} weight='fill'/>
                            </IconBackgroud >
                            <label>O café chega fresquinho até você</label>        
                        </div>
                </IntroGridContext>
            </IntroDivText>
            <img src={coffe} alt="" />
        </IntroDivPrincipal>
        <CoffeList/>
        </div>
    )
}