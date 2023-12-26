import styled from "styled-components";

export const IntroDivPrincipal = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 70px;
    gap: 2rem`

export const IntroDivText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 0.5rem;
    max-height: 100%;
    justify-content: space-between;
`
export const IntroTitulo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;


    h1 {
        font-size: 2.5rem;
        color: ${(props) => props.theme['gray-800']};
        font-family: 'Baloo 2', sans-serif;

    }
    p {
        font-size: 1.2rem;
        color: ${(props) => props.theme['gray-700']};
        font-family: 'Roboto', sans-serif;
        margin-top: 0.8rem;
    }
`

const STATUS_COLOR = {
  purple: 'purple-500',
  yellow: 'yellow-500',
  yellowDark: 'yellow-800',
  gray: 'gray-500',

} as const
interface StatusProps {
  statusColor: keyof typeof STATUS_COLOR // todas as chaves do objeto COLOR
}

export const IconBackgroud = styled.div<StatusProps>`
    padding: 10px;
    border-radius: 999px;
    justify-content: center;
    align-items: center;
    
    background-color: ${(props) =>
      props.theme[STATUS_COLOR[props.statusColor]]};

    width: 40px;
    height: 40px;
    border: none;
    border-radius: 40px;


`
export const IntroGridContext = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    height: 40%;

    grid-template-columns: 1fr 1fr;
    grid-row-gap: 20px; 
    
    > div {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`