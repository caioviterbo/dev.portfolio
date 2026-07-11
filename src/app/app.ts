import { CommonModule } from '@angular/common';
import { Component, signal, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Sidebar } from './shared/sidebar/sidebar';
import { SidebarStateService } from './shared/services/sidebar-state.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Header, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnDestroy {
  protected readonly title = signal('caioviterbo-portfolio-frontend');
  public readonly sidebarOpen$;
  public isMobile = false;

  private readonly mql?: MediaQueryList;

  constructor(private readonly sidebarStateService: SidebarStateService) {
    this.sidebarOpen$ = this.sidebarStateService.isOpen$;
    if (typeof window !== 'undefined' && 'matchMedia' in window) {
      this.mql = window.matchMedia('(max-width: 767px)');
      this.isMobile = this.mql.matches;
      this.mql.addEventListener?.('change', this.handleMqlChange);
    } else {
      this.isMobile = false;
    }
  }

  closeSidebar(): void {
    this.sidebarStateService.close();
  }

  private handleMqlChange = (e: MediaQueryListEvent) => {
    this.isMobile = e.matches;
    if (!this.isMobile) {
      // Ensure sidebar is open on desktop by default
      this.sidebarStateService.open();
    } else {
      // On mobile default closed
      this.sidebarStateService.close();
    }
  };

  ngOnDestroy(): void {
    this.mql?.removeEventListener?.('change', this.handleMqlChange);
  }
}
