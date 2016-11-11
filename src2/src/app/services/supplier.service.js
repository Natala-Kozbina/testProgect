class SupplierService {
    constructor() {
        this.suppliers = [
            {
                name: 'Supplier 1',
                data : [
                    {
                        name: "Чизтейк",
                        description: "Чизтейк со смородиной",
                        price: "17.00грн",
                        likes: "25"
                    },
                    {
                        name: "Чизтейк",
                        description: "Чизтейк со смородиной",
                        price: "17.00грн",
                        likes: "25"
                    },
                    {
                        name: "Чизтейк",
                        description: "Чизтейк со смородиной",
                        price: "17.00грн",
                        likes: "25"
                    }
                ]
            },
            {
                name: 'Supplier 2',
                data : [
                    {
                        name: "Чизтейк",
                        description: "Чизтейк со смородиной",
                        price: "16.00грн",
                        likes: "50"
                    },
                    {
                        name: "Чизтейк",
                        description: "Чизтейк со смородиной",
                        price: "16.00грн",
                        likes: "50"
                    },
                    {
                        name: "Чизтейк",
                        description: "Чизтейк со смородиной",
                        price: "16.00грн",
                        likes: "50"
                    },
                    {
                        name: "Чизтейк",
                        description: "Чизтейк со смородиной",
                        price: "16.00грн",
                        likes: "50"
                    }
                ]
            },
            {
                name: 'Supplier 3',
                data : [
                    {
                        name: "Чизтейк",
                        description: "Чизтейк со смородиной",
                        price: "18.00грн",
                        likes: "10"
                    },
                    {
                        name: "Чизтейк",
                        description: "Чизтейк со смородиной",
                        price: "18.00грн",
                        likes: "50"
                    },
                    {
                        name: "Чизтейк",
                        description: "Чизтейк со смородиной",
                        price: "18.00грн",
                        likes: "50"
                    },
                    {
                        name: "Чизтейк",
                        description: "Чизтейк со смородиной",
                        price: "18.00грн",
                        likes: "50"
                    },
                    {
                        name: "Чизтейк",
                        description: "Чизтейк со смородиной",
                        price: "18.00грн",
                        likes: "50"
                    }
                ]
            }
        ];
    }
    getSuppliers() {
        return this.suppliers;
    }

}


export default SupplierService;
