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
            <TagSection value={obj.tags} onChange={(tags) => setObj({
                ...obj, tags: tags,
            })} />
            <NotesSection />
            <CategorySection />
            <NumberPadSection />
        </MyLayout>
    )
}

export default Money