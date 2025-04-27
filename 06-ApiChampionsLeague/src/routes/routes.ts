import * as controller from "../controllers/players-controller";

import { Router } from "express";

const router = Router();

router.get("/players", controller.getPlayer);
router.post("/players", controller.createPlayer);
router.get("/players/:id", controller.getPlayerById);
router.patch("/players/:id", controller.updatePlayer);
router.delete("/players/:id", controller.deletePlayer);

export default router;
