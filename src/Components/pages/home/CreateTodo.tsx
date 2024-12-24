import { useEffect, useState } from "react";
import { useAddTodosMutation, useGetTodosQuery } from "../../../services/todos";
import { AddTodoPayload } from "../../../interfaces/todos";

export const CreateTodo = () => {
  const [addTodos, { isSuccess }] = useAddTodosMutation();
  const [formFields, setFormFields] = useState<AddTodoPayload>({
    title: "",
  });

  // const { refetch } = useGetTodosQuery();

  const isValid = (): boolean => {
    return formFields.title !== "" ? true : false;
  };

  // useEffect(() => {
  //   if (isSuccess) {
  //     setFormFields({
  //       title: "",
  //     });
  //     refetch();
  //   }
  // }, [isSuccess]);
  return (
    <>
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
            value={formFields.title}
            onChange={(event) => {
              setFormFields({
                title: event.target.value,
              });
            }}
          />
        </div>
        <div className="pb-5 flex justify-end font-[400]">
          <button className="px-4 py-2 uppercase font-sourceSans3 tracking-[3px] border bg-white border-jet rounded-xl text-jet mr-5">
            reset
          </button>
          <button
            className={`px-4 py-2 uppercase font-sourceSans3 tracking-[3px] bg-blue-v2 rounded-xl text-white text-base ${
              isValid() ? "" : "cursor-not-allowed opacity-40"
            }`}
            onClick={async () => {
              const response = await addTodos({
                title: formFields.title,
              }).unwrap();

              if (response.status) {
                setFormFields({
                  title: "",
                });
                // refetch();
              }
            }}
            disabled={isValid() ? false : true}
          >
            Add Todo
          </button>
        </div>
      </main>
    </>
  );
};
