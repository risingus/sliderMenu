import styles from '../Card/card.module.css'

interface CardProps {
	id: string
	img?: string
	alt?: string
	onClick: (event: any) => void
}

export const Card = ({ img, alt, onClick, id }: CardProps) => {
	return (
		<img
			id={id}
			onClick={onClick}
			src={img}
			alt={alt}
			className={styles.cardImg}
			draggable='false'
		/>
	)
}
