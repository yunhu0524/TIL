import express from 'express';

let tweets = [
  {
    id: '1',
    text: 'node test',
    createdAt: Date.now().toString(),
    name: 'Bob',
    username: 'bobbob',
    url: 'https://img.hankyung.com/photo/202111/BF.28096525.1.jpg',
  },
]
const router = express.Router();

// GET
/* /tweets */
router.get('/', (req, res) => {
  const username = req.query.username;
  const data = username ? tweets.filter(t => t.username === username) : tweets;
  console.log(data);
  res.status(200).json(data);
});
/* /tweets/:id */
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const tweet = tweets.find((t)=> t.id === id);
  if(tweet){
    res.status(200).json(tweet);
  } else {
    res.status(404).json({message:`Tweet id:${id} not find`});
  }

});

/*  POST  */
router.post('/', (req, res) => {
  // const text = req.body.text;
  // const username = req.body.username;
  // const name = req.body.name;
  const {text, name, username } = req.body;
  const tweet = {
    id : tweets.length + 1,
    text,
    createdAt: new Date(),
    name,
    username
  };
  tweets = [tweet, ...tweets];
  res.status(201).json(tweets);
});

/*  PUT  */
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = tweets.find((t) => t.id === id);
  if(tweet){
    tweet.text = text;
    res.status(200).json(tweet);
  } else {
    res.status(404).json({message:`Tweet id:${id} not find`});
  }
});

// DELETE
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  tweets = tweets.filter(t => t.id !== id);
  res.sendStatus(204);
});

export default router;
