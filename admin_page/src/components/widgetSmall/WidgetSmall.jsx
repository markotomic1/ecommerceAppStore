import "./widgetSmall.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

function WidgetSmall() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("/users/?new=true");
        setUsers(res.data);
      } catch (error) {}
    };
    getUsers();
  }, []);
  return (
    <div className='widgetSmall'>
      <span className='widgetSmallTitle'>New Join Memebers</span>
      <ul className='widgetSmallList'>
        {users.map((user) => (
          <li className='widgetSmallListItem' key={user._id}>
            <img
              src={
                user.img ||
                "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
              }
              alt=''
              className='widgetSmallImage'
            />
            <div className='widgetSmallUser'>
              <span className='widgetSmallUsername'>{user.username}</span>
            </div>
            <button className='widgetSmallButton'>
              <VisibilityIcon className='widgetSmIcons' />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WidgetSmall;
