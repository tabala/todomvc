interface ITodo {
  id: string,
  title: string,
	tags?: string,
  completed: boolean
}

interface ITodoItemProps {
  key : string,
  todo : ITodo;
  editing? : boolean;
  onSave: (val: any) => void;
  onDestroy: () => void;
  onEdit: ()  => void;
  onCancel: (event : any) => void;
  onToggle: () => void;
}

interface ITodoItemState {
  title : string []
	tags: string []
}

interface ITodoFooterProps {
  completedCount : number;
  onClearCompleted : any;
  nowShowing : string;
  count : number;
}


interface ITodoModel {
  key : any;
  todos : Array<ITodo>;
  onChanges : Array<any>;
  subscribe(onChange);
  inform();
  addTodo(val);
  toggleAll(checked);
  toggle(todoToToggle);
  destroy(todo);
  save(todoToSave, text);
  clearCompleted();
}

interface IAppProps {
  model : ITodoModel;
}

interface IAppState {
  editing? : string;
  nowShowing? : string
}
