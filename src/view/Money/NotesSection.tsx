import styled from 'styled-components'
import React, { ChangeEventHandler } from 'react'
import { Input } from 'components/Input'

const Wrapper = styled.section`
    background: linear-gradient(135deg,rgba(230,230,230,1) 0%,rgba(246,246,246,1) 100%);
    padding:10px 16px;
    font-size:14px;
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

type Props = {
    value: string,
    onChange: (value: string) => void
}

const NotesSection: React.FC<Props> = (props) => {

    const note = props.value
    const onBlur: ChangeEventHandler<HTMLInputElement> = (e) => {
        props.onChange(e.target.value)
    }
    return (
        <Wrapper>
            <Input label='备注' type="text" placeholder="在这里添加备注" value={note} onChange={onBlur} />
            {/* <label>
                <span>备注</span>
                <input type="text" placeholder="在这里添加备注"
                    ref={refInput}
                    defaultValue={note}
                    onBlur={onBlur}
                />
            </label> */}
        </Wrapper>
    )
}
export default NotesSection