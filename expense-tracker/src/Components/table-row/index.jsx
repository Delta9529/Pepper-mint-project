import React from "react";
import './styles.css'

export default function TableRow({amount,description,date,type,onClick}) {
    return(
        <tr>
            <td>${amount}</td>
            <td>{description}</td>
            <td>{date}</td>
            <td>{type}</td>
            <button onClick={onClick}>Delete</button>
        </tr>
    )
}