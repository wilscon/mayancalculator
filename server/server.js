const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

function convertToMayan(number) {
  const symbols = [];
  const dot = 'dot';
  const bar = 'bar';
  const shell = 'shell';

  if (number === 0) return [[shell]];

  while (number > 0) {
    let digit = number % 20;
    const level = [];

    if (digit === 0) {
      level.push(shell);
    } else {
      const bars = Math.floor(digit / 5);
      const dots = digit % 5;
      for (let i = 0; i < bars; i++) level.push(bar);
      for (let i = 0; i < dots; i++) level.push(dot);
    }

    symbols.unshift(level);
    number = Math.floor(number / 20);
  }

  return symbols;
}

app.post('/api/convert', (req, res) => {
  const { number } = req.body;
  if (typeof number !== 'number' || number < 0) {
    return res.status(400).json({ error: 'Invalid number' });
  }
  const mayan = convertToMayan(number);
  res.json({ mayan });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});