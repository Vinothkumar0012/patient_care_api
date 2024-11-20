function login(req, res) {

    const { email, password } = req.body;
    const users = require('../data/users.json');
    console.log('%croutes/login.route.js:5 users', 'color: #007acc;', users, req.body);
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
}

module.exports = { login }
