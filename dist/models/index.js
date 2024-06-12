"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sequelize = new sequelize_1.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: "postgres",
});
sequelize
    .authenticate()
    .then(() => {
    console.log("Database Connected");
})
    .catch((err) => {
    console.log("Error connecting data", err);
});
sequelize
    .sync({ force: true })
    .then(() => {
    console.log("Database synchronized");
})
    .catch((error) => {
    console.error("Unable to synchronize the database:", error.message);
    console.error(error.stack);
});
exports.default = sequelize;
//# sourceMappingURL=index.js.map