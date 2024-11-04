const express = require('express');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const User = require('../models/user'); 



const router = express.Router();

router.post('/register', [
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Validation Errors:", errors.array());
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, userName, taskId } = req.body;
    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Original password:", password);
        console.log("Hashed password:", hashedPassword);

        const user = await User.create({ email, password: hashedPassword, userName, taskId });
        res.json({ id: user.id, email: user.email, userName: user.userName, taskId });
    } catch (err) {
        console.error("Error during registration:", err);
        res.status(500).send('Server error');
    }
});

module.exports = router;
