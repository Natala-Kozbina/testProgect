class SupplierService {
    constructor() {
        this.suppliers = [
            {
                name: 'Supplier 1'
            },
            {
                name: 'Supplier 2'
            },
            {
                name: 'Supplier 3'
            }
        ];
    }
    getSuppliers() {
        return this.suppliers;
    }

}


export default SupplierService;
