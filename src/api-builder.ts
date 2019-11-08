import {Filter, Order, Paginator} from "./paginator.model";

export class QueryBuilderUtility {
    public queryGenerator(url: string, paginator?: Paginator, filters?: Filter[]): string {
        let sortQuery = '';
        const sorts = (paginator && paginator.sort) ? paginator.sort.orders : null;
        sortQuery = this.getPageQuery(paginator, sortQuery);
        sortQuery = (sorts ? this.getSortQuery(sorts, sortQuery) : sortQuery);
        sortQuery = (filters ? this.getFilterQuery(filters, sortQuery) : sortQuery);
        return url.concat(sortQuery);
    }

    private getFilterQuery(filters: Filter[], sortQuery: string): string {
        filters.forEach(filter => {
            sortQuery = this.getAppender(sortQuery);
            sortQuery = sortQuery.concat(`${filter.key}=${filter.value}`);
        });
        return sortQuery;
    }

    private getSortQuery(sorts: Order[], sortQuery: string): string {
        sorts.forEach(sort => {
            sortQuery = this.getAppender(sortQuery);
            sortQuery = sortQuery.concat(`sort=${sort.property},${sort.direction}`);
        });
        return sortQuery;
    }

    private getPageQuery(paginator: Paginator, sortQuery: string): string {
        if (paginator && paginator.size) {
            sortQuery = this.getAppender(sortQuery);
            return sortQuery.concat(`page=${paginator.page}&size=${paginator.size}`);
        } else {
            return sortQuery;
        }
    }

    private getAppender(sortQuery: string): string {
        if (sortQuery === '') {
            return sortQuery.concat('?');
        } else {
            return sortQuery.concat('&');
        }
    }

}
