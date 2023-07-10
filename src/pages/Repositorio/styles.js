import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Loading = styled.div`
    color:#fff;
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

`

export const BackButton = styled(Link)`
    border:0;
    outline: 0;
    background-color: transparent;

`

export const Container = styled.div`
    max-width:700px;
    background: #fff;
    border-radius: 4px;
    box-shadow:0 0 10px rgba(0, 0, 0, 0.2);
    padding:30px;
    margin:80px auto;
`

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:5px;

    img{
        width:150px;
        border-radius: 20%;
        margin:15px;
    }

    h1{
        font-size:30px;
        color:#0d2636;
    }
    p{
        font-size: 14px;
        color: #000;
        text-align: center;
        line-height: 1.4;
        max-width: 400px;
    }
`

export const IssuesList = styled.ul`
    margin-top: 30px;
    padding-top:30px;
    border-top: 1px solid #eee;
    list-style:none;

    li{
        display: flex;
        padding: 15px 10px;

        & + li{
            margin-top:12px;
        }
        
        img{
            width:45px;
            height:45px;
            border-radius:50%;
            border:2px solid #0d2636;

        }

        div{
            flex:1;
            margin-left: 12px;

            p{
                margin-top: 10px;
                font-size:13px;
                color:#000;
            }
        }
        strong{
            font-size:15px;

            a{
                text-decoration:none;
                color:#0d2636;
                transition: 0.3s all;

                &:hover{
                    color:#0071db;
                }
            }

            span{
                background-color: #0d2636;
                color:#fff;
                border-radius: 4px;
                font-size:12px;
                font-weight:600;
                padding:5px 7px;
                margin-left: 10px;
                line-height: 22px;
                letter-spacing: 1px;
                
            }

        }
    }
`

export const PageActions = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    margin-top: 30px;

    button{
        outline: 0;
        border:0;
        background-color: #0d2636;
        color:#fff;
        padding: 5px 10px;
        border-radius:4px;

        &:disabled{
            cursor: not-allowed;
            opacity: 0.5;
        }
    }
`

export const FilterList = styled.div`
    margin:15px 0;

    button{
        outline:0;
        border:0;
        padding: 8px;
        border-radius:4px;
        margin:0 3px;

        &:nth-child(${props => props.active + 1}){
            background-color: #0d2636;
            color: white;
        }
    }
`