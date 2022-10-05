import create from 'zustand'
import { persist } from 'zustand/middleware'

interface FilterValue {
  label: 'string'
  value: number | string
}
interface FiltersState {
  types?: FilterValue[]
  states?: FilterValue[]
  cities?: FilterValue[]
  comunas?: FilterValue[]
  fromPrice?: FilterValue
  toPrice?: FilterValue
}

const initialState: FiltersState = {
  types: [],
  states: [],
  cities: [],
  comunas: []
}

let filtersStore = (set: any) => ({
  ...initialState,
    updateFilter: (filterName: string, value: any) => {
      set(() => ({ [filterName]: value }))
    }
})

const useFiltersStore = create(persist(filtersStore, {name: 'filters'}))
export default useFiltersStore;
