import { getInvoice } from "./services/getInvoice";
import { ClientDetails } from "./components/ClientDetails";
import { CompanyDetails } from "./components/CompanyDetails";
import { InvoiceDetails } from "./components/InvoiceDetails";
import { ListDetails } from "./components/ListDetails";
import { TotalView } from "./components/TotalView";

export const InvoiceApp = () => {
  const {total, id, name, client, company, items } = getInvoice();

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
            <form>
                <input 
                type="text" 
                name="product" 
                placeholder="Producto" 
                className="form-control m-3" 
                onChange={event => {
                  console.log(event.target.value);
                }}/>
                <input 
                type="text" 
                name="price" 
                placeholder="Precio" 
                className="form-control m-3"/>
                <input 
                type="text" 
                name="quantity" 
                placeholder="Cantidad" 
                className="form-control m-3"/>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
