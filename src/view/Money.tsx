import React, { useState } from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import TagSection from './Money/TagSection'
import NotesSection from './Money/NotesSection'
import CategorySection from './Money/CategorySection'
import NumberPadSection from './Money/NumberPadSection'
import { useRecords } from 'Hooks/useRecords'

const MyLayout = styled(Layout)`
    display:flex;
    flex-direction:column
`

const defaultFormDate = {
    tagIds: [] as number[],
    note: '',
    category: '-' as ('-' | '+'),
    amount: 0,

}

function Money() {
    const [selected, setSelected] = useState(defaultFormDate)

    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        })
    }
    const { records, addRecords } = useRecords()
    console.log(records)
    const submit = () => {
        addRecords(selected)
        alert('保存成功')
        setSelected(defaultFormDate)
    }
    return (
        <MyLayout>
            {JSON.stringify(selected)}
            <TagSection value={selected.tagIds} onChange={(tagIds) => onChange({ tagIds })} />
            <NotesSection value={selected.note} onChange={(note) => onChange({ note })} />
            <CategorySection value={selected.category} onChange={(category) => onChange({ category })} />
            <NumberPadSection value={selected.amount} onChange={(amount) => onChange({ amount })} onOk={submit} />
        </MyLayout>
    )
}

export default Money