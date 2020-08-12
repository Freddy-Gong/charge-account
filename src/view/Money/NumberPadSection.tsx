import styled from 'styled-components'

const NumberPadSection = styled.section`

    .calculator{
        .result{
            grid-area: result;
            text-align: right;
            line-height: 74px;
            font-size: 48px;
            font-family: Helvetica;
            padding: 0 20px;
            color: #666;
        }
        .number-1{
            grid-area:number-1;
        }
        .number-2{
            grid-area:number-2;
        }
        .number-3{
            grid-area:number-3;
        }
        .number-4{
            grid-area:number-4;
        }
        .number-4{
            grid-area:number-4;
        }
        .number-5{
            grid-area:number-5;
        }
        .number-6{
            grid-area:number-6;
        }
        .number-7{
            grid-area:number-7;
        }
        .number-8{
            grid-area:number-8;
        }
        .number-9{
            grid-area:number-9;
        }
        .number-0{
            grid-area:number-0;
        }
        .delete{
            grid-area:delete;
        }
        .add{
            grid-area:add;
        }
        .ac{
            grid-area:ac;
        }
        .divide{
            grid-area:divide;
        }
        .multiply{
            grid-area:multiply;
        }
        .OK{
            grid-area:OK;
        }
        .dot{
            grid-area:dot;
        }
        .equal{
            grid-area:equal;
        }
        .subtract{
            grid-area:subtract;
        }
        display:grid;
        grid-template-areas: 
        "result result result result result"
        "number-7 number-8 number-9 divide ac"
        "number-4 number-5 number-6 multiply delete"
        "number-3 number-2 number-1 subtract OK"
        "number-0 dot equal add  OK";
        grid-template-columns:repeat(5,20%);
        grid-template-rows:repeat(5,74px);
        box-shadow: -8px -8px 16px -10px rgba(255,255,255,1),8px 8px 16px -10px rgba(0, 0, 0, .15);
        > button {
            margin: 8px;
            padding: 0;
            border: 0;
            display: block;
            outline: none;
            border-radius: 37px;
            font-size: 24px;
            font-family: Helvetica;
            font-weight: normal;
            color: #999;
            background: linear-gradient(135deg,rgba(230,230,230,1) 0%,rgba(246,246,246,1) 100%);
            box-shadow: -4px -4px 10px -8px rgba(255,255,255,1), 4px 4px 10px -8px rgba(0, 0, 0, .3);
            &:active{
                box-shadow: -4px -4px 10px -8px rgba(255,255,255,1) inset, 4px 4px 10px -8px rgba(0, 0, 0, .3) inset;
            }
        }        
    }   
`

export default NumberPadSection