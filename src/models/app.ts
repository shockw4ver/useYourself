import {
  observable
} from 'mobx'

export interface IAppStore {
  version: string
}

export class AppStore implements IAppStore {
  readonly version: string = '0.0.0'
  
  @observable versionName: string = 'November Rain'
}