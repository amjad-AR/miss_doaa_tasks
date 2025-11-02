  import { create } from "zustand";

  export const useRegister = create((set, get) => ({
    firstName: null,
    lastName: null,
    age: null,

    setFirstName: (name) => set({ firstName: name }),
    setLastName: (name) => set({ lastName: name }),
    setAge: (value) => set({ age: value }),

    getFullName: () => {
      const { firstName, lastName } = get();
      return `${firstName} ${lastName}`;
    },
  }));

// const useLogIn = create((set) => ({
//   isLoggedIn: false,
//   userName: null,
//   logIn: (name) => set({ isLoggedIn: true, userName: name }),
//   logOute: ()=>set({isLoggedIn:false, userName:''}),
// }))
