import styled from 'styled-components'

const NotesSection = styled.section`
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

export default NotesSection