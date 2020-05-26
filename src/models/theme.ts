import {
  observable
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
  layout: LayoutModes
}

export class ThemeStore implements IThemeStore {
  @observable mode = ThemeModes.Light
  @observable layout = LayoutModes.Recipe
}