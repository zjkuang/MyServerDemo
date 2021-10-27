import express from 'express';

const app = express();
const PORT = process.env.PORT || 8000;
app.get('/quick-test', (req,res) => res.send('Express + TypeScript Server: deployed'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
