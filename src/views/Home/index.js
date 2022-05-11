import React from 'react';
import { Link } from "react-router-dom";
import Button from '../../components/Button';
import { PATHS } from '../../constants';

function Home() {
  return (
    <>
      <h2>Hola!</h2>
      <p>Esta es una FAQ para los grupos de Telegram de la UTN FRBA. Lo mantenemos comunitariamente.</p>
      <section>
      <Link to={PATHS.ingreso}><Button primary>Ingresos</Button></Link>
      </section>
    </>
  );
}

export default Home;
