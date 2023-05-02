import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const fetchPassengerData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/passengers`);
        return response.data;
    } catch (error) {
        console.error('Error fetching passenger data:', error);
        return [];
    }
};
