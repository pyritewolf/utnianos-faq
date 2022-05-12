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
        <Link to={PATHS.inscripciones} className='md4'>
          <Card title={<h3>Inscripciones</h3>} hoverable>
            Cómo sobrevivir al vértigo de inscribirte a materias
          </Card>
        </Link>
        <Link to={PATHS.votaciones} className='md4'>
          <Card title={<h3>Votación</h3>} hoverable>
            Esa cosa que pasa una vez al año cada tanto
          </Card>
        </Link>
        <Link to={PATHS.finales} className='md4'>
          <Card title={<h3>Finales</h3>} hoverable>
            Esa cosa que quisieras que no pase pero no podés evitar
          </Card>
        </Link>
        <Link to={PATHS.lore} className='md4'>
          <Card title={<h3>Folklore utniano</h3>} hoverable>
            Memes, chistes recurrentes, historias detrás de cosas graciosas del grupo
          </Card>
        </Link>
      </section>
    </>
  );
}

export default Home;
