import { Component } from '@angular/core';
import { SidebarStateService } from '../services/sidebar-state.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor(private readonly sidebarStateService: SidebarStateService) {}

  toggleSidebar(): void {
    this.sidebarStateService.toggle();
  }
}
