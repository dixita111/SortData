import "./table.css";

function Sort({ demo }) {
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
          {demo?.map((item, index) => {
            return (
              <tr>
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

export default Sort;
