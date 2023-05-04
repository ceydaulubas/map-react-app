
import styled from 'styled-components';

export const TableWrapper = styled.div`
  margin: 20px;
  overflow-x: auto; 
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const StyledHeader = styled.thead`
  background-color: #ff8c00;
`;

export const StyledHeaderCell = styled.th`
  padding: 8px;
  text-align: left;
  font-weight: bold;
  color: white;
  border: 1px solid #ccc;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const StyledCell = styled.td`
  padding: 8px;
  border: 1px solid #ccc;

  @media (max-width: 768px) {
    font-size: 14px; 
    padding: 4px; 
  }
`;
