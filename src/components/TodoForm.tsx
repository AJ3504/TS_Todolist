import React from "react";
import uuid from "react-uuid";

const TodoForm = ({
  title,
  setTitle,
  todos,
  setTodos,
  contents,
  setContents,
}) => {
  return (
    <div
      className="formWrapper"
      style={{
        padding: "10px",
        marginBottom: "30px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form
        onSubmit={function (event) {
          event.preventDefault();

          // TODO: 넣을 객체 생성(new todo)
          const newTodo = {
            id: uuid(),
            title,
            contents,
            isDone: false,
          };

          // TODO: todos state에 넣어줘야 해!!
          setTodos([...todos, newTodo]);
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          minWidth: "350px",
          margin: "0 auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.1)",
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
            padding: "10px",
            fontSize: "16px",
            marginBottom: "10px",
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
            padding: "10px",
            fontSize: "16px",
            marginBottom: "10px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "12px 20px",
            fontSize: "16px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          제출
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
