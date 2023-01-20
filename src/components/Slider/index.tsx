import { Card } from '../Card'
import styles from './slider.module.css'
import cat from '../../assets/cat.jpg'
import code from '../../assets/code.jpg'
import coffee from '../../assets/coffee.jpg'
import gaming from '../../assets/gaming.jpg'
import kitchen from '../../assets/kitchen.jpg'
import landscape from '../../assets/landscape.jpg'
import sunlight from '../../assets/sunlight.jpg'
import woman from '../../assets/woman.jpg'
import { useEffect, useState, MouseEvent, useRef } from 'react'

export const Slider = () => {
	const sliderRef = useRef(null) as any;
	let mouseDownPosition = '0' as any
	let prevPercentage = 0 as any
	let percentageRef = 0 as any
	


	function handleMouseDown(event: any) {
		if(!sliderRef?.current) return;
		mouseDownPosition = event.clientX
	}

	function handleMouseMove(event: any) {
		if (!sliderRef?.current) return;
		if (mouseDownPosition === '0') return;

		const mousePosition = parseFloat(mouseDownPosition) - event.clientX; 

		const maxPosition = window.innerWidth / 2;

		const percentage = (mousePosition / maxPosition) * -100;


		const nextPercentage = parseFloat(prevPercentage) + percentage

		percentageRef = nextPercentage

		const formatedNextPercentage = Math.max(Math.min(nextPercentage, 0), -100);

		sliderRef.current.animate({
			transform: `translate(${formatedNextPercentage}%, -50%)`
		}, {duration: 1200, fill: 'forwards'})


		for (const card of sliderRef.current.querySelectorAll('div')) {
			card.animate({
				objectPosition: `${100 + formatedNextPercentage}% center`
			}, {duration: 1200, fill: 'forwards'})
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
		}

  }, [])

	return (
			<div className={styles.slider} ref={sliderRef}>
				<Card img={cat} />
				<Card img={code} />
				<Card img={coffee} />
				<Card img={gaming} />
				<Card img={kitchen} />
				<Card img={landscape} />
				<Card img={sunlight} />
				<Card img={woman} />
			</div>
	)
}
