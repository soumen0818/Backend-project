import express from 'express';

const app = express();

//routs
app.get('/', (req, res) => {
  res.json({message:"welcome to my site"});
});


export default app;
