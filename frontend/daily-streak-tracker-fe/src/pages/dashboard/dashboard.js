import './dashboard.css'
import Header from '../../components/Header/header'
import Profile from '../../components/Profile/profile'
import DailyTask from '../../components/DailyTask/dailyTask';
import Tasks from '../../components/Tasks/tasks';
import Heatmap from '../../components/Heatmap/heatmap';

export default function Dashboard(){
    return (
        <div className="dashboard">
            <div className="header">
                <Header />
            </div>
            <div className="dashboard-components">
                <div className="dashboard-profile">
                    <Profile />
                </div>
                <div className="dashboard-dailyTask">
                    <DailyTask />
                </div>
                <div className="dashboard-tasks">
                    <Tasks />
                </div>
                <div className="dashboard-heatmap">
                    <Heatmap />
                </div>
            </div>
        </div>
    )
}