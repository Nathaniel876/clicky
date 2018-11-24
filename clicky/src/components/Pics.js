import React from "react";
import './Clicky.css';

const Picture = props => (
    
        <div className="col-sm-3" id = {props.id}
        onClick={() => props.setClicked(props.id)}>
            <img src={props.image} alt={props.id} />
        </div>
    
)

export default Picture;