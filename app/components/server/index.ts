import {Express} from 'express';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import {Server as HttpServer} from "http";

export class Server {
    protected app: Express;

    constructor() {
        this.app = express();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: false
        }));

    }

    run(): void {
        const server: HttpServer = http.createServer(this.app);
        server.listen(3000, () => {
            console.log('server');
        });
    }
}

export default Server;
