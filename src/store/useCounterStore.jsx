import { create } from "zustand";


export const useCounterStore = create( (set)=> ({
    counter:1,
    increment:()=>{
        set((state)=>({
            counter:state.counter +1 
        }))
    }
}) );