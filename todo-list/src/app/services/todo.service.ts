import { Injectable } from '@angular/core';

export interface todo {
  id: number;
  tittle: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
}
