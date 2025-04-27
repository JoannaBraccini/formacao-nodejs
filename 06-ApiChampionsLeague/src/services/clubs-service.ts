import * as httpResponse from "../utils/http-helper";
import * as repository from "../repositories/clubs-repository";

export const getClubService = async () => {
  const data = await repository.findAllClubs();

  const response = await httpResponse.ok(data);

  return response;
};
