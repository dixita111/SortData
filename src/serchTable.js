import "./table.css";
import React from "react";

function Search({ data }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.fnm}</td>
                <td>{item.lnm}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Search;
