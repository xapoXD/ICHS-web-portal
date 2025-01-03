import React, { useState, useEffect } from 'react';
import './Table.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import TableView from './custom/TableComponent'; // Import the correct component

const Table = () => {
    const [formData, setFormData] = useState({
        alcoholF: false,
        vegieAndFruitF: false,
        psychologicalF: false,
        hypertenseF: false,
        diabetesF: false,
        smokingF: false,
        dyslipidemicF: false,
        obesityF: false,
        physicalF: false,
    });

    const [selectedFactors, setSelectedFactors] = useState(["", "", ""]);
    const [mapData, setMapData] = useState(null); // Initialize mapData as null for clarity

    useEffect(() => {
        // Log mapData whenever it changes
        console.log('Updated mapData:', mapData);
    }, [mapData]);

    const handleChange = (selectedValue, index) => {
        if (selectedValue === "") {
            const newSelectedFactors = [...selectedFactors];
            newSelectedFactors[index] = "";
            setSelectedFactors(newSelectedFactors);
            setFormData({ ...formData, [selectedFactors[index]]: false });
        } else if (!selectedFactors.includes(selectedValue)) {
            const newSelectedFactors = [...selectedFactors];
            setFormData({ ...formData, [selectedFactors[index]]: false });
            newSelectedFactors[index] = selectedValue;
            setSelectedFactors(newSelectedFactors);
            setFormData({ ...formData, [selectedValue]: true });
        } else {
            alert("You have already selected this risk factor.");
        }
    };

    const factorLabels = {
        physicalF: 'Fyzická nečinnost',
        alcoholF: 'Nadměrná konzumace alkoholu',
        diabetesF: 'Diabetes mellitus',
        smokingF: 'Kouření',
        vegieAndFruitF: 'Nedostatečná konzumace ovoce a zeleniny',
        psychologicalF: 'Psychosociální faktory',
        hypertenseF: 'Hypertenze',
        dyslipidemicF: 'Dyslipidémie',
        obesityF: 'Obezita'
    };

    const availableFactors = Object.keys(formData);

    const submit = async (e, formData) => {
        e.preventDefault();
        console.log(formData);

        try {
            const response = await fetch('http://192.168.68.114:5085/TableFactorCompute', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            console.log(response);

            if (response.ok) {
                const regionData = await response.json();
                console.log('Received customResponse from server:', regionData);
                setMapData(regionData);
            } else {
                console.error('Failed to submit form data');
            }
        } catch (error) {
            console.error('Error during form submission', error);
        }
    };

    return (
        <div className="table-page">
            <form className="choose-risk-factors-section" onSubmit={(e) => submit(e, selectedFactors)}>

                <div className='risk-header'>
                    <h2>Vyberte rizikové faktory</h2>
                </div>

                <div className="dropdown-section">
                    {[0, 1, 2].map(index => (
                        <div className="dropdown-column" key={index}>
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" id={`dropdown-basic-${index}`}>
                                    {selectedFactors[index] ? factorLabels[selectedFactors[index]] : "Select a factor"}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => handleChange("", index)}>Select a factor</Dropdown.Item>
                                    {availableFactors.map((key) => (
                                        <Dropdown.Item
                                            key={key}
                                            onClick={() => handleChange(key, index)}
                                            active={selectedFactors[index] === key}
                                        >
                                            {factorLabels[key]}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    ))}
                </div>

                <Button 
                    as="input" 
                    type="submit"
                    value="Vyhodnotit" 
                    style={{
                        borderRadius: '15px',
                        fontSize: '28px',                            
                        height: '60px',
                        width: '250px',
                        marginBottom: '10px',
                    }}
                />
            </form>

            <div className="table-section">
                <div className='table-header'>
                    <h2>Výsledek vyhledávání</h2>
                </div>

                <div className="big-element">
                    {/* Pass mapData as 'data' prop to TableView */}
                    <TableView data={mapData} />
                </div>
            </div>
        </div>
    );
};

export default Table;
