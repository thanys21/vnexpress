import type { VercelRequest, VercelResponse } from '@vercel/node';

const MOCK_USERS = [
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

export default function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email và password là bắt buộc' });
    }

    const user = MOCK_USERS.find(
        (u) => u.email === email && u.password === password
    );

    if (!user) {
        return res.status(401).json({ message: 'Email hoặc mật khẩu không đúng' });
    }

    const token = `token_${user.id}_${Date.now()}`;
    res.status(200).json({
        user: {
            id: user.id,
            email: user.email,
            name: user.name,
        },
        token,
    });
}