import * as express from 'express';
import {Request, Response} from "express";

const app = express();

app.get('/', (req: Request, res: Response) =>
    res.send('Welcome WebDev!'));

app.get('/add/:a/:b', (req: Request, res: Response) =>
    res.send(req.params.a + req.params.b));

const PORT = 3000;
app.listen(process.env.PORT || PORT);
