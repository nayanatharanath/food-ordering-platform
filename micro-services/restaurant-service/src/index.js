require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`${process.env.SERVICE_NAME} running on ${PORT}`);
});
