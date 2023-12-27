import styled from "styled-components";

export const Context = styled.div`
display: flex;
flex-direction: column;


h2 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['yellow-800']};
    font-family: 'Baloo 2', sans-serif;
    
}
p {
    color: ${(props) => props.theme['gray-500']};
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    margin-top: 0;
}
`
export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: center;
  justify-content: center;
`

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  gap: 30px;
  padding: 30px;
  margin-top: 10px;
  border: solid 1px red;
  border-radius: 10px 30px 10px 30px;
  border-color: ${(props) => props.theme['yellow-500']};
`

const STATUS_COLOR = {
    purple: 'purple-500',
    yellow: 'yellow-500',
    yellowDark: 'yellow-800'
  
} as const
  interface StatusProps {
    statusColor: keyof typeof STATUS_COLOR // todas as chaves do objeto COLOR
  }

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  
  
`
export const InfoIcons = styled.div<StatusProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${(props) =>
props.theme[STATUS_COLOR[props.statusColor]]};
`
