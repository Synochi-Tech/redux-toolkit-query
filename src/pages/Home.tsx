import { CreateTodo } from "../Components/pages/home/CreateTodo";
import TodoList from "../Components/pages/home/TodoList";

const Homepage = () => {
  return (
    <div className="flex h-full">
      <div className="left w-[60%]">
        <div className="pr-5">
          <h1 className="font-robotoSlab italic font-[800] text-3xl text-jet pb-3">
            List of Todos
          </h1>
          <TodoList />
        </div>
      </div>
      <div className="rounded-2xl bg-gray-200 w-[40%]">
        <CreateTodo />
      </div>
    </div>
  );
};

export default Homepage;
