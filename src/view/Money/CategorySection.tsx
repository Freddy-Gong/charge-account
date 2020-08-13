import styled from 'styled-components'
import React, { useState } from 'react'

const Wrapper = styled.section`
    > ul {
        display:flex;
        > li {
            font-family: Helvetica;
            font-weight: normal;
            color: #999;
            margin: 0 16px;
            border-radius:37px;
            display:flex;
            justify-content:center;
            width:50%;
            padding:16px 0px;
            position:relative;
            background: linear-gradient(135deg,rgba(230,230,230,1) 0%,rgba(246,246,246,1) 100%);
            box-shadow: -4px -4px 10px -8px rgba(255,255,255,1), 4px 4px 10px -8px rgba(0, 0, 0, .3);
            &.selected{
                box-shadow: -4px -4px 10px -8px rgba(255,255,255,1) inset, 4px 4px 10px -8px rgba(0, 0, 0, .3) inset;
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
                        onClick={() => { props.onChange(c) }} key={c}
                    >{categoryMap[c]}</li>
                )}
            </ul>
        </Wrapper >
    )
}

export default CategorySection