import { InfoCompra } from "./Components/InfoCompra"
import { InfoEndereco } from "./Components/InfoEndereço"

export function Checkout() {  
    return (
        <form>
            <div>
                <InfoEndereco />

            </div>
            <InfoCompra />

        </form>
    )
}
   