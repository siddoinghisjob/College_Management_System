import create from "zustand";

export const useStore = create((set) => ({
    classes: "Select Class",
    box:false,
    questionNo: 0,
    quesNum:1,
    answers:1,
    fade:false,
    number : [],
    updateBox : (payload) => {
        set((state) => ({
            box:payload
        }))
    },
    updateClasses : (payload) => {
        set((state) => ({
            classes: payload,
        }))
    },
    updateQN : (payload) => {
        set((state) => ({
            questionNo : payload,
        }))
    },
    updateQuesNum : (payload) => {
        set((state) => ({
            quesNum : payload,
        }))
    },
    updateAns : (payload) => {
        set((state) => ({
            answers : payload,
        }))
    },
    updateFade : (payload) => {
        set((state) => ({
            fade : payload,
        }))
    },
    addCheckbox : (payload) => {
        set((state) => ({
            number: [...state.number,payload]
        }))
    }
}))