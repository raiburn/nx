import "./Sidebar.css";
import SidebarOption from "../SidebarOption/Option";
import AssignmentIcon from '@material-ui/icons/Assignment';
import DeleteIcon from '@material-ui/icons/Delete';
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

const Dashboard = () => {

  const logout = () => {
    localStorage.removeItem("token");
  }

    return (
      <div className="dashboard">
        
        <SidebarOption active Icon={AssignmentIcon} text="Documents" />
        <SidebarOption active Icon={DeleteIcon} text="Thrash" />
        <SidebarOption active Icon={PermIdentityIcon} text="Account" />
        <SidebarOption active Icon={MoreHorizIcon} text="More" />

        <Button variant="outlined" className="dashboard__Log-out" fullWidth onClick={logout}>
          Log out
        </Button>
      </div>
    );
  }
  
  export default Dashboard;