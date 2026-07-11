import { CommonModule } from '@angular/common';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarStateService } from '../services/sidebar-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar implements OnInit, OnDestroy {
  public readonly isOpen$;
  private readonly subs = new Subscription();

  @HostBinding('class.mobile-open') public mobileOpen = false;

  private mql?: MediaQueryList;

  constructor(public readonly sidebarStateService: SidebarStateService) {
    this.isOpen$ = this.sidebarStateService.isOpen$;
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined' && 'matchMedia' in window) {
      this.mql = window.matchMedia('(max-width: 767px)');
      this.subs.add(this.sidebarStateService.isOpen$.subscribe(() => this.updateMobileOpen()));
      this.mql.addEventListener?.('change', this.updateMobileOpen);
      this.updateMobileOpen();
    }
  }

  ngOnDestroy(): void {
    this.mql?.removeEventListener?.('change', this.updateMobileOpen);
    this.subs.unsubscribe();
  }

  private updateMobileOpen = (): void => {
    this.mobileOpen = !!(this.mql && this.mql.matches && this.sidebarStateService.isOpen());
  };

  onNavClick(): void {
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches) {
      this.sidebarStateService.close();
    }
  }
}
