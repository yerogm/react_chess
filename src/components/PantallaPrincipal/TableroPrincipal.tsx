import { useEffect, useState } from "react";
import { Bishop, King, Knight, Pawn, Queen, Rok } from "../svg";
import "./styles.scss";

interface CellModel {
    letra: string;
    numero: number;
    color: string;
    nombre: string;
    icono?: CellIcon;
    coordenadas?: string;
}

interface CellIcon {
    componente: React.ReactNode;
    color: string;
    escala?: number;
}

const letras = "ABCDEFGH";

const colores = ["#b88762", "#edd6b0"];

const TableroPrincipal = () => {
    // const casillas: TableroModel[][] = [[]];

    const [casillas, setCasillas] = useState<CellModel[][]>([]);

    useEffect(() => {
        let newCasillas: CellModel[][] = [];

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
                    coordenadas: `${filaIndex}.${cellIndex}`,
                };
                fila.push(cell);
            }
            newCasillas.push(fila);
        }
        const casillasConFichas = asignarFichas(newCasillas);
        setCasillas(casillasConFichas);
    }, []);

    const asignarFichas = (casillas: CellModel[][]) => {
        let casillasCopia = [...casillas];
        let escalaDePeones = 0.8;

        casillasCopia[0][0].icono = {
            componente: <Rok />,
            color: "black",
        };
        casillasCopia[0][1].icono = {
            componente: <Knight />,
            color: "black",
        };
        casillasCopia[0][2].icono = {
            componente: <Bishop />,
            color: "black",
        };
        casillasCopia[0][3].icono = {
            componente: <King />,
            color: "black",
        };
        casillasCopia[0][4].icono = {
            componente: <Queen />,
            color: "black",
        };
        casillasCopia[0][5].icono = {
            componente: <Bishop />,
            color: "black",
        };
        casillasCopia[0][6].icono = {
            componente: <Knight />,
            color: "black",
        };
        casillasCopia[0][7].icono = {
            componente: <Rok />,
            color: "black",
        };
        casillasCopia[1][0].icono = {
            componente: <Pawn />,
            color: "black",
            escala: escalaDePeones,
        };
        casillasCopia[1][1].icono = {
            componente: <Pawn />,
            color: "black",
            escala: escalaDePeones,
        };
        casillasCopia[1][2].icono = {
            componente: <Pawn />,
            color: "black",
            escala: escalaDePeones,
        };
        casillasCopia[1][3].icono = {
            componente: <Pawn />,
            color: "black",
            escala: escalaDePeones,
        };
        casillasCopia[1][4].icono = {
            componente: <Pawn />,
            color: "black",
            escala: escalaDePeones,
        };
        casillasCopia[1][5].icono = {
            componente: <Pawn />,
            color: "black",
            escala: escalaDePeones,
        };
        casillasCopia[1][6].icono = {
            componente: <Pawn />,
            color: "black",
            escala: escalaDePeones,
        };
        casillasCopia[1][7].icono = {
            componente: <Pawn />,
            color: "black",
            escala: escalaDePeones,
        };

        casillasCopia[7][0].icono = {
            componente: <Rok />,
            color: "white",
        };
        casillasCopia[7][1].icono = {
            componente: <Knight />,
            color: "white",
        };
        casillasCopia[7][2].icono = {
            componente: <Bishop />,
            color: "white",
        };
        casillasCopia[7][3].icono = {
            componente: <King />,
            color: "white",
        };
        casillasCopia[7][4].icono = {
            componente: <Queen />,
            color: "white",
        };
        casillasCopia[7][5].icono = {
            componente: <Bishop />,
            color: "white",
        };
        casillasCopia[7][6].icono = {
            componente: <Knight />,
            color: "white",
        };
        casillasCopia[7][7].icono = {
            componente: <Rok />,
            color: "white",
        };
        casillasCopia[6][0].icono = {
            componente: <Pawn />,
            color: "white",
            escala: escalaDePeones,
        };
        casillasCopia[6][1].icono = {
            componente: <Pawn />,
            color: "white",
            escala: escalaDePeones,
        };
        casillasCopia[6][2].icono = {
            componente: <Pawn />,
            color: "white",
            escala: escalaDePeones,
        };
        casillasCopia[6][3].icono = {
            componente: <Pawn />,
            color: "white",
            escala: escalaDePeones,
        };
        casillasCopia[6][4].icono = {
            componente: <Pawn />,
            color: "white",
            escala: escalaDePeones,
        };
        casillasCopia[6][5].icono = {
            componente: <Pawn />,
            color: "white",
            escala: escalaDePeones,
        };
        casillasCopia[6][6].icono = {
            componente: <Pawn />,
            color: "white",
            escala: escalaDePeones,
        };
        casillasCopia[6][7].icono = {
            componente: <Pawn />,
            color: "white",
            escala: escalaDePeones,
        };
        return casillasCopia;
    };

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    width: "600px",
                    // aspectRatio: "1",
                    margin: "auto",
                    justifyContent: "center",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
                    <div>
                        <img
                            src="https://www.chess.com/bundles/web/images/noavatar_l.84a92436.gif"
                            alt=""
                            width={"40px"}
                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                            }}
                        >
                            <span>user</span>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Flag_of_Colombia.png"
                                alt=""
                                width={"15px"}
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                fontSize: "14px",
                            }}
                        >
                            <img
                                src="https://cdn.pixabay.com/photo/2020/02/11/07/59/green-4838684_1280.png"
                                alt=""
                                width={"15px"}
                            />
                            <span>178</span>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        marginLeft: "auto",
                        backgroundColor: "#2b2926",
                        padding: "0px 40px",
                        color: "#82817f",
                    }}
                >
                    <h3>10:00</h3>
                </div>
            </div>
            <div className="tablero">
                {casillas.map((fila, filaIndex) => (
                    <div className="fila" key={filaIndex}>
                        {fila.map((celda, celdaIndex) => {
                            return (
                                <div
                                    className="celda"
                                    style={{ background: celda.color }}
                                    key={celdaIndex}
                                >
                                    {filaIndex === 7 && (
                                        <span className="celda-letra">
                                            {celda.letra}
                                        </span>
                                    )}
                                    {celdaIndex === 0 && (
                                        <span className="celda-numero">
                                            {9 - filaIndex}
                                        </span>
                                    )}
                                    {celda.icono && (
                                        <div
                                            className={`celda-icono ${celda.icono.color}`}
                                            style={{
                                                transform: `scale(${
                                                    celda.icono.escala ?? 1
                                                })`,
                                            }}
                                        >
                                            {celda.icono.componente}
                                        </div>
                                    )}
                                    {/* <span className="celda-coord">
                                    {celda.coordenadas}
                                </span> */}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
            <div
                style={{
                    display: "flex",
                    width: "600px",
                    // aspectRatio: "1",
                    margin: "auto",
                    justifyContent: "center",
                    marginTop: "30px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
                    <div>
                        <img
                            src="https://www.chess.com/bundles/web/images/noavatar_l.84a92436.gif"
                            alt=""
                            width={"40px"}
                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                            }}
                        >
                            <span>user</span>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
                                alt=""
                                width={"15px"}
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                fontSize: "14px",
                            }}
                        >
                            <img
                                src="https://cdn.pixabay.com/photo/2020/02/11/07/59/green-4838684_1280.png"
                                alt=""
                                width={"15px"}
                            />
                            <span>230</span>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        marginLeft: "auto",
                        backgroundColor: "#fff",
                        padding: "0px 40px",
                        color: "black",
                    }}
                >
                    <h3>10:00</h3>
                </div>
            </div>
        </div>
    );
};

export default TableroPrincipal;
