import { useEffect, useState } from "react";
import { calculateTotal, getInvoice } from "./services/getInvoice";
import { ClientDetails } from "./components/ClientDetails";
import { CompanyDetails } from "./components/CompanyDetails";
import { InvoiceDetails } from "./components/InvoiceDetails";
import { ListDetails } from "./components/ListDetails";
import { TotalView } from "./components/TotalView";
import { FormItem } from "./components/FormItem";

const invoiceInitial = {
  id: 0,
  name: '',
  client: {
    name: "",
    lastname: "",
    address: {
      country: "",
      city: "",
      street: "",
      number: 0
    },
  },
  company: {
    name: "",
    fiscalNumber: 0,
  },
  items: []
}

export const InvoiceApp = () => {

  const [activeForm, setActiveForm] = useState(false);

  const [total, setTotal] = useState(0);

  const [counter, setCounter] = useState(4);

  const [invoice, setInvoice] = useState(invoiceInitial);

  const [items, setItems] = useState([]);

  const { id, name, client, company } = invoice;

  useEffect(() => {
    const data = getInvoice();
    console.log(data);
    setInvoice(data);
    setItems(data.items);
  }, []);

  useEffect(() => {
    // console.log("el counter cambio!!");
  }, [counter]);

  useEffect(() => {
    console.log("los items cambiaron!!");
    setTotal(calculateTotal(items));
  }, [items]);

  const handleInvoiceItem = ({product,price,quantity}) => {

    setItems([...items, {
      id: counter,
      product: product.trim(),
      price: +price.trim(),
      quantity: +quantity.trim(),
    }]);

    setCounter(counter + 1);
  }

  const handlerDeleteItem = (id) => {
      setItems(items.filter( item => item.id !== id));
  }

  const onActiveForm = () => {
    setActiveForm(!activeForm);
  }

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
            <ListDetails title="Porductos de la factura" items={items} handlerDeleteItem={id => handlerDeleteItem(id)}/>
            <TotalView total={total} />
            <button className="btn btn-secondary" 
                    onClick={onActiveForm}>{ !activeForm? 'Abrir Form' : 'Ocultar form' }</button>
                    { !activeForm || <FormItem handler={ handleInvoiceItem } />}
            </div>
        </div>
      </div>
    </>
  )
}
