import React from 'react';
import classNames from 'classnames';
import { Link } from "react-router-dom";
import Card from '../../components/Card';
import { PATHS } from '../../constants';
import styles from './styles.module.css';

function Home() {
  return (
    <>
      <h2>Hola!</h2>
      <p>Esta es una FAQ para los grupos de Telegram de la UTN FRBA. Lo mantenemos comunitariamente.</p>
      <section className={classNames(styles.nav, 'grid')}>
        <Link to={PATHS.ingreso} className='md4'>
          <Card title={<h3>Ingresos</h3>} hoverable>
            Información y tips para quienes recién se suman a la facu (?)
          </Card>
        </Link>
        <Link to={PATHS.ingreso} className='md4'>
          <Card title={<h3>Inscripciones</h3>} hoverable>
            Cómo sobrevivir al vértigo de inscribirte a materias
          </Card>
        </Link>
        <Link to={PATHS.ingreso} className='md4'>
          <Card title={<h3>Votación</h3>} hoverable>
            Esa cosa que pasa una vez al año cada tanto
          </Card>
        </Link>
      </section>
    </>
  );
}

export default Home;
