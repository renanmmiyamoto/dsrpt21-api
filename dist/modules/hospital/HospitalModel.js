"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = __importDefault(require("../../database"));
var HospitalSchema = new database_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        unique: true,
        required: true,
    },
    cep: {
        type: String,
        unique: true,
        required: true,
    },
    distance: {
        type: String,
        required: true,
    },
});
exports.default = database_1.default.model('Hospital', HospitalSchema);
