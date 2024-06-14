import AppError from "../utils/AppError.js";
import { asyncMiddleware } from "../utils/asyncMiddleware.js";
import { v4 as uuidv4 } from "uuid";

// Mock database
const TODOS = [
  { id: 1, task: "Wash clothes" },
  { id: 2, task: "Go for run" },
];

const getTodos = asyncMiddleware((req, res) => {
  res.status(200).json(TODOS);
});

const addTodo = asyncMiddleware((req, res) => {
  const { task } = req.body;
  const newTask = { id: uuidv4(), task };
  TODOS.push(newTask);

  // Check if task is empty
  if (!task) throw new AppError("Task cannot be empty", 400);

  res.status(201).json(newTask);
});

const updateTodo = asyncMiddleware((req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  const todoIdToUpdate = +id;

  const index = findTodoIndex(todoIdToUpdate);

  // Update the Todo in that index with a new Todo
  TODOS.splice(index, 1, { id: todoIdToUpdate, task });
  res.status(200).json(TODOS);
});

const deleteTodo = asyncMiddleware((req, res) => {
  const { id } = req.params;
  const todoIdToUpdate = +id;
  const index = findTodoIndex(todoIdToUpdate);

  // No todo present of the Id
  if (index < -1)
    throw new AppError(`No todo found of the id ${todoIdToUpdate}`, 400);

  // delete from TODOS
  TODOS.splice(index, 1);

  res.status(200).json(TODOS);
});

const findTodoIndex = (id) => TODOS.findIndex((todo) => todo.id === id);

export { getTodos, addTodo, updateTodo, deleteTodo };
