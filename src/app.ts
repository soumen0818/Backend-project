
import express from "express";
import globalErrorHandler from "./middlewares/globererrorhandler.js";


const app = express();

//routs
//https method get post put delete,patch

app.get('/', (req, res,) => {
  res.json({message:"welcome to my apis"});
});


//global error handler middleware

app.use(globalErrorHandler);

export default app;
