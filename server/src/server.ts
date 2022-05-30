import "reflect-metadata";
import app from "./app";
import AppDataSource from "./database";

const PORT = process.env.PORT ?? 3000;

async function main() {
  try {
    await AppDataSource.initialize();
    app.listen(PORT);
    console.log("The server is listening on port:", PORT);
  } catch (err) {
    console.log(err);
  }
}

main();
