// Subpage 1 - 일기 작성하기
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {__createTodo} from "../redux/modules/todosSlice"
import styled from "styled-components";
import Button from "../components/custombutton/Button"

const Post = () => {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [name, setName] =useState("")

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos.todos)

  const onCreateTodo = () => {
      dispatch(__createTodo({id: todos.length+1, title, name, content}))
  }

const onClickButton=()=> {
        if(title !== '' && content !==''){
            onCreateTodo()
            setTitle('')
            setContent('')
            setName('')
        }
    }

  return (
    <div>
      <STHeader>
        <Button size="s" onClick={() => { navigate("/") }}>HOME</Button>
        <h1>Today's Diary</h1>
        <Button size="s" onClick={() => { navigate(-1) }}>BACK</Button>
      </STHeader>
      <STTodoContainer>
        <div>
          <STTodoTop>
            <h3>작성하기</h3>
            <label>이름</label>
              <input type= "text" value={name} onChange={e=>{setName(e.target.value)}}></input>
              <label>제목</label>
              <input type= "text" value={title} onChange={e=>{setTitle(e.target.value)}}></input>
          </STTodoTop>
          <STTodoBottom>
            <label>내용</label>
            <input type= "text" value={content} onChange={e=>{setContent(e.target.value)}}></input>
          </STTodoBottom>          
          <Button size="md" custom="flex, margin, fontl" onClick={() => {
            onClickButton()
            navigate("/list")
          }}>추가하기</Button>
        </div>
      </STTodoContainer>
    </div>
  )
}

export default Post;

const STTodoContainer = styled.div`
  width: 95%;
  max-width: 1200px;
  height: 800px;

  display: flex;
  flex-direction: column;

  margin: auto;
`;

const STTodoTop = styled.div`
  width: 80%;
  max-width: 1000px;
  height: 80px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;

  margin: auto;

  input {
  width: 200px;
  height: 30px;
  }
`;

const STTodoBottom = styled.div`
  width: 80%;
  max-width: 1000px;
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: left;

  padding-left: 100px;
  gap: 15px;

  input {
  height: 300px;
  }
`;

export const StNavBtn = styled.button`
  width: 70px;
  height: 40px;

  color: white;
  text-align: center;
  background-color: teal;

  border: 2px solid teal;
  border-radius: 20px;
`;

export const STDoneBtn = styled.button`
  width: 150px;
  height: 50px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 30px auto;

  color: white;
  background-color: teal;
  border: 2px solid teal;
  border-radius: 15px;

  font-size: large;
  font-weight: 700px;
`;

const STHeader = styled.button`
  background-color: #f7f7f7;
  border: 2px solid #f7f7f7;

  width: 80%;
  max-width: 1000px;
  height: 100px;

  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;

  margin: 0 auto 100px;
  padding: 30px;
`;
