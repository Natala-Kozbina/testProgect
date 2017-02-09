class SupplierService {
    constructor() {
        this.suppliers = [
            {
                name: 'Supplier 1',
                data : [
                    {   name: "Чизкейк",
                        price: "17.00",
                        likes: "25",
                        labelType: "likes",
                        id: 1,
                        color: "Red",
                        inStock: true,
                        date: "02/10/2017",
                        comments: [{
                            name: "Luke Skyworker",
                            date: "9 Aug 16, 13:00",
                            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
                            likes: "30"
                        }]
                    },
                    {
                        name: "Чизкейк",
                        price: "17.00",
                        likes: "25",
                        labelType: "likes",
                        id: 2,
                        color: "White",
                        inStock: true,
                        date: "02/10/2017",
                        comments: [
                          {
                            name: "Luke Skyworker",
                            date: "9 Aug 16, 13:00",
                            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
                            likes: "30"
                          },
                          {
                            name: "Luke Skyworker",
                            date: "10 Aug 16, 13:00",
                            message: "Lorem ipsum dolor sit amet",
                            likes: "3"
                          }
                        ]
                    },
                    {
                        name: "Чизкейк",
                        price: "17.00",
                        likes: "25",
                        labelType: "likes",
                        id: 3,
                        color: "Yellow",
                        inStock: true,
                        date: "02/10/2017",
                        comments: []
                    },
                    {
                        name: "Чизкейк",
                        price: "17.00",
                        likes: "25",
                        labelType: "likes",
                        id: 4,
                        color: "Green",
                        inStock: false,
                        date: "02/10/2017",
                        comments: []
                    }
                ]
            }
        ];
    }
    getSuppliers() {
        return this.suppliers;
    }

    selectInStock (inStockOnly) {
        this.select = inStockOnly;
    }

    getSelectDish () {
        return this.select;
    }

}

export default SupplierService;
