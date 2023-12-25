import express, { Application, Request, Response } from "express";

const router = express.Router();

const routers = (app: Application) => {
  router.get("/test", (req: Request, res: Response) => {
    res.render("pages/home");
  });

  return app.use("/", router);
};

export default routers;
