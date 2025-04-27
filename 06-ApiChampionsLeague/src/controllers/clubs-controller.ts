import * as service from "../services/clubs-service";

import { Request, Response } from "express";

export const getClubs = async (req: Request, res: Response) => {
  const response = await service.getClubService();

  res.status(response.statusCode).json(response.body);
};
