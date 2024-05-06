import React from 'react'
import styled from 'styled-components'

const ToDoItem = styled.div`
    width: 75%;
    height: 100px;
    background: #ffffff;
    box-shadow: 5px 8px 0 #bf6955;
    display: flex;
    align-items: center;
    margin: 10px;
    position: relative;
`

const ToDoText = styled.span`
    width: 80%;
    color: #111;
    font-size: 30px;
    font-weight: 600;
    margin-left: 20px;
`

const DeleteButton = styled.button`
    width: 70px;
    height: 45px;
    position: absolute;
    right: 25px;
    background: none;
    border: 3px solid #111;
    color: #111;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      background: #e9b1a5;
      color: #ffffff;
      border: none;
    }
    &:active {
      background: #c9998f;
      color: #ffffff;
      border: none;
    }
`

interface ToDoProps {
    children: string,
    onDelete: () => void
}

const ToDo: React.FC<ToDoProps> = ({children, onDelete}) => {
  return (
    <ToDoItem>
      <ToDoText>{children}</ToDoText>
      <DeleteButton onClick={onDelete}>Clear</DeleteButton>
    </ToDoItem>
  )
}

export default ToDo
