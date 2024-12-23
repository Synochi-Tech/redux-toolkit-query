export interface TodosResponse {
  status: number
  message: string
  data: Todo[]
  error: any
}

export interface Todo {
  id: string;
  title: string;
  created_at: string;
  isCompleted: boolean;
  updated_at: string;
}

export interface ITodoItemProps {
  todo: Todo
}