import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

export default function TaskForm() {
  const [task, setTask] = useState({
    name: "",
    type: "",
    description: "",
    img: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(addTask({ ...task, id: uuid() }));
    }
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((t) => t.id === params.id);
      if (taskFound) {
        setTask(taskFound);
      } else {
        // En caso de que no se encuentre, inicializa en blanco para evitar error
        setTask({
          name: "",
          type: "",
          description: "",
          img: "",
        });
      }
    }
  }, [params.id, tasks]);

  // Validación de seguridad: no renderizar si task no está definido
  if (!task) return <p>Cargando...</p>;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center p-4 mt-20 rounded-md border"
    >
      <input
        className="border-2 border-solid rounded-md p-2 mb-4"
        name="name"
        type="text"
        placeholder="name"
        value={task.name}
        onChange={handleChange}
      />
      <input
        className="border-2 border-solid rounded-md p-2 mb-4"
        name="type"
        type="text"
        placeholder="type"
        value={task.type}
        onChange={handleChange}
      />
      <input
        className="border-2 border-solid rounded-md p-2 mb-4"
        name="description"
        type="text"
        placeholder="description"
        value={task.description}
        onChange={handleChange}
      />
      <input
        className="border-2 border-solid rounded-md p-2 mb-4"
        name="img"
        type="text"
        placeholder="img"
        value={task.img}
        onChange={handleChange}
      />
      <button className="border-2 border-solid rounded-md p-2 mb-4 bg-blue-300">
        Save
      </button>
    </form>
  );
}