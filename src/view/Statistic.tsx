import React, { useState, ReactNode } from 'react'
import Layout from '../components/layout'
import CategorySection from './Money/CategorySection'
import { useRecords, Records } from 'Hooks/useRecords'
import { useTags } from 'useTags'
import day from 'dayjs'
import styled from 'styled-components'

const Item = styled.div`
    display:flex;
    justify-content:space-between;
    font-size: 24px;
    font-family: Helvetica;
    font-weight: normal;
    color: #999;
    padding:10px 16px;
    > .note{
        margin-right:auto;
        margin-left:16px;
    }
`
function Statistic() {
    const [category, setCategory] = useState<'-' | '+'>('-')
    const { records } = useRecords()
    const { getName } = useTags()
    const hash: { [key: string]: Records[] } = {}
    const selectedRecords = records.filter(r => r.category === category)

    selectedRecords.forEach(r => {
        const key = day(r.createdAt).format('YYYY-MM-DD')
        if (!(key in hash)) {
            hash[key] = []
        }
        hash[key].push(r)
    })
    const array = Object.entries(hash).sort((a, b) => {
        if (a[0] === b[0]) return 0
        if (a[0] > b[0]) return -1
        if (a[0] < b[0]) return 1
        return 0
    })
    return (
        <Layout>
            <CategorySection value={category} onChange={value => setCategory(value)} />

            {array.map(([date, records]) => <div key={Math.random()} >
                <h3>{date}</h3>
                <div>
                    {records.map((r) => {
                        return <Item key={r.createdAt}>
                            <div className='tags oneLine'>
                                {r.tagIds.map((tagId) => <span key={tagId}>{getName(tagId)}</span>)
                                    .reduce((result, span, index, array) =>
                                        result.concat(index < array.length - 1 ? [span, ','] : [span]), [] as ReactNode[])
                                }
                            </div>
                            {r.note && <div className='note'>
                                {r.note}
                            </div>}
                            <div className="account">
                                ￥{r.amount}
                            </div>
                            {/* {day(r.createdAt).format('YYYY年MM月DD日')} */}
                        </Item>
                    })}
                </div>
            </div>)}
        </Layout>
    )
}

export default Statistic