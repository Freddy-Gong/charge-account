import styled from 'styled-components'
import React, { useState } from 'react'
import Icon from "components/icon"

const Wrapper = styled.section`

    .calculator{
        .result{
            grid-area: result;
            text-align: right;
            line-height: 74px;
            font-size: 48px;
            font-family: Helvetica;
            padding: 0 20px;
            color: #666;
        }
        .number-1{
            grid-area:number-1;
        }
        .number-2{
            grid-area:number-2;
        }
        .number-3{
            grid-area:number-3;
        }
        .number-4{
            grid-area:number-4;
        }
        .number-4{
            grid-area:number-4;
        }
        .number-5{
            grid-area:number-5;
        }
        .number-6{
            grid-area:number-6;
        }
        .number-7{
            grid-area:number-7;
        }
        .number-8{
            grid-area:number-8;
        }
        .number-9{
            grid-area:number-9;
        }
        .number-0{
            grid-area:number-0;
        }
        .delete{
            grid-area:delete;
        }
        .add{
            grid-area:add;
        }
        .ac{
            grid-area:ac;
        }
        .divide{
            grid-area:divide;
        }
        .multiply{
            grid-area:multiply;
        }
        .OK{
            grid-area:OK;
        }
        .dot{
            grid-area:dot;
        }
        .equal{
            grid-area:equal;
        }
        .subtract{
            grid-area:subtract;
        }
        display:grid;
        grid-template-areas: 
        "result result result result result"
        "number-7 number-8 number-9 divide ac"
        "number-4 number-5 number-6 multiply delete"
        "number-3 number-2 number-1 subtract OK"
        "number-0 dot equal add  OK";
        grid-template-columns:repeat(5,20%);
        grid-template-rows:repeat(5,74px);
        box-shadow: -8px -8px 16px -10px rgba(255,255,255,1),8px 8px 16px -10px rgba(0, 0, 0, .15);
        > button {
            margin: 8px;
            padding: 0;
            border: 0;
            display: block;
            outline: none;
            border-radius: 37px;
            font-size: 24px;
            font-family: Helvetica;
            font-weight: normal;
            color: #999;
            background: linear-gradient(135deg,rgba(230,230,230,1) 0%,rgba(246,246,246,1) 100%);
            box-shadow: -4px -4px 10px -8px rgba(255,255,255,1), 4px 4px 10px -8px rgba(0, 0, 0, .3);
            &:active{
                box-shadow: -4px -4px 10px -8px rgba(255,255,255,1) inset, 4px 4px 10px -8px rgba(0, 0, 0, .3) inset;
            }
        }        
    }   
`

const NumberPadSection: React.FC = () => {
    const [result, setResult] = useState<string>('0')
    const [Operator, setOperator] = useState<boolean>(false)
    const [doc, setDoc] = useState<boolean>(true)
    const deleteButton = () => {
        if (result.length === 1) {
            setResult('0')
        } else {
            setResult(result.slice(0, -1))
        }
    }
    const calculate = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent
        if (text === null) { return }
        switch (text) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if (result === '0') {
                    setResult(text)
                } else {
                    setResult(result + text)
                }
                setOperator(true)
                break
            case 'AC':
                setResult('0')
                break
            case '.':
                if (doc === true) {
                    setResult(result + text)
                    setDoc(false)
                    setOperator(false)
                }
                break
            case '+':
            case '-':
            case 'x':
            case '÷':
                if (Operator === true) {
                    setResult(result + text)
                }
                setOperator(false)
                setDoc(true)
                break
            case '=':
                let equation = result.replace(new RegExp('x', 'g'), '*').replace(new RegExp('÷', 'g'), '/')
                setResult(parseFloat(eval(equation).toFixed(9)).toString())
        }
        // if (result === '0' && !(['+', '-', 'x', '÷'].indexOf(character) > -1)) {
        //     if (character === '.') {
        //         setResult(result + character)
        //     } else {
        //         setResult(character)
        //     }
        // }
    }
    return (
        <Wrapper>
            <div className="calculator" onClick={calculate}>
                <div className="result">{result}</div>
                <button className="number-1" >1</button>
                <button className="number-2" >2</button>
                <button className="number-3" >3</button>
                <button className="add" >+</button>
                <button className="delete" onClick={deleteButton}><Icon name="delete" /></button>
                <button className="number-4" >4</button>
                <button className="number-5" >5</button>
                <button className="number-6" >6</button>
                <button className="subtract" >-</button>
                <button className="ac" >AC</button>
                <button className="number-7" >7</button>
                <button className="number-8" >8</button>
                <button className="number-9" >9</button>
                <button className="multiply" >x</button>
                <button className="OK">OK</button>
                <button className="number-0" >0</button>
                <button className="dot" >.</button>
                <button className="equal">=</button>
                <button className="divide" >÷</button>
            </div>
        </Wrapper>
    )
}
export default NumberPadSection