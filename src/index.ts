import express from 'express'
import { db } from './prisma/db';
const app = express();
const port = Number(process.env.PORT ?? 3000);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message : "get endpoint"});
});

app.post("/", async (req, res) => {
  const { email, username } = req.body;

  try {
    const user = await db.orm.public.User.create({
      email,
      username
    });
  
    res.json({ message : "post endpoint", user});
    
  } catch (error) {
    res.status(400).json({ message : "this email is already exist"});
  }
});

app.listen(port, () => {
  console.log("server is listning on port " + port);
})