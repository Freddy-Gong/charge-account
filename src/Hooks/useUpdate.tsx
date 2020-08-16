import React, { useRef, useEffect } from 'react'

const useUpdate = (fn: () => void, deps: any[]) => {
    const count = useRef(0)
    useEffect(() => {
        count.current += 1
        console.log(count.current)
    })
    useEffect(() => {
        if (count.current > 1) {
            fn()
        }
    }, deps)
}

export { useUpdate }
