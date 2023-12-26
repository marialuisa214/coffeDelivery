import { Trash } from '@phosphor-icons/react';
import coffeExemplo from '../../../../assets/coffeExemplo.svg';
import { ButtonSubmit, CoffeInfo, CoffeInfoBox, CoffePrices, CoffeQuantidade, CoffeRemove, Container, PainContainer } from './style';
import { useTheme } from 'styled-components';

export function InfoCompra() {
    const theme = useTheme()
    return(
        <Container>
            <h2>Cafés selecionados</h2>
            <PainContainer>
                <CoffeInfoBox> {/* cafes comprados */}
                    <CoffeInfo>
                        <img src={coffeExemplo} alt="" />
                        <CoffeQuantidade>
                            <label htmlFor="">Expresso tradicional</label>
                            <CoffeRemove>
                                <input type="number"></input>
                                <button>
                                        <Trash size={20} color={theme['purple-500']}/>
                                    
                                    REMOVER
                                </button>
                            </CoffeRemove>
                        </CoffeQuantidade>
                    </CoffeInfo>
                    <strong>R$ 19,80</strong>
                        
                </CoffeInfoBox>

                <CoffeInfoBox> {/* cafes comprados */}
                    <CoffeInfo>
                        <img src={coffeExemplo} alt="" />
                        <CoffeQuantidade>
                            <label htmlFor="">Expresso tradicional</label>
                            <CoffeRemove>
                                <input type="number"></input>
                                <button>
                                        <Trash size={20} color={theme['purple-500']}/>
                                    
                                    REMOVER
                                </button>
                            </CoffeRemove>
                        </CoffeQuantidade>
                    </CoffeInfo>
                    <strong>R$ 19,80</strong>
                        
                </CoffeInfoBox>


                
                {/* informaçao final da compra */}
                <CoffePrices>    
                    <label htmlFor="">Total de itens</label>
                    <span>R$ 29,70</span>
                </CoffePrices>
                <CoffePrices>
                    <label htmlFor="">Entrega</label>
                    <span>R$ 3,50</span>
                </CoffePrices>
                <CoffePrices>
                    <strong>Total</strong>
                    <strong>R$ 33,20</strong>

                </CoffePrices>
                
                <ButtonSubmit>
                    CONFIRMAR PEDIDO
                </ButtonSubmit>

            </PainContainer>
         </Container>
    )
 }  
   