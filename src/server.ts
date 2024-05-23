import http from "http";
import app from "./app";

const PORT: any = process.env["PORT"] || 3000;

async function startServer() {
  try {
    http.createServer({}, app).listen(PORT, () => {
      // broker.startBroker();
      console.log(`Server started on port ${PORT}`);
    });
  } catch (err: any) {
    console.log(err.message);
  }
}

startServer();
