import { getInvoice } from "./services/getInvoice";
import { ClientDetails } from "./components/ClientDetails";
import { CompanyDetails } from "./components/CompanyDetails";
import { InvoiceDetails } from "./components/InvoiceDetails";
import { ListDetails } from "./components/ListDetails";
import { TotalView } from "./components/TotalView";
import { useState } from "react";

export const InvoiceApp = () => {
  const {total, id, name, client, company, items:itemsInitial } = getInvoice('');

  const [productValue, setProductValue] = useState();
  const [pricetValue, setPriceValue] = useState(0);
  const [quantityValue, setQuantityValue] = useState(0);

  const [items, setItems] = useState(itemsInitial);

  const [counter, setCounter] = useState(4);

  return (
    <>
      <div className="container">
        <div className="card my-3">
          <div className="card-header">Ejemplo Factura</div>
          <div className="card-body">
            <InvoiceDetails id={id} name={name} />
            <div className="row my-3">
              <div className="col">
                <ClientDetails title="Datos del Cliente" client={client} />
              </div>
              <div className="col">
                <CompanyDetails title="Datos de la empresa" company={company} />
              </div>
            </div>
            <ListDetails title="Porductos de la factura" items={items} />
            <TotalView total={total} />
            <form className="w-50" onSubmit={event => {
              event.preventDefault();

              if(productValue.trim().length <= 1) return;
              if(pricetValue.trim().length <= 1) return;
              if(quantityValue.trim().length < 1) return;

              setItems([...items,{ 
                id:counter,
                product: productValue,
                price: +pricetValue,
                quantity: parseInt(quantityValue,10)}]);
                
                setProductValue('');
                setPriceValue('');
                setQuantityValue('');
                setCounter(counter + 1);
            }}
            >
                <input 
                type="text" 
                name="product"
                value={productValue}
                placeholder="Producto" 
                className="form-control m-3" 
                onChange={event => {
                  console.log(event.target.value);
                  setProductValue(event.target.value);
                }}/>
                <input 
                type="text" 
                name="price" 
                value={pricetValue}
                placeholder="Precio" 
                className="form-control m-3"
                onChange={event => {
                  console.log(event.target.value);
                  setPriceValue(event.target.value);
                }}
                />
                <input 
                type="text" 
                name="quantity" 
                value={quantityValue}
                placeholder="Cantidad" 
                className="form-control m-3"
                onChange={event => {
                  console.log(event.target.value);
                  setQuantityValue(event.target.value);
                }}
                />
                <button type="submit" className="btn btn-primary m-3">Nuevo Item</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
