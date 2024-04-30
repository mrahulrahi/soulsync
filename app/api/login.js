// pages/api/login.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { username, password } = req.body;
  
      // Example: check if the credentials are valid
      if (username === 'admin' && password === 'password') {
        // Successful authentication
        res.status(200).json({ message: 'Login successful' });
      } else {
        // Authentication failed
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  