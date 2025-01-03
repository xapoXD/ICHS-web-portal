import React, { useState } from 'react';
import './Map.css'; // Import your CSS file for styling
import MapComponent from './custom/MapComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

const MapPage = () => {
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

    const removeFactor = (index) => {
        const factorToRemove = selectedFactors[index];
        if (factorToRemove) {
            const newSelectedFactors = [...selectedFactors];
            newSelectedFactors[index] = "";
            setSelectedFactors(newSelectedFactors);
            setFormData({ ...formData, [factorToRemove]: false });
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

    const [mapData, setMapData] = useState({});

    const submit = async (e, formData) => {
        e.preventDefault();
        console.log(formData);

        try {
            const response = await fetch('http://192.168.68.105:5085/FactorCompute', {
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
                updateMapData(regionData);
            } else {
                console.error('Failed to submit form data');
            }
        } catch (error) {
            console.error('Error during form submission', error);
        }
    };

    const updateMapData = (data) => {
        const newMapData = {};
        data.RegionSummary.forEach(region => {
            newMapData[region.Region] = { value: region.IsActive };
        });

        setMapData(newMapData);
    };

    const [serverResponse, setServerResponse] = useState({});

    const handleFilterClick = (filterNumber) => {
        if (serverResponse && serverResponse[filterNumber]) {
            updateMapData(serverResponse[filterNumber]);
        } else {
            console.error('Server response for the selected filter is unavailable.');
        }
    };

    return (
        <div className="map-page">
            <form className="choose-risk-factors-section" onSubmit={(e) => submit(e, selectedFactors)}>
                <div className="tip">
                    <p className="tip-text">
                        <strong>TIP:</strong> Rizikové faktory je možno vybírat pouze tři najednou. Pro odebrání rizikového faktoru
                        odškrtněte daný rizikový faktor. Doporučujeme si pro výběr vybrat pro Vás nejdůležitější první
                        faktor a následně dle možnosti vyzkoušet a kombinovat dostupné další rizikové faktory. Výsledky
                        se zobrazují graficky na mapě v dolní části stránky.
                    </p>
                    <div className="detail-button">Zobrazit detailnější data</div>
                </div>

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

            <div className="map-section">
                <div className='map-header'>
                    <h2>MAPA RIZIKOVÝCH FAKTORŮ</h2>
                </div>

                <div className='container'>
                    <div className="left-container">
                        <div className="risk-factors">
                            <h2>Vybrané rizikové faktory</h2>
                            <ul style={{ display: 'block' }}>
                                {selectedFactors.map((factor, index) => (
                                    factor && (
                                        <li key={index}>
                                            {factorLabels[factor]}
                                            <button
                                                className="remove-button"
                                                onClick={() => removeFactor(index)}
                                            >-</button>
                                        </li>
                                    )
                                ))}
                            </ul>
                        </div>
                        <div className="legend">
                            <h2>Legenda</h2>
                            <div className="filter">
                                <p><span className="color-box red"></span> Krajový průměr je větší než celostátní</p>
                                <p><span className="color-box green"></span> Krajový průměr je menší než celostátní</p>
                            </div>
                        </div>
                        <div className="legend">
                            <h2>Postupné zobrazení</h2>
                            <h3 onClick={() => handleFilterClick('filter1')}>FILTR #1</h3>
                            <h3 onClick={() => handleFilterClick('filter2')}>FILTR #2</h3>
                            <h3 onClick={() => handleFilterClick('filter3')}>FILTR #3</h3>
                        </div>
                    </div>

                    <div className="big-element">
                        <MapComponent serverResponse={mapData} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MapPage;
