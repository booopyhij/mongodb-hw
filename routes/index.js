// set up for routes, pulling in the exporting
const router = require("express").Router();
const apiRoutes = require("./api");
//use api routes
router.use("/api", apiRoutes);
//handle wrong routes
router.use((req, res) => {
  res.status(404).send("Not found");
});
//export router
module.exports = router;