import React from 'react';

interface Todo {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
}
interface TodoListProps {
  todos: Todo[]; // : ⭐️Todo[]는, 'Todo'라는 객체로 구성된 배열을 의미
  setTodos: (todos: Todo[]) => void; // const todos = [{1}, {2}, {3}]
  isDone: boolean;
}

function TodoList({ todos, setTodos, isDone }: TodoListProps) {
  return (
    <div className="listWrapper" style={{ padding: '10px', textAlign: 'center' }}>
      <h2
        style={{
          fontWeight: '1000',
          textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)',
          margin: '10px'
        }}
      >
        {isDone ? 'DONELIST' : 'TODOLIST'}
      </h2>
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 200px))',
          placeContent: 'center',
          gap: '10px',
          padding: '10px'
        }}
      >
        {todos
          .filter(function (t) {
            return t.isDone === isDone;
          })
          .map(function (todo) {
            return (
              <div
                style={{
                  border: '1px solid black',
                  padding: '10px',
                  width: '100%',
                  boxSizing: 'border-box'
                }}
                key={todo.id}
              >
                <p>{todo.title}</p>
                <br />
                <p>{todo.contents}</p>
                <br />
                <p>{todo.isDone.toString()}</p>
                <br />
                <button
                  onClick={function () {
                    const newTodos = todos.filter((filteredTodo) => filteredTodo.id !== todo.id);

                    setTodos(newTodos);
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={function () {
                    // 새로운 배열 생성
                    const newTodos = todos.map(function (item) {
                      if (item.id === todo.id) {
                        return { ...item, isDone: !item.isDone };
                      } else {
                        return item;
                      }
                    });

                    // setTodos
                    setTodos(newTodos);
                  }}
                >
                  {isDone ? '취소' : '완료'}
                </button>
              </div>
            );
          })}
      </section>
    </div>
  );
}

export default TodoList;
