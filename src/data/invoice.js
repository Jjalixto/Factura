
export const invoice = {
    id : 10,
    name : 'Components PC',
    client : {
        name : "Pepe",
        lastname : "Doe",
        address : {
            country : "USA",
            city : "Los Angeles",
            street : "One Street",
            number : 12
        },
    },   
    company : {
        name : "New Egg",
        fiscalNumber : 123456789,
        },
    items : [
        {
            id:1,
            product: "Cpu intel i7",
            price: 499,
            quantity:1
        },    
        {
            id:2,
            product: "Corsair Keyboard",
            price: 150,
            quantity:2
        },
        {
            id:3,
            product: "Azus Monitor",
            price: 350,
            quantity:1
        },
    ]
};