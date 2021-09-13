import { Cost } from './cost';

export interface monthCosts {
  [year: number]: {
    [month: number]: {
      costs: Cost[],
      total: { [x: string]: number },
    }
  }
}
