import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import Icon from "../components/icon";


const TagSection = styled.section`
    flex-grow:1;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:flex-start;
    > ul {
        margin-left:5px;
        display:flex;
        > li {
            padding:3px 0px;
            display:flex;
            justify-content:center;
            align-items:center;
            min-width:3em;
            background:grey;
            margin:3px 12px;
            border-radius:12px
        }
    }
    > button {
        color:grey;
        background:none;
        border:none;
        border-bottom:1px solid grey;
        padding:0px 2px;
        margin:10px 0px;
        margin-left:16px;
    }
`
const NotesSection = styled.section`
    background:rgb(245,244,246);
    padding:10px 16px;
    font-size:14px;
    > label {
        display:flex;
        align-items:center;
        > span {
            white-space:nowrap;
            margin-right:16px;
        }
        > input {
            display:block;
            width:100%;
            height:56px;
            border:none;
            background:rgb(245,244,246);

        }
    }
`
const CategorySection = styled.section`
    > ul {
        display:flex;
        background:rgb(196,195,197);
        > li {
            display:flex;
            justify-content:center;
            width:50%;
            padding:16px 0px;
            position:relative;
            &.selected::after{
                content:'';
                display:block;
                height:3px;
                background:black;
                position:absolute;
                bottom:0;
                width:100%;
                left:0;
            }
        }
    }
`
const NumberPadSection = styled.section`

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

const MyLayout = styled(Layout)`
    display:flex;
    flex-direction:column
`

function Money() {
    return (
        <MyLayout>
            <TagSection>
                <ul>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ul>
                <button>新增标签</button>
            </TagSection>
            <NotesSection>
                <label>
                    <span>备注</span>
                    <input type="text" placeholder="在这里添加备注" />
                </label>
            </NotesSection>
            <CategorySection>
                <ul>
                    <li className="selected">支出</li>
                    <li>收入</li>
                </ul>
            </CategorySection>
            <NumberPadSection>
                <div className="calculator">
                    <div className="result">100</div>
                    <button className="number-1">1</button>
                    <button className="number-2">2</button>
                    <button className="number-3">3</button>
                    <button className="add">+</button>
                    <button className="delete"><Icon name="delete" /></button>
                    <button className="number-4">4</button>
                    <button className="number-5">5</button>
                    <button className="number-6">6</button>
                    <button className="subtract">-</button>
                    <button className="ac">AC</button>
                    <button className="number-7">7</button>
                    <button className="number-8">8</button>
                    <button className="number-9">9</button>
                    <button className="multiply">*</button>
                    <button className="OK">OK</button>
                    <button className="number-0">0</button>
                    <button className="dot">.</button>
                    <button className="equal">=</button>
                    <button className="divide">÷</button>
                </div>
            </NumberPadSection>
        </MyLayout>
    )
}

export default Money