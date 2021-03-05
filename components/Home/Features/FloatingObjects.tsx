import React from 'react'
import Zoom from 'react-reveal/Zoom'

export const FloatingObjects = ({ name, id, imgId }) => {
	return (
		<div
			className={name}
			onMouseMove={(e) => {
				document.querySelectorAll(name).forEach(() => {
					let dx = 0.033
					let dy = -0.1
					let x = e.clientX * dx
					let y = e.clientY * dy

					document.getElementById(id).style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)'
				})
			}}
			id={id}
		>
			<Zoom>
				<img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' className={imgId} alt='' />
			</Zoom>
		</div>
	)
}
