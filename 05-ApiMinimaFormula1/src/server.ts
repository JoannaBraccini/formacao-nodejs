import cors from "@fastify/cors";
import fastify from "fastify";

const server = fastify({ logger: true });

server.register(cors, {
  origin: "*",
  methods: ["GET"],
});

const teams = [
  { id: 1, name: "McLaren", base: "UK" },
  { id: 2, name: "Red Bull Racing", base: "UK" },
  { id: 3, name: "Ferrari", base: "Italy" },
  { id: 4, name: "Mercedes", base: "UK" },
  { id: 5, name: "Alpine", base: "France" },
  { id: 6, name: "Haas", base: "USA" },
  { id: 7, name: "Williams", base: "UK" },
  { id: 8, name: "Porsche", base: "Germany" },
  { id: 9, name: "Lamborghini", base: "Italy" },
  { id: 10, name: "Aston Martin", base: "UK" },
];

const drivers = [
  { id: 1, name: "Lando Norris", team: "McLaren" },
  { id: 2, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 3, name: "Charles Leclerc", team: "Ferrari" },
  { id: 4, name: "Lewis Hamilton", team: "Mercedes" },
  { id: 5, name: "Fernando Alonso", team: "Alpine" },
  { id: 6, name: "Mick Schumacher", team: "Haas" },
  { id: 7, name: "Nicholas Latifi", team: "Williams" },
  { id: 8, name: "Timo Bernhard", team: "Porsche" },
  { id: 9, name: "Emanuele Pirro", team: "Lamborghini" },
  { id: 10, name: "Sebastian Vettel", team: "Aston Martin" },
];

server.get("/teams", async (request, response) => {
  response.type("application/json").code(200);

  return { teams };
});

server.get("/drivers", async (request, response) => {
  response.type("application/json").code(200);
  return { drivers };
});

interface DriverParams {
  id: string;
}

server.get<{ Params: DriverParams }>(
  "/drivers/:id",
  async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find((driver) => driver.id === id);
    if (!driver) {
      response.type("application/json").code(404);
      return { message: "Driver not found" };
    } else {
      response.type("application/json").code(200);
      return { driver };
    }
  }
);

server.listen({ port: 3333 }, () => {
  console.log("Server init");
});
