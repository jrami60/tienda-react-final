// src/components/ListaProductos.jsx
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

export default function ListaProductos() {
  const [productos, setProductos] = useState([]);
  const [editando, setEditando] = useState(null);
  const [nombreEdit, setNombreEdit] = useState("");
  const [precioEdit, setPrecioEdit] = useState("");

  const cargarProductos = async () => {
    const snap = await getDocs(collection(db, "productos"));
    const lista = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProductos(lista);
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const eliminarProducto = async (id) => {
    await deleteDoc(doc(db, "productos", id));
    cargarProductos();
  };

  const activarEdicion = (producto) => {
    setEditando(producto.id);
    setNombreEdit(producto.nombre);
    setPrecioEdit(producto.precio);
  };

  const guardarEdicion = async () => {
    await updateDoc(doc(db, "productos", editando), {
      nombre: nombreEdit,
      precio: Number(precioEdit),
    });

    setEditando(null);
    cargarProductos();
  };

  return (
    <div>
      <h2>Lista de Productos</h2>

      {productos.length === 0 && <p>No hay productos registrados.</p>}

      {productos.map((p) => (
        <div key={p.id} className="product-card">
          {editando === p.id ? (
            <>
              <input
                value={nombreEdit}
                onChange={(e) => setNombreEdit(e.target.value)}
              />
              <input
                value={precioEdit}
                onChange={(e) => setPrecioEdit(e.target.value)}
              />
              <button onClick={guardarEdicion}>Guardar</button>
              <button onClick={() => setEditando(null)}>Cancelar</button>
            </>
          ) : (
            <>
              <p><b>{p.nombre}</b></p>

              {/* FORMATO EXACTO COMO EN EL CELULAR */}
              <p>
                Precio: ${Number(p.precio).toLocaleString("es-CL")} CLP
              </p>

              <button onClick={() => activarEdicion(p)}>Editar</button>
              <button onClick={() => eliminarProducto(p.id)}>Eliminar</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
