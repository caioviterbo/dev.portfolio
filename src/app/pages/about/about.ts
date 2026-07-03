import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  about = [
    {
      id: 'pensamento',
      title: 'Pensamento Sistêmico',
      description: 'Gosto de entender como cada parte da aplicação influencia as demais. Antes de implementar uma funcionalidade, procuro compreender seu impacto na arquitetura como um todo.',
    },
    {
      id: 'proposito',
      title: 'Decisões com Propósito',
      description: 'Acredito que boas escolhas técnicas nascem do contexto. Procuro avaliar requisitos, limitações e possibilidades antes de definir uma solução.',
    },
    {
      id: 'aprendizado',
      title: 'Aprendizado Contínuo',
      description: 'Tenho interesse constante em arquitetura de software, engenharia de sistemas e inteligência artificial. Busco compreender não apenas como implementar uma solução, mas por que ela funciona.',
    },
    {
      id: 'evolucao',
      title: 'Evolução Constante',
      description: 'Meu objetivo é evoluir de um desenvolvedor que implementa funcionalidades para um engenheiro capaz de projetar sistemas robustos, escaláveis e de fácil manutenção.',
    },
  ];
}
