import type { VercelRequest, VercelResponse } from '@vercel/node';

const users = [
    {
        id: '1',
        email: 'admin@vnexpress.com',
        name: 'Admin VnExpress'
    },
    {
        id: '2',
        email: 'user@vnexpress.com',
        name: 'User VnExpress'
    }
];

export default function handler(req: VercelRequest, res: VercelResponse) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const authHeader = req.headers.authorization;
        const token = authHeader?.replace('Bearer ', '');

        if (!token || !token.startsWith('token_')) {
            return res.status(401).json({ message: 'Token không hợp lệ' });
        }

        // Extract user ID from token
        const userId = token.split('_')[1];
        const user = users.find(u => u.id === userId);

        if (!user) {
            return res.status(401).json({ message: 'User không tồn tại' });
        }

        res.status(200).json({
            id: user.id,
            email: user.email,
            name: user.name
        });

    } catch (error) {
        console.error('Me error:', error);
        res.status(500).json({ message: 'Lỗi server' });
    }
}