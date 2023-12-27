import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { BoxLocalization, BoxLocalizationTitle, BoxPaing, BoxPaingTitle, Container, ContextLocalizationBase, ContextLocalizationCidede, ContextLocalizationComplemento, ContextLocalizationRua, ContextLocalizationUf } from "./style";
import { useTheme } from "styled-components";

export function InfoEndereco() { 
    const theme =useTheme();
    return(
        <Container>
            <h1>Complete seu pedido</h1>
            <BoxLocalization>
                <BoxLocalizationTitle>
                    <MapPinLine size={23} color={theme['yellow-800']}/>
                    <div>
                        <h2>Endereço de entrega</h2>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </div>
                </BoxLocalizationTitle>
                <ContextLocalizationBase type="text" placeholder="CEP"/>
                <ContextLocalizationRua type="text" placeholder="Rua"/>
                <ContextLocalizationBase type="text" placeholder="Numero"/>
                <ContextLocalizationComplemento type="text" placeholder="Complemento"/>
                <ContextLocalizationBase type="text" placeholder="Bairro"/>
                <ContextLocalizationCidede type="text" placeholder="Cidade"/>
                <ContextLocalizationUf type="text" placeholder="UF"/>
            </BoxLocalization>

            <BoxPaing>
                <BoxPaingTitle>
                    <CurrencyDollar size={23}  color={theme['purple-500']} />
                    <div>
                        <h2>Endereço de entrega</h2>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </div>
                </BoxPaingTitle>

                <button>
                    <CreditCard size={18} color={theme['purple-500']} />
                    <span>CARTÃO DE CRÉDITO</span>
                </button>

                <button>
                    <Bank size={18} color={theme['purple-500']} />
                    <span>CARTÃO DE DÉBITO</span>
                </button>

                <button>
                    <Money size={18} color={theme['purple-500']} />
                    <span>DINHEIRO</span>
                </button>
                    


            </BoxPaing>

        </Container>
    )
}