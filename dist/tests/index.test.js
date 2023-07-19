"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../src/app");
describe('testing "add" function', () => {
    test('add 4+3 to be 8', () => {
        expect((0, app_1.add)(4, 3)).toBe(7);
    });
});
