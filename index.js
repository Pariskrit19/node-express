import express from "express";
import ExpressApp from "./src/services/ExpressApp.js";

const startServer = async () => {
  const app = express();

  await ExpressApp(app);

  app.listen(process.env.PORT, () =>
    console.log(`Running sucessfully in ${process.env.PORT}`)
  );
};

startServer();
