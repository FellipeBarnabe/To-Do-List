import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  private nextId: number = 1;

  constructor() { }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(title: string): void {
    this.todos.push({
      id: this.nextId++,
      title,
      completed: false
    });
  }

  updateTodo(id: number, updatedTodo: Partial<Todo>): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      Object.assign(todo, updatedTodo);
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
