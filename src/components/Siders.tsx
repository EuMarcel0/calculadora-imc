import React, { useState } from "react";
import { levels, calculateImc, Level} from '../helpers/imc'
import { GridItem } from "./GridItem/GridItem";
import leftArrow from '../assets/images/leftarrow.png';
import * as C from '../styled'

export const Siders = () => {
    const [personHight, setPersonHight] = useState<number>(0);
    const [personWeight, setPersonWeight] = useState<number>(0);
    const [toShow, setToShow] = useState<Level | null>(null) 

    const handleInputHight = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPersonHight(parseFloat(event.target.value));
    }
    const handleInputWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPersonWeight(parseFloat(event.target.value));
    }

    const handleCalculateButton = () => {
        if(personHight && personWeight){
            setToShow(calculateImc(personHight, personWeight));
        }else{
            alert('Por favor, preencha todos os campos')
        }
    }

    const handleArrowBack = () => {
        setToShow(null)
        setPersonHight(0)
        setPersonWeight(0)
    }


    return(
        <>
            <div className="leftSide">
                <h1>Calcule o seu IMC.</h1>
                <p>Criado no século 19 pelo matemático Lambert Quételet, o Índice de Massa Corporal, conhecido pela sigla IMC, é um cálculo simples que permite medir se alguém está ou não com o peso ideal. Ele aponta se o peso está adequado ou se está abaixo ou acima do peso.</p>
                <input
                    type='number'
                    value={personHight > 0? personHight : ''}
                    onChange={handleInputHight}
                    placeholder='Digite a sua altura. Ex: 1.5 (em metros)'
                    disabled={toShow? true : false}
                /> 
                <input 
                    type="number" 
                    value={personWeight > 0? personWeight : ''}
                    onChange={handleInputWeight}
                    placeholder='Digite seu peso'
                    disabled={toShow? true : false}
                />
                <button onClick={handleCalculateButton}  disabled={toShow? true : false}>Calcular</button>
                
            </div>
            <C.RightArea>
                <div className="rightSide">
                    {!toShow &&
                        <div className="gridArea">
                            {levels.map((item, key) =>(
                                < GridItem key={key} item={item}/>
                            ))}
                        </div>
                    }
                    {toShow &&
                        <div className="rightBig">
                            <div className="leftArrow" onClick={handleArrowBack}>
                                <img src={leftArrow} alt="" />
                            </div>
                            <GridItem item={toShow}/>
                        </div>
                    }
                </div>
            </C.RightArea>
            <C.Footer>
                <div className="footerArea">
                    ©Desenvolvido por Marcelo Silva - Aula ReactJS - B7Web. Todos os direitos reservadors.
                </div>
            </C.Footer>
        </>
        
    );
}