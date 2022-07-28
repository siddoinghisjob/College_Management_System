import create from 'zustand';

export const useStore = create((set) => ({
    page:"main",
    changePage: (page) => {
      set((state) => ({
         page : page, 
        })
      )} 
}))