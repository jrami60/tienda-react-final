// src/components/Formulario.jsx
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Formulario() {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");

  const guardar = async () => {
    if (nombre.trim() === "" || precio.trim() === "") {
      alert("Completa todos los campos");
      return;
    }

    try {
      await addDoc(collection(db, "productos"), {
        nombre,
        precio,
      });

      alert("Producto guardado correctamente");
      setNombre("");
      setPrecio("");
    } catch (error) {
      alert("Error al guardar: " + error.message);
    }
  };

  return (
    <div>
      <h2>Agregar Producto</h2>

      <input
        placeholder="Nombre del producto"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />

      <button onClick={guardar}>Guardar</button>
    </div>
  );
}
