import styled from "styled-components";

export const Container = styled.div`
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

export const BoxLocalization = styled.div`
  display: grid;
  grid-template-columns: repeat(19, 1fr);
  gap: 1rem;
  background-color: ${({ theme }) => theme['white-300']};
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