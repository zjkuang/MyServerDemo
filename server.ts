import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 8000;
app.get('/quick-test', (req,res) => res.send('[GET response from MyServerDemo] Express + TypeScript Server'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
