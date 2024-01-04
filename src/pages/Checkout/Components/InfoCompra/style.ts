import styled from "styled-components";

export const Container = styled.form`
  display: grid;
  grid-template-columns: auto 35%;
  gap: 30px;
`

export const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  gap:10px;
   h1{
    font-size: 1.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme['gray-500']};
    font-family: 'Baloo 2', sans-serif;
   }
  `

export const Container2 = styled.div`
  display: flex;
    flex-direction: column;
    gap: 10px;
    h2{
        font-size: 1.5rem;
        color: ${(props) => props.theme['gray-800']};
        font-family: 'Baloo 2', sans-serif;
        margin-left: 0.2rem ;
    }
  `

export const BoxLocalization = styled.div`
  display: grid;
  grid-template-columns: repeat(19, 1fr);
  gap: 1rem;
  background-color: ${({ theme }) => theme['white-200']};
  padding: 30px;
  border-radius: 6px;

  input {
    border: none;
    border-radius: 4px;
    padding: 10px;
    background-color: ${({ theme }) => theme['white-400']};
    border: 1px solid ${({ theme }) => theme['gray-100']};
  }
  
  `

export const BoxLocalizationTitle = styled.div` 
    grid-column-start: 1;
    grid-column-end: 20;
    display: flex;
    flex-direction: row;
    gap: 6px;
    align-items: start;

    h2 {
        font-size: 1.2rem;
        font-weight: 500;
        color: ${({ theme }) => theme['gray-500']};
    }
`

export const ContextLocalizationBase = styled.input`
    grid-column-start: 1;
    grid-column-end: 8;
`
export const ContextLocalizationRua = styled.input`
    grid-column-start: 1;
    grid-column-end: 20;
`
export const ContextLocalizationComplemento = styled.input`
    grid-column-start: 8;
    grid-column-end: 16;
`
export const ContextLocalizationCidede = styled.input`
    grid-column-start:8;
    grid-column-end: 18;
`

export const ContextLocalizationUf = styled.input`
    grid-column-start:18;
    grid-column-end: 20;
`


export const BoxPaing = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  background-color: ${({ theme }) => theme['white-200']};
  padding: 30px;
  border-radius: 6px;

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 10px;

    border: none;
    border-radius: 4px;
    color: ${({ theme }) => theme['gray-500']};
    background-color: ${({ theme }) => theme['white-400']};

    &:hover {
      background-color: ${({ theme }) => theme['purple-100']};
    };

    &:checked{
      background-color: ${({ theme }) => theme['purple-500']};
    }

  }
  
`
export const BoxPaingTitle = styled.div`
    grid-column-start: 1;
    grid-column-end: 4;
    display: flex;
    flex-direction: row;
    gap: 6px;
    align-items: start;

    h2 {
        font-size: 1.2rem;
        font-weight: 500;
        color: ${({ theme }) => theme['gray-400']};
    }
`

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

export const RadioAction = styled.div`
  float: left;
  margin: 0 5px 0 0;
  width: 100px;
  height: 40px;
  position: relative;

    label, input {
      display: block;
      position: absolute;
      top: 0; 
      left: 0;
      right: 0;
      bottom: 0;

    }

`;

export const RadioInput = styled.input`
    opacity: 0.011;
    z-index: 100;

    &:checked + label {
      background: #20b8be;
      border-radius: 4px;
    }
`;

export const RadioLabel = styled.label`
  cursor: pointer;
  z-index: 90;
  line-height: 1.8em;
`;