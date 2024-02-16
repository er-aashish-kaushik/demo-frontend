import { useEffect } from 'react'
import { getUsersList } from '../../services/api'
import './index.scss'

const Dashboard = () => {
    useEffect(() => {
        getUsersList()
    }, [])

    return (
        <div className={`dashboard`}>
            Dashboard
        </div>
    )
}

export default Dashboard