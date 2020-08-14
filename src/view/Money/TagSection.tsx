import styled from 'styled-components'
import React, { useState } from 'react'
import { useTags } from 'useTags'


const Wrapper = styled.section`
    flex-grow:1;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:flex-start;
    > ul {
        margin-left:5px;
        display:flex;
        > li {
            font-family: Helvetica;
            font-weight: normal;
            color: #999;
            padding:3px 0px;
            display:flex;
            justify-content:center;
            align-items:center;
            min-width:3em;
            background: linear-gradient(135deg,rgba(230,230,230,1) 0%,rgba(246,246,246,1) 100%);
            box-shadow: -4px -4px 10px -8px rgba(255,255,255,1), 4px 4px 10px -8px rgba(0, 0, 0, .3);
            margin:3px 12px;
            border-radius:12px;
            &.selected{
                box-shadow: -4px -4px 10px -8px rgba(255,255,255,1) inset, 4px 4px 10px -8px rgba(0, 0, 0, .3) inset;
            }
        }
    }
    > button {
        color:grey;
        background:none;
        border:none;
        border-bottom:1px solid grey;
        padding:0px 2px;
        margin:10px 0px;
        margin-left:16px;
    }
`

type Props = { value: string[]; onChange: (value: string[]) => void }
//类型参数
const TagSection: React.FC<Props> = (props) => {
    const { tags, setTags } = useTags()
    const selectedTags = props.value
    const AddTag = () => {
        const tagName = window.prompt('新标签的名称为')
        if (tagName !== null) {
            setTags([...tags, tagName])
        }
    }
    const onToggleTags = (tag: string) => {
        if (selectedTags.indexOf(tag) >= 0) {
            props.onChange(selectedTags.filter(t => t !== tag))
            //如果tag已经被选中，就复制所有没有被选中的tag到一个新的array里，作为新的selectedTags
        } else {
            props.onChange([...selectedTags, tag])
        }
    }
    const getClassName = (tag: string) => selectedTags.indexOf(tag) >= 0 ? 'selected' : ''
    return (
        <Wrapper>
            <ul>
                {tags.map(tag =>
                    <li onClick={() => onToggleTags(tag)} key={tag}
                        className={getClassName(tag)}>{tag}</li>//注意onClick和className两个函数的方式
                )}
            </ul>
            <button onClick={AddTag}>新增标签</button>
        </Wrapper>
    )
}

export default TagSection