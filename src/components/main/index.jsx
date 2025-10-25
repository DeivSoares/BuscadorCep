import { useState } from "react";
import DevBy from "../main/devby";
import "./style.css";

function Main() {
  const [cep, setCep] = useState("");
  const [resultado, setResultado] = useState(null);

  const buscarCep = () => {
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setResultado(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar CEP:", error);
      });
  };

  return (
    <div className="main-container">
      <h1>Buscador de CEP</h1>
      <input type="text" placeholder="Digite o CEP" value={cep} onChange={(e) => setCep(e.target.value)}/>
      <button onClick={buscarCep}>Buscar</button>

      <div className="result">
            {resultado && ( 
            <table>
                <thead>
                <tr>
                    <th colSpan={2}>Resultado da busca:</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>CEP:</td>
                    <td>{resultado.cep}</td>
                </tr>
                <tr>
                    <td>Logradouro:</td>
                    <td>{resultado.logradouro}</td>
                </tr>
                <tr>
                    <td>Bairro:</td>
                    <td>{resultado.bairro}</td>
                </tr>
                <tr>
                    <td>Cidade:</td>
                    <td>{resultado.localidade}</td>
                </tr>
                <tr>
                    <td>Estado:</td>
                    <td>{resultado.estado}</td>
                </tr>
                </tbody>
            </table>
            )}
      </div>
      <DevBy />
    </div>
  );
}

export default Main;
