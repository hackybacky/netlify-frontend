import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useState, useEffect } from "react"
import axios from "axios";
import { useParams } from "react-router";

import Axios from "../../config";

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({})
    let { username } = useParams();
   
    useEffect(() => {
      
        const fetchUser = async () => {
            const res = await Axios.get(`/users/?username=${username}`);
            setUser(res.data)

        }
        fetchUser();

    }, [username]);

    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                className="profileCoverImg"
                                src={user.coverPicture?user.coverPicture : "/assets/no_cover.jpg"}
                                alt=""
                            />
                            <img
                                className="profileUserImg"
                                src={user.profilePicture ?user.profilePicture :"/assets/no_avatar.jpg"}
                                alt=""
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.desc || "hello my profile"}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={username}/>
                        <Rightbar user ={user} />
                    </div>
                </div>
            </div>
        </>
    );
}