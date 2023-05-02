import { useRouting } from '../contexts/RoutingContext';

const TableView = () => {
    const { passengers } = useRouting();

    return (
        <div className="table-view">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Trip Duration</th>
                        <th>Pick Up Point</th>
                    </tr>
                </thead>
                <tbody>
                    {passengers.map((passenger, index) => (
                        <tr key={index}>
                            <td>{passenger.name}</td>
                            <td>{passenger.tripDuration}</td>
                            <td>{passenger.pickUpPointOrder}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableView