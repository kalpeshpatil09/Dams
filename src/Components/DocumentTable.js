import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "./Components/ProductService";

const DataTableBasicDemo = () => {
  const [products, setProducts] = useState([]);
  const productService = new ProductService();

  useEffect(() => {
    productService.getProductsSmall().then((data) => setProducts(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className="card">
        <DataTable value={products} responsiveLayout="scroll">
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="quantity" header="Quantity"></Column>
        </DataTable>
      </div>
    </div>
  );
};
