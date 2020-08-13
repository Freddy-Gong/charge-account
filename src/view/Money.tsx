import React, { useState } from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import TagSection from './Money/TagSection'
import NotesSection from './Money/NotesSection'
import CategorySection from './Money/CategorySection'
import NumberPadSection from './Money/NumberPadSection'

const MyLayout = styled(Layout)`
    display:flex;
    flex-direction:column
`

function Money() {
    const [obj, setObj] = useState({
        tags: [] as string[],
        note: '',
        category: '-' as ('-' | '+'),
        amount: 0,
    })
    return (
        <MyLayout>
            {obj.amount}
            <TagSection value={obj.tags} onChange={(tags) => setObj({
                ...obj, tags: tags,
            })} />
            <NotesSection value={obj.note} onChange={(note) => {
                setObj({
                    ...obj,
                    note: note
                })
            }} />
            <CategorySection value={obj.category} onChange={(category) => setObj({
                ...obj,
                category: category
            })} />
            <NumberPadSection value={obj.amount} onChange={(amount) => setObj({
                ...obj,
                amount: amount
            })} />
        </MyLayout>
    )
}

export default Money