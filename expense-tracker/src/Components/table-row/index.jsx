import React from "react";

export default function TableRow({amount,description,date,type}) {
    return(
        <tr>
            <td>${amount}</td>
            <td>{description}</td>
            <td>{date}</td>
            <td>{type}</td>
        </tr>
    )
}