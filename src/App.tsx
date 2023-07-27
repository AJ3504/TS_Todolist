import { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import TodoList from "./components/TodoList";
import GlobalStyle from "./GlobalStyle";
import TodoForm from "./components/TodoForm";
import Footer from "./ui/Footer";
import Header from "./ui/Header";

function App() {
  const initialState = [
    {
      id: uuid(),
      title: "테스트 제목 1",
      contents: "테스트 내용 1",
      isDone: false,
    },
    {
      id: uuid(),
      title: "테스트 제목 2",
      contents: "테스트 내용 2",
      isDone: true,
    },
    {
      id: uuid(),
      title: "테스트 제목 3",
      contents: "테스트 내용 3",
      isDone: false,
    },
  ];

  const [todos, setTodos] = useState(initialState);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  return (
    <>
      <GlobalStyle />
      <Header />

      <main
        className="mainWrapper"
        style={{ padding: "10px", backgroundColor: "#FFDDCC" }}
      >
        <TodoForm
          title={title}
          setTitle={setTitle}
          todos={todos}
          setTodos={setTodos}
          contents={contents}
          setContents={setContents}
        />
        <hr />
        {/* --------------------------------------------------------------------- */}
        <div className="yetListWrapper" style={{ marginBottom: "30px" }}>
          <TodoList todos={todos} setTodos={setTodos} isDone={false} />
        </div>
        <div className="doneListWrapper" style={{ marginBottom: "30px" }}>
          <TodoList todos={todos} setTodos={setTodos} isDone={true} />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
