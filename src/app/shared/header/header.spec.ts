import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header';
import { SidebarStateService } from '../services/sidebar-state.service';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;
  let sidebarStateService: SidebarStateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    sidebarStateService = TestBed.inject(SidebarStateService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the sidebar state when the menu button is clicked', () => {
    expect(sidebarStateService.isOpen()).toBeTrue();

    const button = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();

    expect(sidebarStateService.isOpen()).toBeFalse();
  });
});
