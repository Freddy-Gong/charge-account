import styled from 'styled-components'
import React, { useState, useRef } from 'react'

const Wrapper = styled.section`
    background:rgb(245,244,246);
    padding:10px 16px;
    font-size:14px;
    > label {
        display:flex;
        align-items:center;
        > span {
            white-space:nowrap;
            margin-right:16px;
        }
        > input {
            display:block;
            width:100%;
            height:56px;
            border:none;
            background:rgb(245,244,246);

        }
    }
`

//受控组件
// const NotesSection: React.FC = () => {
//     const [note, setNote] = useState('')
//     console.log(note)
//     return (
//         <Wrapper>
//             <label>
//                 <span>备注</span>
//                 <input type="text" placeholder="在这里添加备注"
//                     value={note}
//                     onChange={(e) => { setNote(e.target.value) }}
//                 />
//             </label>
//         </Wrapper>
//     )
// }

//非受控组件
const NotesSection: React.FC = () => {
    const [note, setNote] = useState('')
    const refInput = useRef<HTMLInputElement>(null)
    const onBlur = () => {
        if (refInput.current !== null) {
            setNote(refInput.current.value)
        }
    }
    return (
        <Wrapper>
            <label>
                <span>备注</span>
                <input type="text" placeholder="在这里添加备注"
                    ref={refInput}
                    defaultValue={note}
                    onBlur={onBlur}
                />
            </label>
        </Wrapper>
    )
}
export default NotesSection