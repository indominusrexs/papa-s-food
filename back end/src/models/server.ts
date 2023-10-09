import express, { Application, Request, Response } from 'express';
import routesProducto  from '../routes/productos';
import { getProductos,getProducto } from '../controllers/productos';

import  cors from 'cors';
import  db  from '../db/conection';


class Server {
    private app: express.Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbconnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('listening on port ' + this.port )
        })
    }
    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({msg: 'API working' })
        })
        this.app.use('/api/pedidos', routesProducto);
    }
    midlewares() {
        this.app.use(express.json());

        this.app.use(cors());
    }
    async dbconnect() {
        try {
            db.authenticate();
            console.log('db connected');
        }
        catch (error) {
            console.log(error);
            console.log('Error al conectar ');
        }
    }
}

export default Server;