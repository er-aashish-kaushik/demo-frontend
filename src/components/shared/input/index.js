import { forwardRef } from 'react'
import './index.scss'

const Input = forwardRef((props, ref) => {
    return (
        <input {...props} ref={ref} />
    )
})

export default Input