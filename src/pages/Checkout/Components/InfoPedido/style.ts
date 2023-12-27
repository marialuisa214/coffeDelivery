import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    h2{
        font-size: 1.5rem;
        color: ${(props) => props.theme['gray-800']};
        font-family: 'Baloo 2', sans-serif;
        margin-left: 0.2rem ;
    }`

export const PainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${(props) => props.theme['white-200']};
    
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
    padding-right: 30px;
    padding-left: 30px;

    img {
        width: 35%;
        height: 35%;
    }
`
export const CoffeInfoBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    stroke {
        color: ${(props) => props.theme['gray-800']};
        font-size: 1.5rem;
        font-family: 'Baloo 2', sans-serif;
    }

    padding-bottom: 30px;
    padding-top: 30px;

    border-bottom: 1px solid ${(props) => props.theme['gray-100']};

    strong {
        color: ${(props) => props.theme['gray-500']};
        margin-left: 100px;
        font-family: 'Baloo 2', sans-serif;
    }
   
`

export const CoffeInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 15px; 
`

export const CoffeQuantidade = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    label {
        color: ${(props) => props.theme['gray-800']};        font-family: 'Roboto', sans-serif;
    }
`
export const CoffeRemove = styled.div`
    display: flex;
    flex-direction: row;

    input {
        width: 3rem;
        height: 2rem;
        border: none;
        border-radius: 6px;
        padding: 0.2rem;
        background-color: ${(props) => props.theme['white-400']};

        text-align: center;
        font-size: 0.8rem;

        margin-top: 5px;
        margin-right: 5px; 
    }

    button {
            display: flex;
            flex-direction: row;
    
            border: none;
            padding: 0.4rem;
            gap: 0.2rem;
            margin-top: 5px;
    
            align-items: center;
            justify-content: center;

            font-size: 0.8rem;
            color: ${(props) => props.theme['gray-500']};
            background-color: ${(props) => props.theme['white-400']}; 
    }
`

export const CoffePrices = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    margin: 6px 0;

    label {
        color: ${(props) => props.theme['gray-700']};
        font-family: 'Roboto', sans-serif;
    }

    span {
        color: ${(props) => props.theme['gray-700']};
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
    }

    strong {
        color: ${(props) => props.theme['gray-800']};
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
    }
`

export const ButtonSubmit = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: none;
    border-radius: 5px;

    margin: 30px 0;

    
    background-color: ${(props) => props.theme['yellow-500']};
    color: ${(props) => props.theme['white']};
    
`
