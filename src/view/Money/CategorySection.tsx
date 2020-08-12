import styled from 'styled-components'

const CategorySection = styled.section`
    > ul {
        display:flex;
        background:rgb(196,195,197);
        > li {
            display:flex;
            justify-content:center;
            width:50%;
            padding:16px 0px;
            position:relative;
            &.selected::after{
                content:'';
                display:block;
                height:3px;
                background:black;
                position:absolute;
                bottom:0;
                width:100%;
                left:0;
            }
        }
    }
`
export default CategorySection