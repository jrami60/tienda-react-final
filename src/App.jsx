import React, { useState } from "react";
import Formulario from "./components/Formulario";
import ListaProductos from "./components/ListaProductos";
import SubirArchivo from "./components/SubirArchivo";
import "./App.css";


export default function App() {
  const [vista, setVista] = useState("lista");

  return (
    <div style={{ padding: 20 }}>
      <h1>Tienda React</h1>

      <nav style={{ marginBottom: 20 }}>
        <button onClick={() => setVista("lista")}>Productos</button>
        <button onClick={() => setVista("formulario")}>Agregar Producto</button>
        <button onClick={() => setVista("archivo")}>Subir Archivo</button>
      </nav>

      {vista === "lista" && <ListaProductos />}
      {vista === "formulario" && <Formulario />}
      {vista === "archivo" && <SubirArchivo />}
    </div>
  );
}
