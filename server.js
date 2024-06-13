import app from "./index.js";
app.listen(process.env.PORT, () =>
  console.log(`Running sucessfully in ${process.env.PORT}`)
);
