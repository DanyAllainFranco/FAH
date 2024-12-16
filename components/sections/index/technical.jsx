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
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Misión FF.AA."
					subTitle="Las Fuerzas Armadas de Honduras asegurará la defensa
de la integridad territorial y soberanía nacional,
manteniendo la paz, el orden público y el imperio de la
Constitución, contribuirá al desarrollo del país apoyando
a instituciones públicas y privadas para lograr el
bienestar individual y colectivo del pueblo hondureño en
general, a fin de garantizar el cumplimiento de los
objetivos e intereses nacionales que consoliden la
existencia del Estado."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock
							title="Misión de la Base Aérea Cnel. Armando Escalón Espinal."
							icon={['fat', 'chart-network']}
							copy="Contribuir en el cumplimiento de la misión
constitucional de la Fuerza Aérea Hondureña,
llevando a cabo operaciones de interdicción y
apoyo aéreo cercano"
							iconClass={about.icon}
							containerClass={about.container}
						/>
					
						<BadgesBlock
							title="Visión de la Base Aérea Cnel. Armando Escalón Espinal."
							copy="Ser una unidad de élite, altamente capacitada y equipada, reconocida por su compromiso con la seguridad nacional, la protección del medio ambiente y el apoyo a la población civil. La Base Aérea Cnel. Armando Escalón Espinal se distinguirá por su excelencia en la ejecución de operaciones aéreas y terrestres, desempeñando un papel clave en el fortalecimiento de la Fuerza Aérea Hondureña y el Estado de Derecho, contribuyendo a la paz, estabilidad y desarrollo sostenible del país."
							list={tech}
							block="tech"
							fullContainer="fullContainer"
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon}
						/>
					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
					</div>
				</section>
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const software = [
	{ key: 'photoshop', name: 'Photoshop', type: 'devicon' },
	{ key: 'illustrator', name: 'Illustrator', type: 'devicon' },
	{ key: 'figma', name: 'Figma', type: 'devicon' },
	{ key: 'vscode', name: 'VSCode', type: 'devicon' },
	{ key: 'mailbox', name: 'Postman', type: 'fas' },
	{ key: 'computer-mouse', name: 'Click Up', type: 'fas' },
	{ key: 'list-music', name: 'Ableton', type: 'fas' },
	{ key: 'aftereffects', name: 'After Effects', type: 'devicon' },
	{ key: 'premierepro', name: 'Premiere Pro', type: 'devicon' },
]

const tech = [
	{ key: 'javascript', name: 'JavaScript', type: 'devicon' },
	{ key: 'nodejs', name: 'NodeJS', type: 'devicon' },
	{ key: 'react', name: 'React', type: 'devicon' },
	{ key: 'nextjs', name: 'NextJS', type: 'devicon' },
	{ key: 'jquery', name: 'jQuery', type: 'devicon' },
	{ key: 'php', name: 'PHP', type: 'devicon' },
	{ key: 'wordpress', name: 'WordPress', type: 'devicon' },
	{ key: 'woocommerce', name: 'WooCommerce', type: 'devicon' },
	{ key: "google", name: "GA4/GTM", type: "devicon" },
	{ key: 'html5', name: 'HTML5', type: 'devicon' },
	{ key: 'css3', name: 'CSS3', type: 'devicon' },
	{ key: 'sass', name: 'SASS', type: 'devicon' },
	{ key: 'git', name: 'Git', type: 'devicon' },
	{ key: 'mysql', name: 'MySQL', type: 'devicon' },
	{ key: 'mongodb', name: 'MongoDB', type: 'devicon' },
]