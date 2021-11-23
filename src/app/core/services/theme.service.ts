import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  toggleDark() {
    this.setTheme(darkTheme)
  }

  toggleLight() {
    this.setTheme(lightTheme)
  }

  private setTheme(theme: any) {
    Object.keys(theme).forEach((k) =>
      document.documentElement.style.setProperty(`--${k}`, theme[k]),
    )
  }
  constructor() {}
}
export const darkTheme = {
  'primary-color': '#455363',
  'background-color': '#1f2935',
  'text-color': '#fff',
  'btn-back': '#62d19d',
  'btn-cancel': 'lightgray',
  'btn-edit': '#648cc9',
  'btn-danger': '#e34f5d',
}

export const lightTheme = {
  'primary-color': '#fff',
  'background-color': '#e5e5e5',
  'text-color': '#2d2d2d',
  'btn-back': '#198754',
  'btn-cancel': '#6c757d',
  'btn-edit': '#0d6efd',
  'btn-danger': '#dc3545',
}
