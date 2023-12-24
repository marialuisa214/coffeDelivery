import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 32px 0;

`
export const HeaderInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    gap: 0.5rem;
 
`
export const Local = styled.div`
    display: flex;
    align-items: center;
    gap: 0.1rem;
    margin: 0 1px;
    padding: 0.5rem;

    background-color: ${(props) => props.theme['purple-100']};
    border-radius: 4px;
    input {
        max-width: 130px;
        background-color: transparent;
        border: none;
        color: ${(props) => props.theme['purple-500']};

        &:focus { 
            border: none;
        }
    }
`
export const HeaderButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border: none;
    position:relative;
`

export const HeaderInfoCompra = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 15px;
    height: 15px;
    border: none;
    border-radius: 15px;

    position:absolute;
    right:0; 
    top:0;
    

    background-color: ${(props) => props.theme['yellow-800']};
    color: ${(props) => props.theme['white-100']};
    font-size: 0.6rem;
    cursor: pointer;
    
`

export const HeaderButtonCompra = styled.label`
    padding: 0.4rem;
    border: none;
    border-radius: 4px;
    background-color: ${(props) => props.theme['yellow-100']};
    cursor: pointer;
`


