import React from "react"


function IconSwitch({icon, onSwitch}) {

  const iconSwitch = () => {
    const result = icon === 'view_list' ? 'view_module' : 'view_list';
    onSwitch(result);
  }
 
  return <div className="icon-switch">

      <div className="material-icons" onClick={iconSwitch}>
        {icon}
      </div>

  </div>  
    
  }
  
  export default IconSwitch;