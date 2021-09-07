import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  res.json("ok");
});

export default router;
