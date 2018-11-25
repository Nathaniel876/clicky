import React from "react";

const Pics = props => (
    
        <div className="col-sm-4" id = {props.id}
        onClick={() => props.setClicked(props.id)}>
            <img src={props.image} alt={props.id} />
        </div>
    
)

export default Pics;