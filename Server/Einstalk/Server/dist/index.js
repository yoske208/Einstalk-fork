"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "0.0.0.0",
    credentials: true
}));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// app.use(router);
mongoose_1.default.connect(process.env.MONGO_URI || "")
    .then(() => {
    console.log(("Connected to MongoDB Atlas"));
})
    .catch((error) => {
    console.error((`Error connecting to MongoDB:, ${error}`));
});
app.listen(process.env.PORT || 3040, () => {
    console.log((`Listening on: http://localhost:${process.env.PORT || 3040}`));
});
