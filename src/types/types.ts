export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

export interface ITodoList {
    list: ITodo[]
}