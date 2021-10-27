import express from 'express';

const app = express();
const PORT = 8000;
app.get('/quick-test', (req,res) => res.send('Express + TypeScript Server: being monitored'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
