import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
    id: string;
    name: string;
    email: string;
    profileImageUrl?: string;
    role?: string;
}

interface UserState {
    user: User | null;
    isLoggedIn: boolean;
    setTestLogin: () => void;
    login: (userData: User) => void;
    logout: () => void;
    updateUser: (userData: Partial<User>) => void;
}

export const useUserStore = create<UserState>()(
    persist(
        set => ({
            user: null,
            isLoggedIn: false,

            setTestLogin: () => set({ isLoggedIn: true }),

            login: userData => set({ user: userData, isLoggedIn: true }),

            logout: () => set({ user: null, isLoggedIn: false }),

            updateUser: userData =>
                set(state => ({
                    user: state.user ? { ...state.user, ...userData } : null,
                })),
        }),
        {
            name: 'user-storage',
        }
    )
);
