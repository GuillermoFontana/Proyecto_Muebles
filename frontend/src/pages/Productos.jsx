import { useEffect, useState } from "react";
import React from 'react'
import { Link } from 'react-router-dom'

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/api/productos/")
      .then(res => {
        if (!res.ok) throw new Error("Error al obtener productos");
        return res.json();
      })
      .then(data => setProductos(data))
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {productos.map((prod) => (
          <li key={prod.id}>{prod.nombre}</li>
        ))}
      </ul>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default Productos;