import DraggableTodo from "../reusable/Todos/DraggableTodo";
import TodoValue from "../reusable/Todos/TodoValue";
import styles from "./css/ShowAllTodos.module.css";

import { useSelector, useDispatch } from "react-redux";
import { completeTodoDelete } from "../../redux/slices/todoSlice";

import { openAlert } from "../../utils/openAlert";

export default function ShowAllTods() {
  const doneTodosList = useSelector((state) => state.todo.doneTodos);

  const dispatch = useDispatch();

  const deleteCompleteTodo = (id) => {
    dispatch(completeTodoDelete(id));
    openAlert(dispatch, "success", "Delete Done :)");
  };

  return (
    <div className={styles.container}>
      <div className={styles.allTodo}>
        <h2 className={styles.h2}>All Task</h2>
        <DraggableTodo />
      </div>
      <div className={styles.todoComplete}>
        <h2 className={styles.h2}>Completed Task</h2>
        {doneTodosList.length &&
          doneTodosList.map((el) => (
            <TodoValue
              key={el}
              id={el}
              text={el}
              display={"none"}
              textStyle={{ textDecoration: "line-through red" }}
              handler={() => deleteCompleteTodo(el)}
            />
          ))}
      </div>
    </div>
  );
}
