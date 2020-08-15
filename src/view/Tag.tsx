import React from 'react'
import { useTags } from 'useTags'
import { useParams } from 'react-router-dom'
import Layout from 'components/layout'
import styled from 'styled-components'
import Icon from 'components/icon'
import { Input } from 'components/Input'

type Params = {
    id: string
}

const TopBar = styled.div`
    display:flex;
    justify-content:space-between;
    align-item:center;
    padding:16px 10px;
    font-size: 24px;
    font-family: Helvetica;
    font-weight: normal;
    color: #999;
    background: linear-gradient(135deg,rgba(230,230,230,1) 0%,rgba(246,246,246,1) 100%);
    box-shadow: -4px -4px 10px -8px rgba(255,255,255,1), 4px 4px 10px -8px rgba(0, 0, 0, .3);
    border-radius:50px
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
const Name = styled.div`
    margin:8px 0;
    padding:16px;
    font-size: 24px;
    font-family: Helvetica;
    font-weight: normal;
    color: #999;
    border-radius:20px;
    background: linear-gradient(135deg,rgba(230,230,230,1) 0%,rgba(246,246,246,1) 100%);
    box-shadow: -4px -4px 10px -8px rgba(255,255,255,1), 4px 4px 10px -8px rgba(0, 0, 0, .3);
    }
`
const Space = styled.div`
    height:32px;
`
const Center = styled.div`
    display:flex;
    justify-content:center;
    align-item:center;
`

const Tag: React.FC = () => {
    const { findTag, updateTag, deleteTag } = useTags()
    let { id: idString } = useParams<Params>()

    const tag = findTag(parseInt(idString))
    return (
        <Layout>
            <TopBar>
                <Icon name="left" />
                <span>编辑标签</span>
                <Icon name='' />
            </TopBar>
            {tag ? <div>
                <Name>
                    <Input label="标签名" value={tag.name} onChange={(e) => updateTag(tag.id, { name: e.target.value })} />
                </Name>
                <Space />
                <Center>
                    <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
                </Center>
            </div> : <Center> tag 已删除</Center>}

        </Layout>
    )
}
export default Tag