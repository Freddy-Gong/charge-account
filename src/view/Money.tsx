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
    const [selected, setSelected] = useState({
        tags: [] as string[],
        note: '',
        category: '-' as ('-' | '+'),
        amount: 0,
    })

    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        })
    }
    return (
        <MyLayout>
            {selected.amount}
            <TagSection value={selected.tags} onChange={(tags) => onChange({ tags })} />
            <NotesSection value={selected.note} onChange={(note) => onChange({ note })} />
            <CategorySection value={selected.category} onChange={(category) => onChange({ category })} />
            <NumberPadSection value={selected.amount} onChange={(amount) => onChange({ amount })} />
        </MyLayout>
    )
}

export default Money