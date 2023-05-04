

import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 80%;
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
    color: #ff7f50;
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
`;

export const Info = styled.p`
    color: #666;
    font-size: 18px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
`;

export const Label = styled.span`
    font-weight: 600;
`;