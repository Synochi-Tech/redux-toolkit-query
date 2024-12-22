const Homepage = () => {
  return (
    <div className="flex h-full">
      <div className="left w-[60%]">left</div>
      <div className="rounded-2xl bg-gray-200 w-[40%]">
        <header className="p-10">
          <h1 className="font-robotoSlab italic font-[800] text-5xl text-jet">
            Add Todo
          </h1>
        </header>
        <main className="px-10">
          <div className="pb-5">
            <label htmlFor="" className="block text-xl font-laila pb-2">
              Title
            </label>
            <input type="text" className="w-full outline-0 p-3 rounded-lg border-2 border-gray-300" />
          </div>
          <div className="pb-5 flex justify-end">
            <button className="px-5 py-3 uppercase font-sourceSans3 tracking-[3px] font-[500] border border-jet rounded-xl text-jet mr-5">
              reset 
            </button>
            <button className="px-5 py-3 uppercase font-sourceSans3 tracking-[3px] font-[500] bg-blue-v2 rounded-xl text-white mr-2">
              Add Todo
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Homepage;
