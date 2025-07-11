import TodoItem from './TodoItem'; 
import { Todo } from '../types/Todo';

type TodoListProps = {
  todos: Todo[];
  toggleTodo: (id:  number) => void;
  deleteTodo: (id:  number) => void;
};
function TodoList({ todos, toggleTodo, deleteTodo }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">


        <div className="text-6xl mx-auto">📝</div>
        <p className="text-gray-500 text-lg">No tasks yet. Add one above!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="divide-y divide-gray-200">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;