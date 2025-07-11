import { CheckIcon, TrashIcon } from '@heroicons/react/24/outline';

import { Todo } from '../types/Todo';

type TodoItemProps = {
  todo: Todo;
  toggleTodo: (id:  number) => void;
  deleteTodo: (id:  number) => void;
};

function TodoItem({ todo, toggleTodo, deleteTodo }: TodoItemProps) {
  return (
    <div className={`p-4 transition-all duration-200 hover:bg-gray-50 ${
      todo.completed ? 'bg-gray-50/50' : 'bg-white'
    }`}>
      <div className="flex items-center gap-4">
        {/* Toggle Button */}
        <button
          onClick={() => toggleTodo(todo.id)}
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 transition-all duration-200 flex items-center justify-center ${
            todo.completed
              ? 'bg-green-500 border-green-500 hover:bg-green-600'
              : 'border-gray-300 hover:border-green-400'
          }`}
        >
          {todo.completed && (
            <CheckIcon className="w-4 h-4 text-white" />
          )}
        </button>

        {/* Todo Text */}
        <span className={`flex-1 transition-all duration-200 ${
          todo.completed
            ? 'text-gray-500 line-through'
            : 'text-gray-800'
        }`}>
          {todo.text}
        </span>

        {/* Delete Button */}
        <button
          onClick={() => deleteTodo(todo.id)}
          className="flex-shrink-0 p-2 text-gray-400 hover:text-red-500 transition-colors duration-200"
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;