const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const quotes = [
  "Be a voice, not an echo.",
  "Coffee first, schemes later.",
  "If you’re the smartest person in the room, you’re in the wrong room.",
  "Stay lowkey and let your success make the noise.",
  "Chaos is my Ladder.",
  "If opportunity doesn’t knock, build a door... and install Wi-Fi.",
  "You can’t pour from an empty cup — refill with caffeine.",
  "Normal is overrated; weird gets things done.",
  "Dream so big that reality gets uncomfortable.",
  "Keep your heels, head, and standards high.",
  "The comeback is always stronger than the setback.",
  "Do it with passion or not at all.",
  "If plan A fails, remember — there are 25 more letters.",
  "Don’t just exist. Make a dent in the universe.",
  "Your vibe attracts your tribe.",
  "Be so good they can’t ignore you.",
  "Not lucky, just persistent.",
  "The world changes when you do.",
  "Brains are the new muscles. Flex often.",
  "Work hard in silence; let the algorithm reward you."
];


app.get('/api/quote', (req, res) => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: random });
});

app.listen(5000, () => console.log('✅ Server running on port 5000'));
