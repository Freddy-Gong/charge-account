import { useState } from 'react'
import { createId } from './lib/createId'

const defaultTags =
    [
        { id: createId(), name: '衣' }, { id: createId(), name: '食' }, { id: createId(), name: '住' }, { id: createId(), name: '行' }]
const useTags = () => { // 封装一个自定义Hook
    const [tags, setTags] = useState<{ id: number, name: string }[]>(defaultTags)
    const findTag = (id: number) => tags.filter(tag => tag.id === id)[0]
    const findTagIndex = (id: number) => {
        let result = -1
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].id === id) {
                result = i
                break
            }
        }
        return result
    }
    const updateTag = (id: number, { name }: { name: string }) => {
        setTags(tags.map(tag => tag.id === id ? { id, name } : tag))
        // //获取你要改的 tag 的下标
        // const index = findTagIndex(id)
        // //深拷贝 tags 得到tagsClone
        // const tagsClone = JSON.parse(JSON.stringify(tags))
        // //把 tagsClone 的第index删掉，替换成{id:id,name:obj.name}
        // tagsClone.splice(index, 1, { id: id, name: obj.name })
        // setTags(tagsClone)
    }
    const deleteTag = (id: number) => {
        setTags(tags.filter(tag => tag.id !== id))
        // //获取你要改的 tag 的下标
        // const index = findTagIndex(id)
        // //深拷贝 tags 得到tagsClone
        // const tagsClone = JSON.parse(JSON.stringify(tags))
        // //把 tagsClone 的第index删掉，替换成{id:id,name:obj.name}
        // tagsClone.splice(index, 1)
        // setTags(tagsClone)
    }
    return {
        tags,
        setTags,
        findTag,
        updateTag,
        findTagIndex,
        deleteTag,
    }
}

export { useTags }

// 改tag
// 1:衣 => 1:衣服
// 因为名字时会变的，所以不能根据名字来记录钱，要给它一个id来记录钱