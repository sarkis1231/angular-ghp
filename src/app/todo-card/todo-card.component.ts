import { Component, OnInit } from '@angular/core';
import {Info} from "./types";

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})

export class TodoCardComponent implements OnInit {

  constructor() { }
  info: Info = {
    title: "Go home",
    description: "Before 10 PM",
    dueDate: "12/07/2021"
  }
  ngOnInit(): void {
  }

}
