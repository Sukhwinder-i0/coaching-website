import { create } from 'zustand'

type AdminStore = {
  isAdmin: boolean
  setIsAdmin: (balue: boolean) => void
}

export const useAdmin = create<AdminStore>((set) => ({
isAdmin: false,
setIsAdmin: (value:boolean) => set({isAdmin: value})
}))