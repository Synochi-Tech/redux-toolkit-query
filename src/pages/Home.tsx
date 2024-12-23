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
        <header className="px-5 py-3">
          <h1 className="font-robotoSlab italic font-[800] text-3xl text-jet">
            Add Todo
          </h1>
        </header>
        <main className="px-5">
          <div className="pb-3">
            <label htmlFor="" className="block text-lg font-laila pb-2">
              Title
            </label>
            <input
              type="text"
              className="w-full outline-0 p-3 rounded-lg border-2 border-gray-300"
            />
          </div>
          <div className="pb-5 flex justify-end font-[400]">
            <button className="px-4 py-2 uppercase font-sourceSans3 tracking-[3px] border bg-white border-jet rounded-xl text-jet mr-5">
              reset
            </button>
            <button className="px-4 py-2 uppercase font-sourceSans3 tracking-[3px] bg-blue-v2 rounded-xl text-white mr-2 text-base">
              Add Todo
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Homepage;
