// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Biografía del Cnel. Armando Escalón Espinal"
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/coronel.jpg" alt="Nelson family photo"/>
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Biografía"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="Este valiente Hijo de Honduras, nació en la ciudad de Tegucigalpa M.D.C. el 07 de Septiembre de 1924, sus primeros estudios primarios y secundarios los hizo en su ciudad natal, y dotado de una clara inteligencia y de un carácter acrisolado y recto desde su niñez, ya en la adolescencia ingresó al Ejercito Hondureño como Soldado Mecánico de la Fuerza Aérea Hondureña el cuatro de Octubre de 1943. Desde este instante realizó cursos básicos en arma de la aviación hasta obtener el grado de Sub/Teniente el 14 de abril de 1947, dada su capacidad, disciplina y dedicación al estudio fue adquiriendo otros ascensos en forma interrumpida."
						/>
<BadgesBlock 
  title="Logros" 
  containerClass={about.container} 
  list={methods} 
  fullContainer="fullContainer" 
  block="methods" 
  icon="fingerprint"
  copy={
    <div 
      dangerouslySetInnerHTML={{
        __html: `
          <strong>Ascensos:</strong><br />
          - El 22 de enero de 1949 fue ascendido al grado de Teniente.<br />
          - El 04 de noviembre de 1952 ascendió al grado de Capitán.<br />
          - El 06 de julio de 1955 ascendió al grado de Mayor.<br />
          - El 23 de junio de 1956 ascendió al grado inmediato a Teniente Coronel.<br />
          - El 22 de agosto de 1964 ascendió al grado de Coronel de Aviación.<br /><br />

          <strong>Condecoraciones y Distinciones:</strong><br />
          En vida fue honrado con las siguientes condecoraciones y distinciones:<br />
          - Orden de Morazán en el grado de Comendador (Honduras).<br />
          - Medalla al Mérito Militar II clase (Guatemala).<br />
          - Medalla Legión del Mérito (EUA).<br />
          - Alas Centroamericanas (Nicaragua).<br />
          - Medalla de la Amistad (Argentina).<br /><br />
        `
      }} 
    />
  }
  headerIcon={about.icon}
/>


					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'User Research', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Digital Strategy', 	type: 'fad' },
	{ key: 'window', 			name: 'Design Systems', 	type: 'fad' },
	{ key: 'cubes', 			name: 'Product Strategy', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Brand Strategy', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Operations', 		type: 'fad' },
]