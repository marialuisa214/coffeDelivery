import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import successDelivery from '../../assets/successDelivery.svg'
import { ContainerGrid, ContainerInfo, Context, InfoDiv, InfoIcons } from './styles'
import { useTheme } from 'styled-components';

export function Success() {
    const theme = useTheme();
    return (
        <Context>
            <h2>Uhu! Pedido confirmado</h2>
            <p>Agora é só aguardar que logo o café chegará até você</p>
            <ContainerGrid>
                <ContainerInfo>
                    <InfoDiv>
                        <InfoIcons statusColor='yellow'>
                            <MapPin size={15} color={theme['white-400']} weight='fill'/>
                        </InfoIcons>
                        <div>
                            <h3>Endereço de entrega</h3>
                            <p>Rua tal, 123</p>
                        </div>
                    </InfoDiv>
                    <InfoDiv>
                        <InfoIcons statusColor='yellow'>
                            <Timer color={theme['white-400']} weight='fill'/>
                        </InfoIcons>
                        <div>
                            <h3>Previsao de entrega</h3>
                            <p>20 min - 30 min</p>
                        </div>
                    </InfoDiv>
                    <InfoDiv >
                        <InfoIcons statusColor='yellowDark'>
                            <CurrencyDollar size={15}  color={theme['white-400']} weight='fill'/>
                        </InfoIcons>
                        <div>
                            <h3>Pagamento na entrega</h3>
                            <p>Cartão de Crédito</p>
                        </div>
                    </InfoDiv>
                </ContainerInfo>
                <img src={successDelivery} alt="" />


            </ContainerGrid>
        </Context>
    )
}