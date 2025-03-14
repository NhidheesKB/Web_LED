import { login } from "../../utils/auth";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { username, password } = req.body;
        const loginres = await login(username, password);
        
        if (loginres.token) {
            res.setHeader("Set-Cookie", `auth_token=${loginres.token}; Path=/; Secure; HttpOnly; SameSite=Strict`);
            return res.status(200).json({ success: true, message: "Login successful" });
        } else {
            return res.status(419).json({ success: false, message: "Invalid Credentials" });
        }
    }

    return res.status(405).json({ success: false, message: "Method Not Allowed" });
}
