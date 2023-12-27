import { MapPinLine } from "@phosphor-icons/react";
import { BoxLocalization, BoxLocalizationTitle, Container, ContextLocalizationBase, ContextLocalizationCidede, ContextLocalizationComplemento, ContextLocalizationRua, ContextLocalizationUf } from "./style";
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
        </Container>
    )
}