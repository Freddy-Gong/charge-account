import React from 'react'
import Layout from '../components/layout'
import { useTags } from 'useTags'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Icon from 'components/icon'

const Wrapper = styled.ol`
    > li {
        font-size: 24px;
        font-family: Helvetica;
        font-weight: normal;
        color: #999;
        margin:10px 0px;
        background: linear-gradient(135deg,rgba(230,230,230,1) 0%,rgba(246,246,246,1) 100%);
        box-shadow: -4px -4px 10px -8px rgba(255,255,255,1), 4px 4px 10px -8px rgba(0, 0, 0, .3);
        border-radius:10px;
        > a {
            padding:12px 16px;
            display:flex;
            justify-content:space-between;
            align-item:center;
        }
    }
`

const Button = styled.button`
    margin: 0 100px;
    font-size: 24px;
    font-family: Helvetica;
    font-weight: normal;
    color: #999;
    border-radius:20px;
    padding:10px 16px;
    border:none;
    background: linear-gradient(135deg,rgba(230,230,230,1) 0%,rgba(246,246,246,1) 100%);
    box-shadow: -4px -4px 10px -8px rgba(255,255,255,1), 4px 4px 10px -8px rgba(0, 0, 0, .3);
`
const Center = styled.div`
    display:flex;
    justify-content:center;
    align-item:center;
    flex-direction:column;
`
const Space = styled.div`
    height:32px;
`

function Tags() {
    const { tags } = useTags()
    return (<Layout>
        <Wrapper>
            {tags.map((tag) => <li key={tag.id}>
                <Link to={'/tags/' + tag}>
                    <span className="oneLine">{tag.name} </span><Icon name="right" />
                </Link>
            </li>)}
        </Wrapper>
        <Center>
            <Space />
            <Space />
            <Button >新增标签</Button>
        </Center>
    </Layout>
    )
}

export default Tags