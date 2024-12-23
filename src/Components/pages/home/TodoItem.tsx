import { formatRelative } from "date-fns";
import { ITodoItemProps } from "../../../interfaces/todos";
import { CheckCheck } from "../../../../shared/components/Icons";

export const TodoItem = (props: ITodoItemProps) => {
  const {  created_at, title, updated_at, isCompleted } = props.todo;
  return (
    <div
      className={`g-white p-3 border border-gray-300 rounded-lg cursor-pointer mb-2 flex justify-between items-center ${
        isCompleted && "opacity-60"
      }`}
    >
      <div>
        <h3
          className={`font-laila text-xl font-medium mb-1 ${
            isCompleted && "line-through"
          }`}
        >
          {title}
        </h3>
        <div className="normal-case text-xs text-gray-600">
          Created {formatRelative(created_at, new Date())}
        </div>
        {updated_at && (
          <div className="normal-case text-xs text-gray-600">
            Completed {formatRelative(updated_at, new Date())}
          </div>
        )}
      </div>
      <div>
        {isCompleted && (
          <div className="size-6 [&>svg]:stroke-blue [&>svg]:fill-none">
            <CheckCheck />
          </div>
        )}
      </div>
    </div>
  );
};
