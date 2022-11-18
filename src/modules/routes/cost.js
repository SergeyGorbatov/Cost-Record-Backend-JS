const express = require("express");
const router = express.Router();
const {
  createNewCostValidator,
  changeCostInfoValidator,
  deleteCostValidator,
} = require("../../express-validator/validator");

const {
  getAllCosts,
  createNewCost,
  changeCostInfo,
  deleteCost,
} = require("../controllers/cost-controller");

router.get("/costs", getAllCosts);
router.post("/costs", createNewCostValidator, createNewCost);
router.patch("/costs/:_id", changeCostInfoValidator, changeCostInfo);
router.delete("/costs/:_id", deleteCostValidator, deleteCost);

module.exports = router;
