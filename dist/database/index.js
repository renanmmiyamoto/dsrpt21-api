"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_safe_1 = __importDefault(require("dotenv-safe"));
dotenv_safe_1.default.config();
mongoose_1.default.connect('mongodb+srv://admin:medness123@cluster0.7tjsj.mongodb.net/DSRPT21?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});
mongoose_1.default.Promise = global.Promise;
exports.default = mongoose_1.default;
