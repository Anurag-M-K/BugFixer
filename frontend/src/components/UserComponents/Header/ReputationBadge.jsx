import { Button, Popover, Typography } from "@material-ui/core";
import { useState } from "react";
import { useSelector } from "react-redux";
import { SlBadge } from "react-icons/sl";
import { HiOutlineBadgeCheck } from "react-icons/hi";

function ReputationBadge() {
  const [anchor, setAnchor] = useState(null);
  const [display , setDisplay] = useState(true)
  const { userDetails} = useSelector((state)=>state.user)
  const openPopover = (event) => {
    setAnchor(event.currentTarget);

    
  };
  return (
    <div>
      <div style={{ margin: 0 , width:"40px",color:"red",cursor:"pointer"}} variant="contained" onClick={openPopover}>
       {/* <HiOutlineBadgeCheck/> */}
       <SlBadge/> 
      </div>
      {display && 
      <Popover
        open={Boolean(anchor)}
        anchorEl={anchor}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={()=> setAnchor(null)}
      >
        <Typography variant="h6"> <div className="reputation d-flex   btn-warning text-light "> <small className="ms-2 fs-b text-light">Reputation  {  userDetails?.reputation}</small></div></Typography>
      </Popover>
} 
    </div>
  );
}

export default ReputationBadge;