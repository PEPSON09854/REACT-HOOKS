import styled from 'styled-components'
import { useState } from "react"
import Carrinho from '../../image/carrinho_de_compras.png'

export function SmartCounter() {
    
    const [quantity, setQuantity] = useState(0)
    
    function zeroDown(){

        if(quantity > 0){
            setQuantity(quantity-1)
        } 

    }

  return (
    <Container>
        <Contador>{quantity}</Contador>
        <Car src={Carrinho} alt='Um carrinho de compras'/>
        <ButtonPlus onClick={()=> setQuantity(quantity+1)}>Adicionar</ButtonPlus>
        <ButtonMinus onClick={zeroDown}>Retirar</ButtonMinus> 
    </Container>
  )
}

const Contador = styled.h1`
position: absolute;
color: #C40000;
top: 60px;
left:212px;
font-size: 40px;
transition: .5s;
z-index: 1;

`
const Container = styled.div`
 position: absolute;
 display: flex;
 justify-content: center;
 align-items: center;
 
`

const Car = styled.img`
 position: relative;
 left: 43px;
 width: 50vh;
 
`
const ButtonPlus = styled.button`
 position: absolute;
 background: #09DEED;
 font-size: 20px;
 font-weight: bold;
 box-shadow: 3px 3px 1px #000;
 color: #000;
 margin-left: -50px;
 bottom: -30px;
 width: 130px;
 height: 50px;
 border: solid 1px #000a;
 border-radius: 15px;
 cursor: pointer;

 &:hover{
    background: #09deaa;
    color: #fff;
    transition: .4s;
   
 }
`
const ButtonMinus = styled(ButtonPlus)`
 left: 280px;
`

