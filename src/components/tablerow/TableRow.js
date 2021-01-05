import React from "react";
import "./TableRow.css";

function TableRow({ año, hecho }) {
  return (
    <tr>
      <td className="year">
        <strong>{año}</strong>
      </td>
      <td>-</td>
      <td>{hecho}</td>
    </tr>
  );
}

export default TableRow;
