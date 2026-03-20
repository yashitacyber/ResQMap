const express = require("express");
const router = express.Router();

const {
  getPending,
  approve,
  reject,
} = require("../controllers/moderationController");

router.get("/pending", getPending);
router.patch("/approve/:id", approve);
router.patch("/reject/:id", reject);

module.exports = router;