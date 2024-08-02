const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestAlphabet = alphabets.sort().slice(-1);

    res.json({
        is_success: true,[^2^][2]
        user_id: "your_name_ddmmyyyy",[^3^][3]
        email: "your_email@example.com",
        roll_number: "your_roll_number",
        numbers,[^1^][1]
        alphabets,[^4^][4]
        highest_alphabet: highestAlphabet
    });
});

app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
