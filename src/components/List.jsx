// Subpage 2 - 작성한 글 보러가기

import React, { useEffect} from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __deleteTodo, __getTodo } from "../redux/modules/todosSlice";
import styled from "styled-components";
import Button from "../components/custombutton/Button"
// import { STNavBtn, STListBtn } from "./custombutton/styles";

const List = () => {

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos)
  const navigate = useNavigate();

  const onTodoDelete = (payload) => {
    dispatch(__deleteTodo(payload))
  }

  useEffect (()=> {
    dispatch(__getTodo())
  }, [dispatch])

  return (
    <STListWrap>
      <STHeader>
        <Button size="s" onClick={() => { navigate("/") }}>HOME</Button>
        <h1>Today's Diary</h1>
        <Button size="s" onClick={()=> {navigate(-1)}}>BACK</Button>
      </STHeader>
      <div>
            {
              todos.map(todo=>(
                <div key={todo.id}>
                  <STListContent>
                    <div>
                      <h3>제목 : {todo.title}</h3>
                    </div>
                    <div>
                      {/* 버튼으로 페이지 넘어가게 수정 */}
                      <Link to={`/todo/${todo.id}`} key={todo.id}>
                        <Button size='m'>보러가기</Button>
                      </Link>
                      <Button size="m" onClick={()=>onTodoDelete(todo.id)}>삭제하기</Button>
                    </div>                    
                  </STListContent>
                </div>
                ))
            }
      </div>
    </STListWrap>
  )
}


export default List;

// 1019 12:11 수정
const STListContent = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-between;
`;

// 1019 12:11 수정
const STListWrap = styled.div`
  width: 80%;
  max-width: 1200px;
  height: 800px;

  display: flex;
  flex-direction: column;

  margin: auto;
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


export const STListBtn = styled.button`
  background-color: teal;
  color: white;

  width: 100px;
  height: 50px;

  border: 2px solid teal;
  border-radius: 20px;

  margin-right: 10px;
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
