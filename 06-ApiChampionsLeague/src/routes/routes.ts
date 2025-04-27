import * as clubController from "../controllers/clubs-controller";
import * as playerController from "../controllers/players-controller";

import { Router } from "express";

const router = Router();

router.get("/players", playerController.getPlayer);
router.post("/players", playerController.createPlayer);
router.get("/players/:id", playerController.getPlayerById);
router.patch("/players/:id", playerController.updatePlayer);
router.delete("/players/:id", playerController.deletePlayer);

router.get("/clubs", clubController.getClubs);

export default router;
