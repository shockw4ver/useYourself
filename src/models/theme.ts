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
  @observable navbarVisible = true

  @action
  toggleNavbar(visible?: boolean) {
    if (visible === undefined) {
      this.navbarVisible = !this.navbarVisible
    } else {
      this.navbarVisible = visible
    }
  }
}