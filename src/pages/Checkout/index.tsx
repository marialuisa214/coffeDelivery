import { InfoCompra } from "./Components/InfoPedido"
import { InfoEndereco } from "./Components/InfoCompra"
import {  Container } from "./styles"

export function Checkout() {  
    return (
        <>
            <Container>
                <InfoEndereco />
                <InfoCompra />
            </Container>
        </>
    )
}
   