import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Titulo } from "../Titulo";
import { Buscar } from "../Buscar";
const URI = 'http://localhost:3100/ventas';

export const TableVentas = ({ textoColumna1, textoColumna2, textoColumna3, textoColumna4, textoColumna5, textoColumna6, tdId }) => {

    const [ventas, setVentas] = useState([]);
    const getVentas = async () => {
        const res = await axios.get(URI)
        setVentas(res.data)
    }
    const deleteVentas = async (id) => {
        await axios.delete(`${URI}/${id}`);
        getVentas();
    }
    useEffect(() => {
        getVentas();
    }, [])
    return (
        <>
        
      <section className="seccion-buscar-cliente d-flex mt-4">
      <Titulo textTitulo={"Ventas Registradas: "} tittle={'me-4'} />
      <Buscar inputbuscar={"input-buscar fst-italic"} search={'Documento cliente'} />
    </section>
        <section className="tablaRegistros d-flex justify-content-center align-items-start ">
            <table className="" id="tabla">
                <thead>
                    <tr>
                        <td className="td-principal" id={tdId}>{textoColumna1}</td>
                        <td className="td-principal" id={tdId}>{textoColumna2}</td>
                        <td className="td-principal" id={tdId}>{textoColumna3}</td>
                        <td className="td-principal" id={tdId}>{textoColumna4}</td>
                        <td className="td-principal" id={tdId}>{textoColumna5}</td>
                        <td className="td-principal" id={tdId}>{textoColumna6}</td>
                    </tr>
                </thead>
                <tbody>
                    {ventas.map((venta) => (
                        <tr key={venta.idVenta}>
                            <td>{ }</td>
                            <td>{ }</td>
                            <td>{venta.fechaVenta}</td>
                            <td>{ }</td>
                            <td>{ }</td>
                            <td>
                                <button className="btn btn-success">Editar</button>
                                <button className="btn btn-danger" onClick={() => { deleteVentas(venta.idVenta) }}>De</button>  </td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </section>
        </>
    );
};