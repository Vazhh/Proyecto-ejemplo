import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Modal from "./Modal";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

export default function TasksList() {
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const [modal, setModal] = useState(false);
  const [item, setItem] = useState(null);

  const showMore = (i) => {
    setItem(i);
    setModal(!modal);
  };

  return (
    <>
      <header className="mt-20 border-1 border-solid p-5 rounded-md flex flex-col justify-center items-center bg-blue-300 hover:scale-110">
        <Link className="hover:cursor-pointer font-bold" to='/create'><h1>Create Card</h1></Link>
        
      </header>
      {modal && <Modal item={item} setModal={setModal} />}
      <div className="flex flex-wrap w-[90%] justify-center items-center mt-10">
        {tasks.map((card, index) => {
          return (
            <div
              key={index}
              className="border-2 border-solid h-[400px] w-[300px] ms-4 mt-7 flex flex-col justify-center items-center rounded-md"
            >
              <div
                onClick={() => handleDelete(card.id)}
                className="font-bold hover:scale-110 hover:cursor-pointer text-red-700"
              >
                x
              </div>
              <img
                src={card.imageUrl}
                alt="card"
                className="w-52 hover:cursor-pointer hover:scale-110"
              />
              <h1 className="text-3xl font-semibold">{card.name}</h1>
              <button
                onClick={() => showMore(card)}
                className="bg-sky-600 text-xl font-bold rounded-lg text-white mt-4 p-2 hover:scale-110 hover:cursor-pointer"
              >
                Show More!
              </button>
              <Link to={`/edit/${card.id}`}>Edit</Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
