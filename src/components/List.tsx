import React, { useState } from 'react'
import styled from 'styled-components'
import ToDo from './ToDo'

const InputItem = styled.input`
    width: 75%;
    height: 90px;
    background: none;
    color: #ffffff;
    font-size: 38px;
    font-weight: 600;
    border: 4px solid #ffffff;
    outline: none;
    padding: 30px;
    position: absolute;
    top: 254px;
    cursor: text;
    &:focus {
      border: 5px solid #f5c5ac;
    }
`

const AddButtonItem = styled.button`
    width: 75%;
    height: 60px;
    position: absolute;
    top: 360px;
    background: linear-gradient(240deg, #ffffff, #e9b1a5);
    color: #111;
    font-size: 45px;
    border: 4px solid #ffffff;
    outline: none;
    padding-bottom: 5px;
    overflow: hidden;
    cursor: pointer;
    &:hover {
      background: none;
      color: #e9b1a5;
    }
    &:active {
      background: #e9b1a5;
      color: #e9b1a5;
    }
`

const ListContainer = styled.div`
    width: 75%;
    background: #333;
    display: flex;
    justify-self: center;
    align-items: center;
    flex-direction: column;
`

const ToDosContainer = styled.div`
    width: 100%;
    display: flex;
    justify-self: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 429px;
`

interface AddButtonProps {
  onClick: any
}

const AddButton: React.FC<AddButtonProps> = ({onClick}) => {
  return <AddButtonItem onClick={onClick}>+</AddButtonItem>
}

export default function List() {

  const [tasks, setTasks] = useState<string[]>([])
  const [inputValue, setInputValue] = useState<string>('') 

  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue])
      setInputValue('')
    }
  }

  const deleteTask = (index: number) => {
    const updatedTasks = [...tasks]
    updatedTasks.splice(index, 1)
    setTasks(updatedTasks)
  }

  return (
    <ListContainer>  

      <InputItem 
      value={inputValue} 
      onChange={(e) => setInputValue(e.target.value)} 
      />

      <AddButton onClick={addTask} />
      <ToDosContainer>
      {tasks.map((task, index) => (
        <ToDo 
        key={index} 
        onDelete={() => deleteTask(index)}
        >
          {task}
        </ToDo>
      ))}
      </ToDosContainer>

    </ListContainer>
  )
}
