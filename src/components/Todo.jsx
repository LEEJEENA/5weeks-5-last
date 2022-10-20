// Content2 = todo + 댓글
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __editTodo2 } from "../redux/modules/todosSlice";
import Comment from "./Comment"
import styled from "styled-components";
import Button from "../components/custombutton/Button"

const Todo = () => {
    //navigate
    const navigate = useNavigate()

    //filter에 사용할 todos와 id 불러오기
    const todos = useSelector((state)=> state.todos.todos)
    const { id } = useParams()

    //지나 : 수정 버튼 관련 내용
    const [edit, setEdit] = useState(false)
    const [target, setTarget] =useState()
    const dispatch = useDispatch();

    const btnModiCancle = () => {
      setEdit(false)
    }

    const toggleEdit = () => {setEdit(!edit)}

    const onClickUdapte = (id) => {
      dispatch(__editTodo2({id:id,target:target}))
      setEdit(false) 
    }
    

    
  return (
    <>
    {/* //지나 시작 */}
    <STListWrap>
      <STHeader>
        <StNavBtn onClick={() => { navigate("/") }}>HOME</StNavBtn>
        <h1>Today's Diary</h1>
        <StNavBtn onClick={()=> {navigate(-1)}}>BACK</StNavBtn>
      </STHeader>
        {
        todos.filter(todo=> todo.id === Number(id))
        .map(todo => (
        <STPageBtn>
          <STTodoBottom key={todo.id}>
            <h1>제목 : {todo.title}</h1>
            <div>아이디 : {todo.name}</div>
            <h3>내용 :  <br/>
            <div>{edit ? (
                <>
                <TodoInput type="text" value={target} 
                      onChange={({ target }) => setTarget(target.value)} />
                {/* 버튼 일렬로 정렬 */}
                <STTodoEditBtn>
                  <Button size="md" custom="fontl" onClick={()=> onClickUdapte(todo.id)}>수정완료</Button>
                  <Button size="md" custom="fontl" onClick={()=> btnModiCancle()}>수정취소</Button>
                </STTodoEditBtn>
                
                </> ) : (
                <>
                <div>{todo.content}</div>
                <Button size="md" custom="flex margin fontl" onClick={()=>{toggleEdit()}} >수정 </Button>
                </>

                  )}</div>
            </h3>
          </STTodoBottom>
        </STPageBtn>
        ))

        }

    {/* 지나 끝 */}
      </STListWrap>
      
    {/* 댓글불러오기 */}
    <Comment />
      
        </>
  )
}

export default Todo;

// styled 수정
const STListWrap = styled.div`
  width: 80%;
  max-width: 1200px;
  height: 800px;

  display: flex;
  flex-direction: column;

  margin: auto;
`;


const STTodoEditBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 30px;
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

`;

// 스타일 추가한 부분
const STPageBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: 2px solid transparent;

`;

const TodoInput = styled.input `
  width: 80%;
  max-width: 1000px;
  height : 400px;
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

export const STTodoDoneBtn = styled.button`
  width: 150px;
  height: 50px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 70px;

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
