export class Paginator {
    page: number;
    size: number;
    sort: Sort;

    constructor(page: number, size: number, sort?: Sort) {
        this.page = page;
        this.size = size;
        this.sort = sort;
    }
}

export interface Filter {
    key: string;
    value: any;
}

export class Sort {
    readonly orders: Order[];

    constructor(orders?: Order[]) {
        this.orders = orders;
    }

}


export class Order {
    constructor(property: string, direction: string) {
        this.property = property;
        this.direction = direction;
    }

    property: string;
    direction: string;
}
