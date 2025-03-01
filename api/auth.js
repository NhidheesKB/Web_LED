export default handler=async(req,res)=>{
    const USERS = {
        "user1": "password123",  // Your account
        "Admin": "Admin@2002",  // A,dmin account
    };
    const { username, password } = req.body;
    if (USERS[username] && USERS[username] === password) {
        res.json({ success: true });
        
    } else {
        res.json({ success: false, message: "Invalid credentials" });
    }
}