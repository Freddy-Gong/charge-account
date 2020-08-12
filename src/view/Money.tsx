import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import Icon from "../components/icon";
import TagSection from './Money/TagSection'
import NotesSection from './Money/NotesSection'
import CategorySection from './Money/CategorySection'
import NumberPadSection from './Money/NumberPadSection'

const MyLayout = styled(Layout)`
    display:flex;
    flex-direction:column
`

function Money() {
    return (
        <MyLayout>
            <TagSection />
            <NotesSection />
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