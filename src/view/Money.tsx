import React from 'react'
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
    return (
        <MyLayout>
            <TagSection />
            <NotesSection />
            <CategorySection />
            <NumberPadSection />
        </MyLayout>
    )
}

export default Money