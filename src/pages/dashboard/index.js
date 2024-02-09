import { useEffect } from 'react'
import './index.scss'
import { getUsersList } from '../../services/api'

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