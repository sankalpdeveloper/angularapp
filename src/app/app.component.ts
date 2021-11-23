import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'
import { NavigationStart, Router } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { User } from './core/models/user'
import { ThemeService } from './core/services/theme.service'
import { UserService } from './core/services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular-app'
  sidebarExpanded = true
  showSidebar: boolean
  showNavbar: boolean
  darkTheme = new FormControl(false)

  constructor(
    private userService: UserService,
    private translate: TranslateService,
    private router: Router,
    private themeService: ThemeService,
  ) {
    translate.setDefaultLang('en')
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login' || event['url'] == '/') {
          this.showSidebar = false
          this.showNavbar = false
        } else {
          this.showSidebar = true
          this.showNavbar = true
        }
      }
    })

    this.themeService.toggleLight()
    this.darkTheme.valueChanges.subscribe((value) => {
      if (value) {
        this.themeService.toggleDark()
      } else {
        this.themeService.toggleLight()
      }
    })
  }

  useLanguage(language: string) {
    this.translate.use(language)
  }
  logout() {
    this.userService.logout()
  }
}
