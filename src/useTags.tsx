import { useState } from 'react'
const useTags = () => { // 封装一个自定义Hook
    const [tags, setTags] = useState<{ id: number, name: string }[]>([
        { id: 1, name: '衣' }, { id: 2, name: '食' }, { id: 3, name: '住' }, { id: 4, name: '行' }])
    return {
        tags,
        setTags
    }
}

export { useTags }

// 改tag
// 1:衣 => 1:衣服
// 因为名字时会变的，所以不能根据名字来记录钱，要给它一个id来记录钱