// PassengerForm.js
import React, { useState } from 'react';
import { useRouting } from '../../contexts/RoutingContext';
import axios from 'axios';
import {
    FormWrapper,
    StyledForm,
    StyledLabel,
    StyledInput,
    StyledButton,
    InputGroup,
    InputRow,
    IconWrapper,
} from './PassengerForm.sc';
import { MdPerson, MdLocationOn, MdMyLocation } from 'react-icons/md';

const PassengerForm = () => {
    const { setPassengers } = useRouting();
    const [name, setName] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const [destinationLat, setDestinationLat] = useState('');
    const [destinationLng, setDestinationLng] = useState('');

    const API_BASE_URL = 'http://localhost:5000';

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPassenger = {
            name,
            pickUpPoint: {
                lat: parseFloat(lat),
                lng: parseFloat(lng),
            },
            destination: {
                lat: parseFloat(destinationLat),
                lng: parseFloat(destinationLng),
            },
        };

        try {
            const response = await axios.post(`${API_BASE_URL}/passengers`, newPassenger);
            setPassengers((prevPassengers) => [...prevPassengers, response.data]);

            console.log("newPassenger", newPassenger)
            // Clear the form
            setName('');
            setLat('');
            setLng('');
            setDestinationLat('');
            setDestinationLng('');
        } catch (error) {
            console.error('Error adding new passenger:', error);
        }
    };

    return (
        <FormWrapper>
            <StyledForm onSubmit={handleSubmit}>
                <InputGroup>
                    <StyledLabel>
                        <IconWrapper>
                            <MdPerson />
                        </IconWrapper>
                        Name:
                        <StyledInput type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </StyledLabel>
                </InputGroup>

                <InputRow>
                    <InputGroup>
                        {/* Passenger location inputs */}
                        <StyledLabel>
                            <IconWrapper>
                                <MdLocationOn />
                            </IconWrapper>
                            Lat:
                            <StyledInput type="number" value={lat} onChange={(e) => setLat(e.target.value)}
                            />
                        </StyledLabel>
                    </InputGroup>
                    <InputGroup>
                        <StyledLabel>
                            <IconWrapper>
                                <MdLocationOn />
                            </IconWrapper>
                            Long:
                            <StyledInput type="number" value={lng} onChange={(e) => setLng(e.target.value)} />
                        </StyledLabel>
                    </InputGroup>
                </InputRow>

                <InputRow>
                    <InputGroup>
                        {/* Destination location inputs */}
                        <StyledLabel>
                            <IconWrapper>
                                <MdMyLocation />
                            </IconWrapper>
                            Destination Lat:
                            <StyledInput
                                type="number"
                                value={destinationLat}
                                onChange={(e) => setDestinationLat(e.target.value)}
                            />
                        </StyledLabel>
                    </InputGroup>
                    <InputGroup>
                        <StyledLabel>
                            <IconWrapper>
                                <MdMyLocation />
                            </IconWrapper>
                            Destination Long:
                            <StyledInput
                                type="number"
                                value={destinationLng}
                                onChange={(e) => setDestinationLng(e.target.value)}
                            />
                        </StyledLabel>
                    </InputGroup>
                </InputRow>

                <InputGroup>
                    <StyledButton type="submit">Add Passenger</StyledButton>
                </InputGroup>
            </StyledForm>
        </FormWrapper>
    );
};

export default PassengerForm;
