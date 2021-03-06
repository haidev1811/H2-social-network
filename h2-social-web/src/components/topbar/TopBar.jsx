import './topbar.scss';
import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

function TopBar() {
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">H2 Social</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input type="text" className="searchInput" placeholder="Search for friend, post or video" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <div className="topbarLink">Homepage</div>
                    <div className="topbarLink">Timeline</div>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Link to="/messenger" style={{ textDecoration: "none", color: "white" }}>
                            <Chat />
                            <span className="topbarIconBadge">1</span>
                        </Link>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}>
                    <img
                        src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"}
                        alt="" className="topbarImg"
                    />
                </Link>
            </div>
        </div>
    )
}

export default TopBar
