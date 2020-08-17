import React, { useState } from 'react'
import Layout from '../components/layout'
import CategorySection from './Money/CategorySection'
import { useRecords } from 'Hooks/useRecords'
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
    return (
        <Layout>
            <CategorySection value={category} onChange={value => setCategory(value)} />
            <div>
                {records.map((r) => {
                    return <Item>
                        <div className='tags'>
                            {r.tagIds.map((tagId) => <span>{getName(tagId)}</span>)}
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
        </Layout>
    )
}

export default Statistic