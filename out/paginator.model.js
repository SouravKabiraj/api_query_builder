"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Paginator = /** @class */ (function () {
    function Paginator(page, size, sort) {
        this.page = page;
        this.size = size;
        this.sort = sort;
    }
    return Paginator;
}());
exports.Paginator = Paginator;
var Filter = /** @class */ (function () {
    function Filter(key, value) {
        this.key = key;
        this.value = value;
    }
    return Filter;
}());
exports.Filter = Filter;
var Sort = /** @class */ (function () {
    function Sort(orders) {
        this.orders = orders;
    }
    return Sort;
}());
exports.Sort = Sort;
var Order = /** @class */ (function () {
    function Order(property, direction) {
        this.property = property;
        this.direction = direction;
    }
    return Order;
}());
exports.Order = Order;
