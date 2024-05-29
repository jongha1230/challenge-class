import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useLoginStore = create(
  persist(
    (set, get) => ({
      isLoggedIn: false,
      logIn: () => set(() => ({ isLoggedIn: true })),
      logOut: () => set(() => ({ isLoggedIn: false })),
      toggleIsLoggedIn: async () => {
        const prevState = get();
        const currentIsLoggedIn = prevState.isLoggedIn;

        await fetch(`/blabla/${currentIsLoggedIn}`);

        // 아래 코드, set 하기 전에 어딘가 통신하고 데이터를 가져오는 등
        // 일이 있을 때 set 함수 안에 전부 넣기 힘들 때 get을 사용
        set({ isLoggedIn: !prevState.isLoggedIn });
      },
    }),
    {
      name: "login-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useLoginStore;
