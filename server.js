const { seeder } = require('./db');
const { Movie } = require('./db/Movie');
const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));

app.use((err, req, res, next)=> {
  console.log(err);
  res.status(err.status || 500).send({ err });
});


const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listening on port ${port}`));

const init = async()=> {
  try {
    await seeder()
  }
  catch(ex){
    console.log(ex);
  }
};

init();