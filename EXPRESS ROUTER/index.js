const express = require("express");
const app = express();
const shelterRoutes = require("./routes/shelters");
const dogRoutes = require("./routes/dogs");
const adminRouter = require("./routes/admin");

app.use("/shelters", shelterRoutes); // shelters is a prefix, so we can remove the shelter part in the shelter.js file
app.use("/dogs", dogRoutes);
app.use("/admin",adminRouter);

app.listen(3000, () => {
  console.log("SERVER LIVE ON PORT 3000");
});
