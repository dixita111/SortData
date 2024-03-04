import "./table.css";

function Sort({ demo }) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>SchoolName</th>
                        <th>Course</th>
                    </tr>
                </thead>
                <tbody>
                    {demo?.map((item, index) => {
                        return (
                            <tr>
                                <td>{item.rno}</td>
                                <td>{item.fname}</td>
                                <td>{item.school}</td>
                                <td>{item.course}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default Sort;
