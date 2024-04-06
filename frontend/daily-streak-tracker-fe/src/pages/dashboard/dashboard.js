import './dashboard.css'
import Header from '../../components/Header/header'
import Profile from '../../components/Profile/profile'

export default function Dashboard(){
    return (
        <div className="dashboard">
            <div className="header">
                <Header />
            </div>
            <div className="dashboard-profile">
                <Profile />
            </div>
        </div>
    )
}