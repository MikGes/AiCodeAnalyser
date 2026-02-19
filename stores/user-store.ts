import {create} from 'zustand'
interface User{
    id: number;
    name:string;
    email:string
}
interface userStock{
    user:User | null,
    updateUser:(user:User)=>void
}
export const useUserStore = create<userStock>((set)=>({
    user: null,
    updateUser:(user) => set(()=>({user}))
}))