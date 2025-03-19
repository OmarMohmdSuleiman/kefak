import "./UsersList.css";
import AppLogoImg from "../../assets/images/App-logo.png";
import CameraImg from "../../assets/images/camera-img.png";
import SearchImg from "../../assets/images/search-img.png";
import MenuImg from "../../assets/images/menu-img.png";
import ChatImg from "../../assets/images/chat-img.png";
import StatusImg from "../../assets/images/status-img.png";
import TelefoneImg from "../../assets/images/telephone-img.png";
import UserImg from "../../assets/images/chat-user-img.png";




const users=[
    {id:1,name:"Omar",message:"How r u",time:"1:17 pm"},
    {id:2,name:"Ahmad",message:"How r u",time:"1:17 pm"},
    {id:3,name:"Abed",message:"How r u",time:"1:17 pm"},
    {id:4,name:"Mohammad",message:"How r u",time:"1:17 pm"},
    {id:5,name:"Ismail",message:"How r u",time:"1:17 pm"},
    {id:6,name:"Afaf",message:"How r u",time:"1:17 pm"},
    {id:7,name:"Hiba",message:"How r u",time:"1:17 pm"},
    {id:8,name:"Lobna",message:"How r u",time:"1:17 pm"},
    {id:9,name:"Haifa",message:"How r u",time:"1:17 pm"},
    {id:10,name:"Ayla",message:"How r u",time:"1:17 pm"},

]

function UsersList(){
    return (
        <div className="users-list flex column">
            <div className="users-list-div-one flex">
                <img src={AppLogoImg} alt="" />
                <div className="users-list-div-one-imgs flex">
                <img src={CameraImg} alt="" />
                <img src={SearchImg} alt="" />
                <img src={MenuImg} alt="" />
                </div>

            </div>
            <div className="users-list-div-two">
                <ul>
                    {users.map((user)=>(
                        
                        <li  key={user.id}>
                            <div className="contact user flex">
                                <div className="user-img">
                                <img src={UserImg} alt="" />
                                </div>
                                <div className="contact-x flex column">
                                    <span className="name">{user.name}</span>
                                    <span className="messsge">{user.message}</span>
                                </div>
                                <span className="time">{user.time}</span>
                            </div>
                        </li>
                    ))}
                    
                </ul>
            </div>
            <div className="users-list-div-three flex center">
                <div className="below-imgs flex column center"><img src={ChatImg} alt="" /><p>Chats</p></div>
                <div className="below-imgs flex column center"><img src={StatusImg} alt="" /><p>Status</p></div>
                <div className="below-imgs flex column center"><img src={TelefoneImg} alt="" /><p>Calls</p></div>
            </div>
        </div>
    )
}

export default UsersList;