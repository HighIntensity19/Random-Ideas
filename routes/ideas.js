const express = require('express');
const router = express.Router();

const ideas = [
  {
    id: 1,
    text: 'Positivity',
    tag: 'Technology',
    username: 'TonyStark',
    date: '2022-01-02',
  },
  {
    id: 2,
    text: 'Dan Janes Rocks',
    tag: 'Inventions',
    username: 'Danjanes',
    date: '2023-06-06,',
  },
  {
    id: 3,
    text: 'Addie So Sweet',
    tag: 'Software',
    username: 'AddieBae',
    date: '2020-11-21,',
  },
];

// Get all ideas
router.get('/', (req, res) => {
  res.json({ success: true, data: ideas });
});

// Get single idea
router.get('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    res.status(404).json({ success: false, error: 'Resources not found' });
  }
  res.json({ success: true, data: idea });
});

// Add an idea
router.post('/', (req, res) => {
  const idea = {
    id: ideas.length + 1,
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
    date: new Date().toISOString().slice(0, 10),
  };

  ideas.push(idea);
  res.json({ success: true, data: idea });
});

module.exports = router;
