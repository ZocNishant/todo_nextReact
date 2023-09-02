"use client";

import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    setMainTask([...mainTask, { title, description }]);

    setTitle("");
    setDescription("");
  };

  const deleteHandler = (index) => {
    let copyTask = [...mainTask];
    copyTask.splice(index, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h2>No Task Added</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((tsk, idx) => {
      return (
        <li key={idx} className="flex items-center justify-between mb-8">
          <div className="flex items-center justify-between w-2/3">
            <h3 className="text-2xl font-semibold">{tsk.title}</h3>
            <h4 className="text-lg font-semibold">{tsk.description}</h4>
          </div>
          <button
            onClick={() => {
              deleteHandler(idx);
            }}
            className="bg-red-600 text-white px-4 py-2 rounded font-bold"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-slate-950 text-yellow-50 font-bold text-3xl text-center p-5 m-5 rounded-md text cursor-default underline underline-offset-4">
        Hey!! Here is your ToDo App
      </h1>
      <form onSubmit={submitHandler}>
        <input
          className="border-4 border-slate-950 px-4 py-3 m-4 rounded-lg font-bold text-xl"
          type="text"
          placeholder="Title ..."
          value={title}
          onChange={(element) => {
            setTitle(element.target.value);
          }}
        />
        <input
          className="border-4 border-slate-950 px-4 py-3 m-4 rounded-lg font-bold text-xl"
          type="text"
          placeholder="Description ..."
          value={description}
          onChange={(element) => {
            setDescription(element.target.value);
          }}
        />
        <button className="bg-slate-950 text-white px-10 py-2 rounded-lg font-bold text-md">
          Add
        </button>
      </form>

      <hr />
      <div className="p-8 bg-slate-300">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default Page;
