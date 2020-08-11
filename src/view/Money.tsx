import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

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
    display:flex;
    flex-direction:column;
    > .output{
        font-size:36px;
        line-height:72px;
        text-align:right;
        padding:0 16px;
    }
    > .pad{
        > button{
            float:left;
            width:20%;
            height:64px;
            &.OK{
                height:128px;
                float:right;
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
                <div className="output">100</div>
                <div className="pad">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>+</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>-</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>*</button>
                    <button className="OK">OK</button>
                    <button>0</button>
                    <button>.</button>
                    <button>=</button>
                    <button>÷</button>
                </div>
            </NumberPadSection>
        </MyLayout>
    )
}

export default Money