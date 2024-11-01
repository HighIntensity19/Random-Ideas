const express = require('express');
const port = 5001;

const app = express();

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
app.get('/api/ideas', (req, res) => {
  res.json({ success: true, data: ideas });
});

// Get single idea
app.get('/api/ideas/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    res.status(404).json({ success: false, error: 'Resources not found' });
  }
  res.json({ success: true, data: idea });
});

app.listen(port, () => console.log(`Server listening on ${port}`));
