import styled from 'styled-components'
import React, { useState } from 'react'

const Wrapper = styled.section`
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

type Props = {
    value: '-' | '+',
    onChange: (value: '-' | '+') => void
}

const CategorySection: React.FC<Props> = (props) => {
    const [categoryList] = useState<('-' | '+')[]>(['-', '+'])
    const category = props.value
    const categoryMap = { '-': '支出', '+': '收入' }
    return (
        <Wrapper>
            <ul>
                {categoryList.map(c =>
                    <li className={category === c ? 'selected' : ''}
                        onClick={() => props.onChange(c)} key={c}
                    >{categoryMap[c]}</li>
                )}
            </ul>
        </Wrapper>
    )
}

export default CategorySection