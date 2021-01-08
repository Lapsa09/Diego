import React, { useEffect, useState } from "react";
import TableRow from "../tablerow/TableRow";
import axios from "axios";
import "./Table.css";

function Table() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://guarded-tor-38591.herokuapp.com/api")
      .then((res) => setData(res.data));
  }, []);
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
