import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

//Getting the environment variables
dotenv.config();

//Initializing the express app
const app = express();

//adding middlewares
app.use(cors());
app.use(express.json({ limit: '50mb' }));

//Api endpoints for frontend
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {
  res.send('Image-Generation');
});

const startServer = async () => {
  //Connecting MongoDB
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => {
      console.log('Server has started on port 8080');
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
