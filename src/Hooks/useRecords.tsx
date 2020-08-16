import { useState, useEffect } from "react"
import { useUpdate } from "./useUpdate"

type Records = {
    tagIds: number[]
    note: string
    category: '+' | '-'
    amount: number
    createdAt: string, // ISO 8601
}
type newRecords = Omit<Records, 'createdAt'>

const useRecords = () => {
    const [records, setRecords] = useState<Records[]>([])
    useEffect(() => {
        setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
    }, [])
    const addRecords = (newRecord: newRecords) => {
        const record = { ...newRecord, createdAt: (new Date()).toISOString() }
        setRecords([...records, record])
    }
    useUpdate(() => {
        window.localStorage.setItem('records', JSON.stringify(records))
    }, [records])
    return {
        records,
        addRecords
    }
}
export { useRecords }