import React from 'react';
import uuid from 'react-uuid';

interface Todo {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
}
interface TodoFormProps {
  title: string;
  setTitle: (title: string) => void; // 함수 시그니처 (함수의 매개변수 & 반환타입을 정의)
  todos: Todo[]; // todos의 타입은 Todo 배열 => Todo 배열은 Todo라는 인터페이스로 구성된 배열을 의미  // const todos = [{1}, {2}, {3}]
  setTodos: (todos: Todo[]) => void; // 함수 시그니처의 매개변수는 Todo 배열
  contents: string;
  setContents: (contents: string) => void; // setTitle은 setState 함수로서 컴포넌트의 상태를 업데이트하는 역할을 함. 이때, setState 함수는 새로운 값을 반환하지 않고, 컴포넌트의 상태를 변경하는 데에만 사용됨. 따라서 setTitle 함수의 반환 타입은 void
}

const TodoForm = ({ title, setTitle, todos, setTodos, contents, setContents }: TodoFormProps) => {
  return (
    <div
      className="formWrapper"
      style={{
        padding: '10px',
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <form
        onSubmit={function (event) {
          event.preventDefault();

          const newTodo = {
            id: uuid(),
            title,
            contents,
            isDone: false
          };

          setTodos([...todos, newTodo]);
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          minWidth: '350px',
          margin: '0 auto',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.1)'
        }}
      >
        <input
          type="text"
          placeholder="제목입력!"
          value={title}
          onChange={function (event) {
            setTitle(event.target.value);
          }}
          style={{
            padding: '10px',
            fontSize: '16px',
            marginBottom: '10px'
          }}
        />
        <input
          type="text"
          placeholder="내용입력!"
          value={contents}
          onChange={function (event) {
            setContents(event.target.value);
          }}
          style={{
            padding: '10px',
            fontSize: '16px',
            marginBottom: '10px'
          }}
        />
        <button
          type="submit"
          style={{
            padding: '12px 20px',
            fontSize: '16px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          제출
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
