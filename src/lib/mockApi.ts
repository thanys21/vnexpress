import type { LoginCredentials, User } from "@/types/auth";

export const MOCK_USERS = [
  {
    id: "1",
    email: "admin@vnexpress.com",
    password: "123456",
    name: "Admin VnExpress",
  },
  {
    id: "2",
    email: "user@vnexpress.com",
    password: "123456",
    name: "User VnExpress",
  },
];

export class MockAuthService {
  async login(
    credentials: LoginCredentials
  ): Promise<{ user: User; token: string }> {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const user = MOCK_USERS.find(
      (u) =>
        u.email === credentials.email && u.password === credentials.password
    );

    if (!user) {
      throw new Error("Email hoặc mật khẩu không đúng");
    }

    const token = `mock_token_${user.id}_${Date.now()}`;

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      token,
    };
  }
}

export const mockAuthService = new MockAuthService();
