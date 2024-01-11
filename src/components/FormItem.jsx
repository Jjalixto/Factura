import { useEffect, useState } from "react";

export const FormItem = ({handler}) => {

    const [invoiceItemsState, setInvoiceItemsState] = useState({
        product: '',
        price: '',
        quantity: '',
    });

    const { product, price, quantity } = invoiceItemsState;

    useEffect(() => {
        // console.log("el precio cambio");
    }, [price]);

    useEffect(() => {
        // console.log("el form cambio!!");
    }, [invoiceItemsState]);

    const onInputChange = ({ target: { name, value } }) => {
        // console.log(name);
        // console.log(value);

        setInvoiceItemsState({
            ...invoiceItemsState,
            [name]: value
        });
    }

    const invoiceFactura = (event) => {
        event.preventDefault();

        if (product.trim().length <= 1) return;
        if (price.trim().length <= 1) return;
        if (isNaN(price.trim())) {
            alert('Error el precio no es un numero');
            console.log("hola");
            return;
        }
        if (quantity.trim().length < 1) {
            alert('Error la cantidad tiene que ser mayor a 0');
            return;
        }
        if (isNaN(quantity.trim())) {
            alert('Error la cantidad no es un numero');
            return;
        }

        handler(invoiceItemsState);

        setInvoiceItemsState({
            product: '',
            price: '',
            quantity: '',
        })
        
    }

    return (
        <>
            <form className="w-50" onSubmit={invoiceFactura}
            >
                <input
                    type="text"
                    name="product"
                    value={product}
                    placeholder="Producto"
                    className="form-control m-3"
                    onChange={onInputChange} />
                <input
                    type="text"
                    name="price"
                    value={price}
                    placeholder="Precio"
                    className="form-control m-3"
                    onChange={onInputChange}
                />
                <input
                    type="text"
                    name="quantity"
                    value={quantity}
                    placeholder="Cantidad"
                    className="form-control m-3"
                    onChange={event => onInputChange(event)}
                />
                <button type="submit" className="btn btn-primary m-3">Nuevo Item</button>
            </form>
        </>
    )
}