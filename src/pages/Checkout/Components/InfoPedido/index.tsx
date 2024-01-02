import { Trash } from '@phosphor-icons/react';
import coffeExemplo from '../../../../assets/coffeExemplo.svg';
import { ButtonSubmit, CoffeInfo, CoffeInfoBox, CoffePrices, CoffeQuantidade, CoffeRemove, Container, PainContainer } from './style';
import { useTheme } from 'styled-components';
import { useContext } from 'react';
import { CoffeeContext } from '../../../../contexts/CoffeContexts';

export function InfoCompra() {
    const theme = useTheme()
    const { coffeeList, coffeShoop, removeCoffe } = useContext(CoffeeContext);
    
    function handleRemoveCoffe(id: number) {
        removeCoffe(id);
    }


    return(
        <Container>
            <h2>Cafés selecionados</h2>
            <PainContainer>
            {coffeShoop.listIdCoffe.map((coffee) => {
                // Encontrar as informações completas do café usando o id
            const coffeeInfo = coffeeList.find((c) => c.id === coffee.id);

            if (coffeeInfo) {
                return(
                    <CoffeInfoBox> {/* cafes comprados */}
                        <CoffeInfo>
                            <img src={coffeExemplo} alt="" />
                            <CoffeQuantidade>
                                <label htmlFor="">{coffeeInfo.name}</label>
                                <CoffeRemove>
                                    <input type="number" placeholder={String(coffee.totalQuantity)}></input>
                                    <button 
                                    onClick={() => handleRemoveCoffe(coffeeInfo.id)}
                                    >
                                         <Trash size={20} color={theme['purple-500']}/>
                                        
                                        REMOVER
                                    </button>
                                </CoffeRemove>
                            </CoffeQuantidade>
                        </CoffeInfo>
                    <strong>R${(coffee.totalQuantity * coffeeInfo.price)}</strong>
                        
                </CoffeInfoBox>
                )
            }
        })}

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
    )}  

   