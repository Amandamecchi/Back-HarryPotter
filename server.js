require("dotenv").config();
const express = require("express");
const cors = require("cors");
const wizardRoutes = require("./src/routes/wizardRoutes");
const houseRoutes = require("./src/routes/houseRoutes");

const app = express();
app.use(cors());
app.use(express.json());

//tirarr o wizard ou do server ou do routes
app.use("/api", wizardRoutes);
app.use("/api/houses", houseRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
