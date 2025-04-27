import * as PlayerRepository from "../repositories/players-repository";
import * as httpResponse from "../utils/http-helper";

import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayerService = async () => {
  const data = await PlayerRepository.findAllPlayers();
  let response = null;

  if (data) {
    response = await httpResponse.ok(data);
  } else {
    response = await httpResponse.noContent();
  }

  return response;
};

export const getPlayerByIdService = async (id: number) => {
  const data = await PlayerRepository.findPlayerById(id);
  let response = null;

  if (data) {
    response = await httpResponse.ok(data);
  } else {
    response = await httpResponse.noContent();
  }

  return response;
};

export const createPlayerService = async (player: PlayerModel) => {
  let response = null;

  if (Object.keys(player).length > 0) {
    PlayerRepository.createPlayer(player);
    response = await httpResponse.created();
  } else {
    response = await httpResponse.badRequest();
  }

  return response;
};

export const deletePlayerService = async (id: number) => {
  let response = null;
  const isDeleted = await PlayerRepository.deletePlayer(id);
  if (isDeleted) {
    response = await httpResponse.ok({ message: "Deleted" });
  } else {
    response = await httpResponse.badRequest();
  }
  return response;
};

export const updatePlayerService = async (
  id: number,
  statistics: StatisticsModel
) => {
  const data = await PlayerRepository.findAndModifyPlayer(id, statistics);
  let response = null;
  if (data && Object.keys(data).length > 0) {
    response = await httpResponse.ok(data);
  } else {
    response = await httpResponse.badRequest();
  }
  return response;
};
