import { create } from 'zustand'

type ModalStore = {
  isModalOpen: boolean;
  setModalOpen : (value: boolean) => void;
  toggleModalOpen: () => void;
}

export const useModalOpen = create<ModalStore>((set) => ({
  isModalOpen: false,
  setModalOpen: (value) => set({isModalOpen: value}),
  toggleModalOpen: () => set((state) => ({isModalOpen: !state.isModalOpen}))
}))

