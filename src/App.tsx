import styled from "styled-components"
import ToDoList from "./components/ToDoList"

const Container = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function App() {
  return (
    <Container>
      <ToDoList />
    </Container>
  )
}
