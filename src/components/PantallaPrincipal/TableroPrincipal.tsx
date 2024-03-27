import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Queen, Rok } from "../svg";

interface CellModel {
    letra: string;
    numero: number;
    color: string;
    nombre: string;
    Icono?: React.ReactNode;
}

const letras = "ABCDEFGH";

const colores = ["#b88762", "#edd6b0"];

const movementList =
    "d4+Nf6+Nf3+Nc6+c3+e5+Bg5+e4+Ne5+h6+Bh4+g5+Bg3+d6+Nxc6+bxc6+c4+Ng4+Qa4+Bd7+h3+c5+Qa6+Bc8+Qc6++Bd7+Qxe4++Be6+hxg4+Qb8+Nc3+f6+Qxe6++Be7+O-O-O+h5+Nd5+Qb7+Nxe7+Rb8+d5+Qxb2#&ply=42&origMoves=d4+Nf6+Nf3+Nc6+c3+e5+Bg5+e4+Ne5+h6+Bh4+g5+Bg3+d6+Nxc6+bxc6+c4+Ng4+Qa4+Bd7+h3+c5+Qa6+Bc8+Qc6++Bd7+Qxe4++Be6+hxg4+Qb8+Nc3+f6+Qxe6++Be7+O-O-O+h5+Nd5+Qb7+Nxe7+Rb8+d5+Qxb2";

const TableroPrincipal = () => {
    // const casillas: TableroModel[][] = [[]];

    const [casillas, setCasillas] = useState<CellModel[][]>([[]]);

    useEffect(() => {
        let newCasillas: CellModel[][] = [[]];

        for (let filaIndex = 0; filaIndex < 8; filaIndex++) {
            let fila: CellModel[] = [];
            for (let cellIndex = 0; cellIndex < 8; cellIndex++) {
                let cell: CellModel = {
                    letra: letras[cellIndex],
                    numero: cellIndex + 1,
                    color:
                        filaIndex % 2 === 0
                            ? colores[cellIndex % 2 === 0 ? 0 : 1]
                            : colores[cellIndex % 2 === 0 ? 1 : 0],
                    nombre: "",
                };
                fila.push(cell);
            }
            newCasillas.push(fila);
        }
        setCasillas(newCasillas);
    }, []);

    useEffect(() => {
        let casillasCopia = [...casillas];
        casillasCopia[0][0].Icono = <Rok />;
    }, [casillas]);

    return (
        <div className="tablero">
            {casillas.map((fila, filaIndex) => (
                <div className="fila" key={filaIndex}>
                    {fila.map((celda, celdaIndex) => (
                        <div
                            className="celda"
                            style={{ background: celda.color }}
                            key={celdaIndex}
                        >
                            {filaIndex === 8 && (
                                <span className="celda-letra">
                                    {celda.letra}
                                </span>
                            )}
                            {celdaIndex === 0 && (
                                <span className="celda-numero">
                                    {9 - filaIndex}
                                </span>
                            )}{" "}
                            {celda.Icono && (
                                <div className="icono">{celda.Icono}</div>
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default TableroPrincipal;
