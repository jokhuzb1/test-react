import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toggleAuth } from "../store/userSlice";
import { useDispatch } from "react-redux";
const Navbar = () => {
    const dispatch = useDispatch()
    const userStatus = useSelector((state) => state.user.user.isLogged)
    return ( 
        <nav>
              <Link to="/">Home</Link>
              <Link to="/news">News</Link>
              <Link to="/profile">Profile</Link>
             {userStatus ?  <span onClick={()=> dispatch(toggleAuth())} >Logout</span> :""}
        </nav>
     );
}
 
export default Navbar;