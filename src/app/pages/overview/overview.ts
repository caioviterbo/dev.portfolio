import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from "../../shared/header/header";

@Component({
  selector: 'app-overview',
  imports: [],
  templateUrl: './overview.html',
  styleUrl: './overview.scss',
})
export class Overview {

  cards: any[] = [
    {
      icon: 'code',
      title: 'Java . Angular . Spring Boot',
      description: 'Here are some of the projects I have worked on. Each project reflects my commitment to building scalable and efficient systems.',
    },
    {
      icon: 'code',
      title: 'Java . Angular . Spring Boot',
      description: 'Core Stack',
    },
    {
      icon: 'code',
      title: 'Java . Angular . Spring Boot',
      description: 'Here are some of the projects I have worked on. Each project reflects my commitment to building scalable and efficient systems.',
    }
  ]
}
