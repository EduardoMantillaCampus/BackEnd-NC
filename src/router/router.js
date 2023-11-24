import express  from 'express';
import {limitApi} from "../limits/limit.js";
import appCliente from "./cliente.router.js";
import appVenta from "./venta.router.js";

let appRouter = express();

appRouter.use(limitApi());
appRouter.use(appCliente);
appRouter.use(appVenta);

appRouter.get('/',(req, res) => {
    res.send({message:`Welcome to NC`});
})
export default appRouter;
