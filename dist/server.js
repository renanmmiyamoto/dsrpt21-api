"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var cors_1 = __importDefault(require("cors"));
var dotenv_safe_1 = __importDefault(require("dotenv-safe"));
var routes_1 = __importDefault(require("./routes"));
var AppError_1 = __importDefault(require("./errors/AppError"));
dotenv_safe_1.default.config();
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes_1.default);
app.use(function (err, req, res, _) {
    if (err instanceof AppError_1.default) {
        return res.status(err.statusCode).send({
            status: 'error',
            message: err.message,
        });
    }
    console.error(err);
    return res.status(500).send({
        status: 'error',
        message: 'Internal server error.',
    });
});
app.listen(process.env.PORT || 3333, function () {
    console.log('🚀 Server running on port 3333');
});
