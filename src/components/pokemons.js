import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

function Pokemons(props) {

  const [pokemons, setPokemons] = useState([]);


  useEffect(() => {

    if (!navigator.onLine) {

      if (localStorage.getItem("pokemons") === null) {
        console.log("Revise su conexión a internet. Se muestra la última información cargada");
      } 
      
      else {
        const pok = localStorage.getItem("pokemons");
        setPokemons(JSON.parse(pok));
      }
    } 


    else {

      fetch(props.data)
        .then((res) => res.json())
        .then((res) => {

          setPokemons(res);
          localStorage.setItem("pokemons", JSON.stringify(res));
        })
        .catch((err) => console.log(err));
    }
  }, []);





  let cuerpo = () => {
    return pokemons.map((item, i) => 
    <>
      <tr>
        <th>{item.id}</th>
        <td >
        <img className="img-responsive size" src={item.ThumbnailImage} alt="logo"/>
        </td>

        <td >{item.name}</td>
        <td >{item.description}</td>
        <td >{item.height}</td>
        <td >{item.weight}</td>
        <td >{item.type.map((e)=>{ return (<div>{e}</div>)})}</td>
      </tr>
    </>);
  };


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
            <h1>
            <FormattedMessage id="Title" />
            </h1>
        </div>
        <div className="col-12">
          <table className="table">
            <thead className="table-head thead-dark">
              <tr>
                <th >#</th>
                <th >
                  <FormattedMessage id="Image" />
                </th>
                <th >
                  <FormattedMessage id="Name" />
                </th>
                <th >
                  <FormattedMessage id="Descripion" />
                </th>
                <th >
                  <FormattedMessage id="Height" />
                </th>
                <th >
                  <FormattedMessage id="Weight" />
                </th>
                <th >
                  <FormattedMessage id="Type" />
                </th>
              </tr>
            </thead>
            <tbody>{cuerpo()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Pokemons;
