import { useEffect, useRef, useState } from 'react'
import { cardInfoList } from '../../constants'
import { Card } from '../Card'
import styles from './slider.module.css'

export const Slider = () => {
	const sliderRef = useRef(null) as any
	let mouseDownPosition = '0' as any
	let prevPercentage = 0 as any
	let percentageRef = 0 as any

	function handleMouseDown(event: any) {
		mouseDownPosition = event.clientX
	}

	function handleMouseMove(event: any) {
		if (mouseDownPosition === '0') return

		const mousePosition = parseFloat(mouseDownPosition) - event.clientX

		const maxPosition = window.innerWidth / 2

		const percentage = (mousePosition / maxPosition) * -100

		const nextPercentage = parseFloat(prevPercentage) + percentage

		percentageRef = nextPercentage

		const formatedNextPercentage = Math.max(Math.min(nextPercentage, 0), -100)

		sliderRef.current.animate(
			{
				transform: `translate(${formatedNextPercentage}%)`,
			},
			{ duration: 1200, fill: 'forwards' }
		)

		for (const card of sliderRef.current.querySelectorAll('button > img')) {
			card.animate(
				{
					objectPosition: `${100 + formatedNextPercentage}%`,
				},
				{ duration: 1200, fill: 'forwards' }
			)
		}
	}

	function handleMouseUp(event: any) {
		mouseDownPosition = '0'
		prevPercentage = percentageRef
	}

	useEffect(() => {
		window.addEventListener('mousedown', handleMouseDown)
		window.addEventListener('mousemove', handleMouseMove)
		window.addEventListener('mouseup', handleMouseUp)

		return () => {
			window.removeEventListener('mousedown', handleMouseDown)
			window.removeEventListener('mousemove', handleMouseMove)
			window.removeEventListener('mouseup', handleMouseUp)
		}
	}, [])

	return (
		<div className={styles.slider} ref={sliderRef}>
			{cardInfoList.map((cardInfo) => (
				<Card
					setAsActive={(a) => null}
					active={false}
					id={cardInfo.id}
					img={cardInfo.img}
					key={cardInfo.id}
				/>
			))}
		</div>
	)
}
