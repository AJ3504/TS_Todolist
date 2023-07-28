import { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import TodoList from './components/TodoList';
import GlobalStyle from './GlobalStyle';
import TodoForm from './components/TodoForm';
import Footer from './ui/Footer';
import Header from './ui/Header';
import { Todo } from './type/todo';

// Todo[]는 'Todo'라는 객체로 구성된 배열 (or, Todo타입의 배열)
function App() {
  const initialState: Todo[] = [
    {
      id: uuid(),
      title: '테스트 제목 1',
      contents: '테스트 내용 1',
      isDone: false
    },
    {
      id: uuid(),
      title: '테스트 제목 2',
      contents: '테스트 내용 2',
      isDone: true
    },
    {
      id: uuid(),
      title: '테스트 제목 3',
      contents: '테스트 내용 3',
      isDone: false
    }
  ];

  const [todos, setTodos] = useState<Todo[]>(initialState);
  const [title, setTitle] = useState<string>('');
  const [contents, setContents] = useState<string>('');

  return (
    <>
      <GlobalStyle />
      <Header />

      <main className="mainWrapper" style={{ padding: '10px', backgroundColor: '#FFDDCC' }}>
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
        <div className="yetListWrapper" style={{ marginBottom: '30px' }}>
          <TodoList todos={todos} setTodos={setTodos} isDone={false} />
        </div>
        <div className="doneListWrapper" style={{ marginBottom: '30px' }}>
          <TodoList todos={todos} setTodos={setTodos} isDone={true} />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
