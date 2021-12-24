"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const models_1 = __importDefault(require("./server/db/models"));
const seeders_1 = require("./server/db/seeders");
const createUsers = () => {
    seeders_1.users.map(user => {
        models_1.default.User.create(user);
    });
};
createUsers();
app.get('/', (req, res) => {
    models_1.default.User.findAll({
        include: {
            model: models_1.default.Session.findAll({
                include: {
                    model: models_1.default.Cart
                }
            })
        }
    }).then((result) => res.json(result)).catch((err) => console.error(err));
});
models_1.default.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`);
    });
});
