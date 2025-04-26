import { PodcastModel } from "../models/podcast-model";
import fs from "fs";
import path from "path";

const pathData = path.join(__dirname, "../repositories/podcasts.json");
const language = "utf-8";

export const repoPodcast = async (
  podcastName?: string
): Promise<PodcastModel[]> => {
  const rawData = fs.readFileSync(pathData, language);
  let jsonFile = JSON.parse(rawData);

  if (podcastName) {
    jsonFile = jsonFile.filter(
      (podcast: PodcastModel) =>
        podcast.podcastName.toLowerCase() === podcastName.toLowerCase()
    );
  }
  return jsonFile;
};
