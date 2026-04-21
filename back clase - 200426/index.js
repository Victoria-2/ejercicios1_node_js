// import express from "express";

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const cartelera = [
  {
    id: 1,
    titulo: "Dune",
    precioEntrada: "20.00",
  },
  {
    id: 2,
    titulo: "Spider-Man",
    precioEntrada: "20.00",
  },
  {
    id: 3,
    titulo: "Nuremberg",
    precioEntrada: "26.00",
  },
  {
    id: 4,
    titulo: "Frieren",
    precioEntrada: "19.00",
  },
  {
    id: 5,
    titulo: "La Momia",
    precioEntrada: "5.00",
  },
  {
    id: 6,
    titulo: "Moster",
    precioEntrada: 30.0,
  },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/peliculas", (req, res) => {
  return res.status(200).json({ cartelera });
});

app.listen(port, () => {
  console.log(`Servior en puerto: ${port}`);
});
