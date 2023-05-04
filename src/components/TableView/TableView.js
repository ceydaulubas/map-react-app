import React from 'react';
import { useRouting } from '../../contexts/RoutingContext';

import {
    StyledTable,
    StyledHeader,
    StyledHeaderCell,
    StyledRow,
    StyledCell,
    TableWrapper
} from './TableView.sc.js';

const TableView = () => {
    const { enrichedPassengers } = useRouting();
    console.log('enrichedPassengers', enrichedPassengers);
    const { passengers } = useRouting();

    return (
        <TableWrapper>
            <StyledTable>
                <StyledHeader>
                    <tr>
                        <StyledHeaderCell>Name</StyledHeaderCell>
                        <StyledHeaderCell>Duration</StyledHeaderCell>
                        <StyledHeaderCell>Order</StyledHeaderCell>
                    </tr>
                </StyledHeader>
                <tbody>
                    {passengers.map((passenger) => (
                        <StyledRow key={passenger.id}>
                            <StyledCell>{passenger.name}</StyledCell>
                            <StyledCell>
                                {passenger.tripDuration
                                    ? `${passenger.tripDuration.toFixed(2)} min`
                                    : 'N/A'}
                            </StyledCell>
                            <StyledCell>{passenger.pickUpPointOrder}</StyledCell>
                        </StyledRow>
                    ))}
                </tbody>
            </StyledTable>
        </TableWrapper>
    );
};

export default TableView;
