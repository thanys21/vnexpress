export interface User {
    id: string;
    email: string;
    name: string;
    avatar?: string;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface AuthContextType {
    user: User | null;
    login: (credentials: LoginCredentials) => Promise<boolean>;
    logout: () => void;
    isLoading: boolean;
    isAuthenticated: boolean;
}