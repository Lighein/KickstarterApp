"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.session = exports.cart = exports.users = void 0;
const uuid_1 = require("uuid");
exports.users = [
    {
        id: (0, uuid_1.v4)(),
        email: "test@email.com",
        password: "test1234",
        firstName: "Test",
        lastName: "Test",
        age: 30,
        country: "US",
        isAdmin: false,
    }
];
exports.cart = [
    {
        id: (0, uuid_1.v4)(),
        product_id: 1,
        session_id: 1,
        amount: 30,
    }
];
exports.session = [
    {
        user_id: 1,
        total: 30,
        status: "cart",
        date: "2021-12-22",
    }
];
