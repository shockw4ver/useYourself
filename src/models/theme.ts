import {
  observable,
  action
} from 'mobx'

export enum ThemeModes {
  Light,
  Dark,
  HighContrast
}

export enum LayoutModes {
  House,
  Recipe
}

export interface IThemeStore {
  mode: ThemeModes,
  layout: LayoutModes,
  navbarVisible: boolean
}

export class ThemeStore implements IThemeStore {
  @observable mode = ThemeModes.Light
  @observable layout = LayoutModes.Recipe
  @observable navbarVisible = this.isMobile() ? false : true

  @action
  toggleNavbar(visible?: boolean) {
    if (visible === undefined) {
      this.navbarVisible = !this.navbarVisible
    } else {
      this.navbarVisible = visible
    }
  }

  private isMobile() {
    if( navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
    ) {
      return true
    } else {
      return false
    }
  }
}