import { create } from "zustand";

interface AuthState {
  username: string | null;
  isAuthenticated: boolean;
  signin: (username: string) => void;
  signout: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  username: null,
  isAuthenticated: false,
  signin: (username) =>
    set(() => ({ username: username, isAuthenticated: true })),
  signout: () => set(() => ({ username: null, isAuthenticated: false })),
}));
