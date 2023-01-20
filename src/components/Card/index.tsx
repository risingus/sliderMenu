import styles from '../Card/card.module.css'

interface CardProps {
	img?: string
	alt?: string
}

export const Card = ({ img, alt }: CardProps) => {
	const a = 1.1

	return (
		<div className={styles.card}>
			<img src={img} alt={alt} className={styles.cardImg} draggable='false' />
		</div>
	)
}
