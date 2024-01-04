import {  CurrencyDollar, MapPinLine, Trash } from "@phosphor-icons/react";
import coffeExemplo from '../../../../assets/coffeExemplo.svg';
import { BoxLocalization, BoxLocalizationTitle, BoxPaing, BoxPaingTitle, ButtonSubmit, CoffeInfo, CoffeInfoBox, CoffePrices, CoffeQuantidade, CoffeRemove, Container, Container1, Container2, ContextLocalizationBase, ContextLocalizationCidede, ContextLocalizationComplemento, ContextLocalizationRua, ContextLocalizationUf, PainContainer, RadioAction, RadioInput, RadioLabel } from "./style";
import * as zod from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'
import { useTheme } from "styled-components";
import { useContext } from "react";
import { CoffeeContext } from "../../../../contexts/CoffeContexts";
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";



export function InfoEndereco() { 
    const theme =useTheme();

    const { coffeeList, coffeShoop, removeCoffe, addCoffe } = useContext(CoffeeContext);


    function handleRemoveCoffe(id: number, event: any) {
        event.preventDefault();
        removeCoffe(id);
    }
    const valorEntrega = (Math.random() * (10 - 3.5) + 3.5).toFixed(2);



    const endereçovalidacaoSchema = zod.object({
        cep: zod.string().min(3),
        cidade: zod.string().min(3),
        bairro: zod.string().min(3),
        rua: zod.string().min(3),
        numero: zod.string().min(1),
        complemento: zod.string(),
        uf: zod.string().min(2),
        pagamento: zod.string()

    })

    type FormDataEndereco = zod.infer<typeof endereçovalidacaoSchema>

    const novaCompraForm = useForm<FormDataEndereco>({
        resolver: zodResolver(endereçovalidacaoSchema),
        defaultValues: {
        cep: '',
        cidade: '',
        bairro: '',
        rua: '',
        numero: '',
        complemento: '',
        uf: '',
        pagamento: ''
        },
      })
    const { handleSubmit, reset, register, watch } = novaCompraForm

    const watchCep = watch('cep')
    const watchcidade = watch('cidade')
    const watchbairro = watch('bairro')
    const watchrua = watch('rua')
    const watchnumero = watch('numero')
    const watchuf = watch('uf')
    const watchpagamento = watch('pagamento')

    function handleFinalizaCompra(data:FormDataEndereco){
        console.log("fui submetido")
        console.log(data)
        window.location.href = "/checkout/success";

        reset()
    }
    return(
        <Container onSubmit={handleSubmit(handleFinalizaCompra)}>
         <FormProvider {...novaCompraForm}> 

        <Container1>
            <h1>Complete seu pedido</h1>
            <BoxLocalization>
                <BoxLocalizationTitle>
                    <MapPinLine size={23} color={theme['yellow-800']}/>
                    <div>
                        <h2>Endereço de entrega</h2>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </div>
                </BoxLocalizationTitle>
                <ContextLocalizationBase type="text" id="cep" placeholder="CEP" required {...register('cep')}/>
                <ContextLocalizationRua type="text" id="rua" placeholder="Rua" required  {...register('rua')}/>
                <ContextLocalizationBase type="text" id="numero" placeholder="Numero"required {...register('numero')}/>
                <ContextLocalizationComplemento type="text" id="complemento" placeholder="Complemento" {...register('complemento')}/>
                <ContextLocalizationBase type="text" id="bairro" placeholder="Bairro" required {...register('bairro')}/>
                <ContextLocalizationCidede type="text" id="cidade" placeholder="Cidade" required {...register('cidade')}/>
                <ContextLocalizationUf type="text" id="uf" placeholder="UF" required {...register('uf')}/>
            </BoxLocalization>

            <BoxPaing>
                <BoxPaingTitle>
                    <CurrencyDollar size={23}  color={theme['purple-500']} />
                    <div>
                        <h2>Pagamento</h2>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    </div>
                </BoxPaingTitle>

                <RadioAction>
                    <RadioInput type="radio" name='formaPagamento' id="1" value="cartão credito" {...register('pagamento')} required/>
                    <RadioLabel>
                        {/* <CreditCard size={18} color={theme['purple-500']} /> */}
                        CARTÃO DE CRÉDITO
                    </RadioLabel>
                    
                </RadioAction>
                    
                <RadioAction>
                    <RadioInput type="radio" name='formaPagamento' id="2" value="cartão debito" {...register('pagamento')}/>
                    <RadioLabel>
                        {/* <Bank size={18} color={theme['purple-500']} /> */}
                        CARTÃO DE DÉBITO
                    </RadioLabel>
                </RadioAction>
                    
                <RadioAction>
                    <RadioInput type="radio" name='formaPagamento' id="3" value="dinheiro" {...register('pagamento')}/>
                    
                    <RadioLabel>
                        {/* <Money size={18} color={theme['purple-500']} /> */}
                        DINHEIRO
                    </RadioLabel>
                </RadioAction>

            </BoxPaing>
        

        </Container1>
        </FormProvider>  
        <Container2>
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
                                    <input type="number"
                                    value={coffee.totalQuantity}
                                    min={1}
                                    placeholder={String(coffee.totalQuantity)}
                                    onChange={(e) => addCoffe(coffeeInfo.id, parseFloat(e.target.value) )}></input>
                                    
                                    <button 
                                    onClick={(event) => handleRemoveCoffe(coffeeInfo.id, event)}
                                    >
                                         <Trash size={20} color={theme['purple-500']}/>
                                        
                                        REMOVER
                                    </button>
                                </CoffeRemove>
                            </CoffeQuantidade>
                        </CoffeInfo>
                    <strong>R${(coffee.totalQuantity * coffeeInfo.price).toFixed(2)}</strong>
                        
                </CoffeInfoBox>
                )
            }
        })}

            {/* informaçao final da compra */}
            <CoffePrices>    
                <label htmlFor="">Total de itens</label>
                <span>{coffeShoop.totalNumberCoffe}</span>
            </CoffePrices>
            <CoffePrices>
                <label htmlFor="">Entrega</label>
                <span>R$ {valorEntrega}</span>
            </CoffePrices>
            <CoffePrices>
                <strong>Total</strong>
                <strong>R$ {(coffeShoop.tatolPrice + parseFloat(valorEntrega))}</strong>

            </CoffePrices>
            
            <ButtonSubmit disabled={!watchCep && !watchbairro && !watchrua && !watchnumero && !watchuf && !watchpagamento && !watchcidade} type="submit">
                CONFIRMAR PEDIDO
            </ButtonSubmit>

        </PainContainer>

        </Container2>
        </Container>

        
    )
}