import { useState } from "react"

export const withMessenger = (Component) => {
	return (props) => {
		const [isShow, setIsShow] = useState(false)

		const handleClick = () => {
			setIsShow(prev => !prev)
		}

		return <Component {...props} isShow={isShow} setIsShow={setIsShow} handleClick={handleClick} />
	}
}