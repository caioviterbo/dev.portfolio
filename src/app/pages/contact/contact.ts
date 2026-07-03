import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  contacts = [
    {
      id: 'email',
      icon: 'mail',
      label: 'Email',
      value: 'caioviterbo.dev@gmail.com',
      href: 'mailto:caioviterbo.dev@gmail.com',
    },
    {
      id: 'github',
      icon: 'code',
      label: 'GitHub',
      value: 'github.com/caioviterbo',
      href: 'https://github.com/caioviterbo',
    },
    {
      id: 'linkedin',
      icon: 'business',
      label: 'LinkedIn',
      value: 'linkedin.com/in/caioviterbo',
      href: 'https://linkedin.com/in/caioviterbo',
    },
    {
      id: 'whatsapp',
      icon: 'chat',
      label: 'WhatsApp',
      value: '+55 (71) 99660-4239',
      href: 'https://wa.me/5571996604239',
    },
  ];
}
