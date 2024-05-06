import styled from "styled-components"
import List from "./List"

const ToDoListContainer = styled.div`
    width: 75%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const ToDoListText = styled.div`
    font-size: 85px;
    font-weight: 600;
    background: linear-gradient(135deg, #f4cec6, #ffffff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: absolute;
    top: 150px;
`

export default function ToDoList() {
  return (
    <ToDoListContainer>
        <ToDoListText>To Do List</ToDoListText>
        <List />
    </ToDoListContainer>
  )
}
