
import app from './src/app.js';
import { config } from './src/config/config.js';
import connectDB from './src/config/db.js';

const startServer = async () => {
  //connect DB
  await connectDB();

  const port = config.port|| 3000;

  app.listen(port, () => {
    console.log(`listening on port : ${port}`);
  });
};

startServer();