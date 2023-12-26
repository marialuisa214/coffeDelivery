import styled from "styled-components";

export const ContextListCoffe = styled.div`
    display: flex;
    flex-direction: column;
    
    gap: 1rem;
    margin-top: 100px;
    max-width: 100%;

    h2 {
        font-size: 1.8rem;
        color: ${(props) => props.theme['gray-800']};
        font-family: 'Baloo 2', sans-serif;
   
    }
`

export const ListCoffee = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 2%;
    margin-top:20px;
`

export const CoffeCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 20px;
    

    background-color: ${(props) => props.theme['white-300']};
    padding: 1rem;

    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;

    img {
        margin-top: -40px;
    }

    label {
        background-color: ${(props) => props.theme['yellow-100']};
        margin: 0 0.2rem;
        color: ${(props) => props.theme['yellow-800']};
        padding: 0.2rem;
        border-radius: 10px;
    }

    span{
        font-size: 0.8rem;
        text-align: center;
        color: ${(props) => props.theme['gray-200']};
        font-family: 'Roboto', sans-serif;     
    }
`

export const CoffeShopping = styled.div`
    display: flex;
    flex-direction: row;
    /* width: 100%; */
    align-items: center;
    justify-content: space-between;
    gap: 0.2rem;


    p {
        font-size: 0.8rem;
        color: ${(props) => props.theme['gray-300']};
        font-family: 'Baloo 2', sans-serif;
    }
    span {
        font-size: 1.5rem;
        color: ${(props) => props.theme['gray-500']};
        font-family: 'Baloo 2', sans-serif;

        margin-left: 0.2rem ;
    }

    input{
        width: 5rem;
        height: 2rem;
        border: none;
        padding: 0.2rem;
        background-color: ${(props) => props.theme['white-400']};
    }

    button {
        background-color: ${(props) => props.theme['purple-500']};
        color: ${(props) => props.theme['white-300']};
        border: none;
        padding: 0.3rem;
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 4px;
    } 
`
         

    
