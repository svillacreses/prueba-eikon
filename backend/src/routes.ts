import { Router } from "express";
import {
  crearFactura,
  listarFactura,
  listarFacturas,
} from "./controllers/facturas.controller";

const router = Router();

router.use(
  // Middleware para simular un delay en TODAS las peticiones
  (_, __, next) => {
    setTimeout(() => {
      next();
    }, 500);
  }
);

router.post("/facturas", crearFactura as any);
router.get("/facturas", listarFacturas as any);
router.get("/facturas/:id", listarFactura as any);

export default router;
