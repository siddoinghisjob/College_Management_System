import create from "zustand"

export const useQNa = create((set) => ({
    nOq : [],
    incNoq : (payload) => {
        set ((state) => ({
            nOq : [...state.nOq,payload],
        }))
    },
    decNoq : (payload) => {
        set ((state) => ({
            nOq : payload
        }))
    }
}))