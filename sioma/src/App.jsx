import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TasksList/>}/>
            <Route path="/create" element={<TaskForm/>}/>
            <Route path="/edit/:id" element={<TaskForm/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
