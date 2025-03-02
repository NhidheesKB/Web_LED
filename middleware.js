
export const config = {
    matcher: ['/','/index.html'],
    
};
export default async function middleware(req){
    const cookieHeader = req.headers.get("cookie") || "";
    const cookies = Object.fromEntries(
      cookieHeader.split("; ").map(cookie => {
        const [name, value] = cookie.split("=");
        return [name.trim(), value];
      })
    );
    const token = cookies.auth_token || null;
    if (!token) {
        return Response.redirect(new URL('/login.html', req.url));
    }
}