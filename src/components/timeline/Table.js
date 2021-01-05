import React from "react";
import TableRow from "../tablerow/TableRow";
import "./Table.css";

function Table({ data }) {
  return (
    <table className="timeline">
      <tbody>
        <tr>
          <th>
            <h2>La carrera de Diego:</h2>
          </th>
        </tr>
        {data.map((date) => (
          <TableRow key={date._id} año={date.age} hecho={date.hecho} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
