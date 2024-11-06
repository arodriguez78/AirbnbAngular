import { Component, inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastService } from '../toast.service';
import { AvatarComponent } from './avatar/avatar.component';
import { CategoryComponent } from './category/category.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonModule, FontAwesomeModule, ToolbarModule, MenubarModule, CategoryComponent, AvatarComponent, MenuModule],
  providers: [DialogService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit{

  location: string = "Anywhere";
  guests: string = "Add guests";
  dates: string = "Any week";

  toastService = inject(ToastService);
  // login () => this.authService.login();

  // logout () => this.authService.logout();

  currentMenuItems: MenuItem[] | undefined= [];


  ngOnInit(): void {
      this.currentMenuItems = this.fetchMenu();
      this.toastService.send({severity: 'success', summary: 'Welcome to the app!'});
  }

  private fetchMenu() {
    return [
      {
        label: "Sign up",
        styleClass: "font-bold"
    },
    {
        label: "Log in"
    },
  ]
}
}