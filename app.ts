import express from 'express';

const app = express();
// app.set('view engine', 'ejs');

app.get('/', (req: any, res: any)=> {
  res.send("Hello world!");
});

app.get(`/name/:name`, (req: any, res: any) => {
  res.render(`hello, {name: req.params.name}`);
});

export default app; 
