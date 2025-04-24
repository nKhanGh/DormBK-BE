"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_services_1 = require("../../Services/auth.services");
class AuthController {
    static postLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, auth_services_1.login)(req.body);
                res.status(200).json(result);
            }
            catch (error) {
                res.status(401).json({ message: error.message });
            }
        });
    }
    static postLogout(req, res) {
        res
            .status(200)
            .json({ message: 'Logged out (frontend should clear token)' });
    }
}
exports.default = AuthController;
