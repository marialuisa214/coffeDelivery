import { InfoCompra } from "./Components/InfoPedido"
import { InfoEndereco } from "./Components/InfoCompra"
import {  Container } from "./styles"

export function Checkout() {  
    return (
        <form>
            <Container>
                <InfoEndereco />
                <InfoCompra />
            </Container>
        </form>
    )
}
   