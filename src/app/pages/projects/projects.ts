import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  project = [
    {
      id: 'observability-platform',
      title: 'Walleye — Detecção de Rachaduras com IA e Visão Computacional',
      problem: 'Sistema embarcado com Raspberry Pi 5 e YOLOv8n-seg, treinado com ~16 mil imagens. Backend em Spring Boot + frontend Angular para monitoramento em tempo real. Arquitetura desacoplada: dispositivo, backend e frontend como serviços independentes.',
      stack: ['PyTorch', 'YOLOv8', 'Raspberry Pi', 'Angular', 'Spring Boot', 'Supabase', 'JWT'],
      feature: 'Detecção de rachaduras com ~90% de precisão, Arquitetura desacoplada, Inferência de IA em tempo real no Raspberry Pi 5',
      github: 'https://github.com/caioviterbo/walleye-backend/tree/develop'
    },
    {
      id: 'event-broker',
      title: 'JTSIGEP — Módulo Administrativo',
      problem: 'Sistema de gerenciamento centralizado de funcionalidades, permissões e contas organizacionais para o TRT5. Integração Angular + REST + PostgreSQL, com controle de acesso baseado em perfis.',
      stack: ['Angular', 'Spring Boot', 'PostgreSQL'],
      feature: 'Gestão centralizada de usuários e permissões, API REST integrada ao ecossistema do TRT5',
    },
    {
      id: 'ml-pipeline',
      title: ' Oficiais Mediadores',
      problem: 'Adotado por um setor inteiro do TRT5. Substituiu controles fragmentados em planilhas por um sistema com filtros avançados e integração com APIs internas para consulta processual via CPF/CNPJ.',
      stack: ['Angular', 'Spring Boot', 'REST API', 'PostgreSQL', 'OAUTH2'],
      feature: 'Digitalização do fluxo de consulta processual, Integração com APIs internas do TRT5, Filtros avançados para consultas CPF/CNPJ' ,
    },
    {
      id: 'auth-gateway',
      title: 'Indisys',
      problem: 'Substituto oficial da página de indisponibilidades do portal TRT5. Registro de ocorrências, métricas, notificações automáticas por e-mail e armazenamento de documentos via MinIO.',
      stack: ['Angular', 'Spring Boot', 'MinIO', 'MongoDB', 'Spring Mail'],
      feature: 'Monitoramento centralizado da disponibilidade dos serviços, Notificações automáticas por e-mail, Armazenamento de documentos via MinIO',
    },

  ];
}
