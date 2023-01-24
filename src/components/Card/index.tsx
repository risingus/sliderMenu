import styles from '../Card/card.module.css'

interface CardProps {
	img?: string
	alt?: string
	id: string
	setAsActive: (id: string) => void
	active: boolean
}

export const Card = ({ img, alt, id, setAsActive, active }: CardProps) => {
	const a = 1.1

	return (
		<button
			className={active ? styles.cardActive : styles.card}
			type='button'
			// onClick={() => setAsActive(id)}
		>
			<img
				src={img}
				alt={alt}
				className={active ? styles.cardImgActive : styles.cardImg}
				draggable='false'
			/>
		</button>
	)
}
