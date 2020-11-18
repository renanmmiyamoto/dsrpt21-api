"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_safe_1 = __importDefault(require("dotenv-safe"));
var routes_1 = __importDefault(require("./routes"));
dotenv_safe_1.default.config();
var app = express_1.default();
app.use(cors_1.default());
app.use(routes_1.default);
app.listen(process.env.PORT || 3333, function () {
    console.log('🚀 Server running on port 3333');
});
