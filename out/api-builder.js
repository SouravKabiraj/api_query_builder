"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QueryBuilderUtility = /** @class */ (function () {
    function QueryBuilderUtility() {
    }
    QueryBuilderUtility.prototype.queryGenerator = function (url, paginator, filters) {
        var sortQuery = '';
        var sorts = (paginator && paginator.sort) ? paginator.sort.orders : null;
        sortQuery = this.getPageQuery(paginator, sortQuery);
        sortQuery = (sorts ? this.getSortQuery(sorts, sortQuery) : sortQuery);
        sortQuery = (filters ? this.getFilterQuery(filters, sortQuery) : sortQuery);
        return url.concat(sortQuery);
    };
    QueryBuilderUtility.prototype.getFilterQuery = function (filters, sortQuery) {
        var _this = this;
        filters.forEach(function (filter) {
            sortQuery = _this.getAppender(sortQuery);
            sortQuery = sortQuery.concat(filter.key + "=" + filter.value);
        });
        return sortQuery;
    };
    QueryBuilderUtility.prototype.getSortQuery = function (sorts, sortQuery) {
        var _this = this;
        sorts.forEach(function (sort) {
            sortQuery = _this.getAppender(sortQuery);
            sortQuery = sortQuery.concat("sort=" + sort.property + "," + sort.direction);
        });
        return sortQuery;
    };
    QueryBuilderUtility.prototype.getPageQuery = function (paginator, sortQuery) {
        if (paginator && paginator.size) {
            sortQuery = this.getAppender(sortQuery);
            return sortQuery.concat("page=" + paginator.page + "&size=" + paginator.size);
        }
        else {
            return sortQuery;
        }
    };
    QueryBuilderUtility.prototype.getAppender = function (sortQuery) {
        if (sortQuery === '') {
            return sortQuery.concat('?');
        }
        else {
            return sortQuery.concat('&');
        }
    };
    return QueryBuilderUtility;
}());
exports.QueryBuilderUtility = QueryBuilderUtility;
