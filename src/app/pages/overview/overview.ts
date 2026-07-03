import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-overview',
  imports: [RouterModule],
  templateUrl: './overview.html',
  styleUrls: ['./overview.scss'],
})
export class Overview {
  cards = [
    {
      id: 'layers',
      label: '2 Anos',
      description: 'Experiência Profissional',
      icon: 'layers',

    },
    {
      id: 'code',
      label: 'Java · Spring Boot · Angular',
      description: 'Core Stack',
      icon: 'code',
    },
    {
      id: 'server',
      label: 'Backend e Sistemas',
      description: 'Foco',
      icon: 'storage',
    },
    {
      id: 'brain',
      label: 'Docker · Kubernetes',
      description: 'Estudando',
      icon: 'memory',
    },
  ];
}
