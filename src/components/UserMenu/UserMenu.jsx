import { useDispatch, useSelector } from "react-redux"
import { selectUserName } from "../../redux/auth/auth-selectors";
import { logOut } from "../../redux/auth/auth-operations";
import defaultAvatar from "./default-user-img.png";

export default function UserMenu() {
    const dispatch = useDispatch();
    const avatar = defaultAvatar;
    const name = useSelector(selectUserName);
    return (
        <div>
           <img src={avatar} width="30" alt={name} />
            <p>Welcome, {name}</p>
            <button type="button" onClick ={()=>{dispatch(logOut())}}>Log Out</button>
        </div>
    )
}