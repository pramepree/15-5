import express, { Request } from 'express';

const app = express();
const PORT = 2000;

app.get('/test', (req: Request) => {
    console.log('Received a request to /test');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
