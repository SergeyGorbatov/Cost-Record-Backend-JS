const Cost = require("../../models/cost");

const getAllCosts = async (req, res) => {
  try {
    const allCosts = await Cost.find();
    res.status(200).send(allCosts);
  } catch (err) {
    res.status(400).send("Failed to get all costs");
  }
};

const createNewCost = async (req, res) => {
  try {
    const { text, number } = await req.body;
    const cost = new Cost({ text, number });
    const result = await cost.save();
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send("Failed to create a cost");
  }
};

const changeCostInfo = async (req, res) => {
  try {
    const { text, number } = await req.body;
    const _id = await req.params._id;

    const cost = await Cost.findOneAndUpdate(
      { _id },
      { $set: { text, number } },
      { new: true }
    );
    res.status(200).send(cost);
  } catch (err) {
    res.status(400).send("Failed to change a cost");
  }
};

const deleteCost = async (req, res) => {
  try {
    const _id = req.params._id;

    const result = await Cost.deleteOne({ _id });
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send("Failed to delete cost");
  }
};

module.exports = {
  getAllCosts,
  createNewCost,
  changeCostInfo,
  deleteCost,
};
