import type { LoginCredentials, User } from "@/types/auth";
import { mockAuthService } from "./mockApi";

const getApiBaseUrl = () => {
  if (typeof window !== 'undefined') {
    // Browser environment
    if (window.location.hostname === 'localhost') {
      return 'http://localhost:3000/api'; // Development
    }
    return `${window.location.origin}/api`; // Production on Vercel
  }
  return 'http://localhost:3000/api'; // Fallback
};

const API_BASE_URL = getApiBaseUrl();
const USE_MOCK_API = import.meta.env.VITE_USE_MOCK_API === 'true' || import.meta.env.DEV;

class AuthService {
  async login(
    credentials: LoginCredentials
  ): Promise<{ user: User; token: string }> {
    if (USE_MOCK_API) {
      const data = await mockAuthService.login(credentials);
      localStorage.setItem("auth_token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      return data;
    }

    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Đăng nhập thất bại");
    }

    const data = await response.json();
    localStorage.setItem("auth_token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    return data;
  }

  logout(): void {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user");
  }

  getCurrentUser(): User | null {
    try {
      const userStr = localStorage.getItem("user");
      return userStr ? JSON.parse(userStr) : null;
    } catch {
      return null;
    }
  }

  getToken(): string | null {
    return localStorage.getItem("auth_token");
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

export const authService = new AuthService();
