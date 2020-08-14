import { useState } from 'react'
import { createId } from './lib/createId'

const defaultTags =
    [
        { id: createId(), name: '衣' }, { id: createId(), name: '食' }, { id: createId(), name: '住' }, { id: createId(), name: '行' }]
const useTags = () => { // 封装一个自定义Hook
    const [tags, setTags] = useState<{ id: number, name: string }[]>(defaultTags)
    const findTag = (id: number) => tags.filter(tag => tag.id === id)[0]
    return {
        tags,
        setTags,
        findTag
    }
}

export { useTags }

// 改tag
// 1:衣 => 1:衣服
// 因为名字时会变的，所以不能根据名字来记录钱，要给它一个id来记录钱