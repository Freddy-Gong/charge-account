import React, { useState } from 'react'
import Icon from "components/icon"
import Wrapper from './NumberPadSection/Wrapper'

type Props = {
    value: number,
    onChange: (value: number) => void
    onOk: () => void
}

const NumberPadSection: React.FC<Props> = (props) => {
    const [result, _setResult] = useState(props.value.toString())
    const [Operator, setOperator] = useState<boolean>(false)
    const [doc, setDoc] = useState<boolean>(true)
    const setResult = (result: string) => {
        let newResult: string
        if (result.length > 16) {
            newResult = result.slice(0, 16)
        } else if (result.length === 0) {
            newResult = '0'
        } else {
            newResult = result
        }
        _setResult(newResult)
        props.onChange(parseFloat(newResult))
    }
    const deleteButton = () => {
        if (result.length === 1) {
            setResult('0')
        } else {
            setResult(result.slice(0, -1))
        }
    }
    const calculate = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent
        const evil = (fn: string) => {
            let Fn = Function;  //一个变量指向Function，防止有些前端编译工具报错
            return new Fn("return " + fn)();
        }
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
                setDoc(true)
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
                let equation1 = result.replace(new RegExp('x', 'g'), '*').replace(new RegExp('÷', 'g'), '/')
                setResult(parseFloat(evil(equation1).toFixed(9)).toString())
                break
            case 'OK':
                // let equation2 = result.replace(new RegExp('x', 'g'), '*').replace(new RegExp('÷', 'g'), '/')
                // setResult(parseFloat(eval(equation2).toFixed(9)).toString())
                // let value = parseFloat(result)
                // props.onChange(value)
                props.onOk()
                setResult('0')
                break
        }
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