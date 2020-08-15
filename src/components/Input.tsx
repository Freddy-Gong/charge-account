import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
    display:flex;
    color:#999;
    align-items:center;
    font-size: 16px;
    font-family: Helvetica;
    font-weight: normal;
    > span {
        white-space:nowrap;
        margin-right:16px;
    }
    > input {
        display:block;
        width:100%;
        height:100%;
        border:none;
        background: linear-gradient(135deg,rgba(230,230,230,1) 0%,rgba(246,246,246,1) 100%);
        font-size: 16px;
        font-family: Helvetica;
        font-weight: normal;
        color:#999;
    }
`

type Props = {
    label: string;
} & React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = (props) => {
    const { label, children, ...rest } = props
    return (
        <Label>
            <span>{label}</span>
            <input {...rest} />
        </Label>
    )

}
export { Input }