// NavigationBar.js
import React, { useState } from 'react';
import ResponseComponent from './custom/ResponseComponent';
import './Dotaznik.css';
import { Checkbox } from 'pretty-checkbox-react'; // , Radio, Switch }
import '@djthoms/pretty-checkbox';


function Dotaznik() {

    const [serverResponse, setServerResponse] = useState({
        alcoholF: false,
        vegieAndFruitF: false,
        psychologicalF: false,
        hypertenseF: false,
        diabetesF: false,
        smokingF: false,
        dyslipidemicF: false,
        obesityF: false,
        physicalF: false,

        score: null,
    });

    const submit = async (e, formData) => {
        e.preventDefault();
        //xxconsole.log(formData);
        // Make the API request
        try {
            const response = await fetch('http://192.168.68.105:5085/DotaznikCompute', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData),

            });
            console.log(response);

            if (response.ok) {

                const riskFactors = await response.json();
                console.log('Received customResponse from server:', riskFactors);
                setServerResponse(riskFactors.Value);
                //redirect?
            } else {
                console.error('Failed to submit form data');
            }
        } catch (error) {
            console.error('Error during form submission', error);
        }
    };


    const [formData, setFormData] = useState({
        Name: '',
        LastName: '',
        DateOfBirth: '',
        AddressCity: '',
        AddressPostalCode: '',
        AddressCountry: '',
        AddressStreetNum: '',
        Height: null,
        Weight: null,

        Physicalactivity: null,
        Smoking: null,
        Alcohol: null,

        PressureSys: '',
        PressureDias: '',

        VeggieFruit: null,
        Stress: null,
        Sugar: '',
        Cholesterol: '',

        Gender: 'other'
    });


    const handleChange = (e) => {
        let updatedValue;

        if (e.target.type === 'checkbox') {
            // Handle checkbox input
            if (
                [
                    'Physicalactivity',
                    'Smoking',
                    'Alcohol',
                    'VeggieFruit',
                    'Stress',
                    'PressureCheckbox',
                    'SugarCheckbox',
                    'CholesterolCheckbox',
                    'GenderCheckbox',
                ].includes(e.target.name)
            ) {
                if (e.target.name === 'PressureCheckbox') {
                    // Handle PressureCheckbox separately
                    updatedValue = e.target.checked ? null : formData[e.target.name];
                    setFormData({
                        ...formData,
                        PressureSys: updatedValue,
                        PressureDias: updatedValue,
                    });
                } else if (e.target.name === 'SugarCheckbox') {
                    // Handle PressureCheckbox separately
                    updatedValue = e.target.checked ? null : formData[e.target.name];
                    setFormData({
                        ...formData,
                        Sugar: updatedValue,
                    });

                }
                else if (e.target.name === 'CholesterolCheckbox') {
                    // Handle PressureCheckbox separately
                    updatedValue = e.target.checked ? null : formData[e.target.name];
                    setFormData({
                        ...formData,
                        Cholesterol: updatedValue,
                    });

                }
                else if (e.target.name === 'GenderCheckbox') {
                    if (e.target.checked) {
                        updatedValue = e.target.value; // This will be 'men', 'woman', or 'other'
                    } else {
                        updatedValue = formData[e.target.name]; // Keep the current gender value if unchecked
                    }
                    setFormData({
                        ...formData,
                        Gender: updatedValue,
                    });
                } 

                else {
                    // Handle other checkboxes
                    updatedValue = e.target.value === 'ANO';
                    setFormData({
                        ...formData,
                        [e.target.name]: updatedValue,
                    });
                }
            }
            // Add similar conditions for other checkboxes
        } else {
            // Handle other input types
            updatedValue = e.target.value;
            setFormData({
                ...formData,
                [e.target.name]: updatedValue,
            });
        }

        console.log('Aktualni hodnota pole ' + e.target.name + ' je: ' + updatedValue);
    };





    return (

        <div>

            <form onSubmit={(e) => submit(e, formData)}>

                <div style={{ lineHeight: '2' }}>
                    <h2>K čemu slouží dotazník?</h2>
                    <p>Dotazník slouží pro zhodnocení, jestli jste ohrožen/á nějaký rizikovým faktorem Ischemické choroby srdeční. Odpovídejte pravdivě a na konci dotazíku, se Vám zobrazí seznam rizikových faktorů, které by Vás mohly potencionálně ohrožovat. Věnujte poté chvíli svého času a prostudujte si informace na stránce Rizikové faktory, popřípadě se obraťe na stránku Prevence.</p>

                    <hr
                        style={{
                            backgroundColor: '#119777',
                            height: '3px',
                            marginBottom: '30px'
                        }}
                    />

                </div>

                <div>
                    <label>
                        Jméno:
                        <input
                            type="text"
                            name="Name"
                            value={formData.Name}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Příjmení:
                        <input
                            type="text"
                            name="LastName"
                            value={formData.LastName}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Datum narození:
                        <input
                            type="date"
                            name="DateOfBirth"
                            value={formData.DateOfBirth}
                            onChange={handleChange} />
                    </label>
                </div>


                
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ marginRight: '100px' }}>
                        <label>
                            Pohlaví?
                        </label>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', marginRight: '100px' }}>
                        <Checkbox 
                            // man Gender TRUE
                            shape="round"
                            variant="fill"
                            name="GenderCheckbox"
                            value="men"
                            checked={formData.Gender === 'men'}
                            onChange={handleChange}
                        />
                        <label>Muž</label>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', marginRight: '50px' }}>
                        <Checkbox
                            // woman Gender FALSE
                            shape="round"
                            variant="fill"
                            name="GenderCheckbox"
                            value="woman"
                            checked={formData.Gender === 'woman'}
                            onChange={handleChange}
                        />
                        <label>Žena</label>
                    </div>


                </div>



                <label>
                        Adresa bydliště:
                </label>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>
                        Ulice a číslo popisné
                        <input type="text" name="AddressStreetNum" value={formData.AddressStreetNum} onChange={handleChange} />
                    </label>
                    <label>
                        Město
                        <input type="text" name="AddressCity" value={formData.AddressCity} onChange={handleChange} />
                    </label>
                    <label>
                        PSČ
                        <input type="text" name="AddressPostalCode" value={formData.AddressPostalCode} onChange={handleChange} />
                    </label>
                    <label>
                        Stát
                        <input type="text" name="AddressCountry" value={formData.AddressCountry} onChange={handleChange} />
                    </label>
                </div>

                <hr
                    style={{
                        backgroundColor: '#888888',
                        height: '3px',
                        marginBottom: '30px'
                    }}
                />

                <div>
                    <label>
                        Výška:
                        <input type="value" name="Height" value={formData.Height} onChange={handleChange} required />
                    </label>
                </div>

                <div>
                    <label>
                        Váha:
                        <input type="value" name="Weight" value={formData.Weight} onChange={handleChange} required />
                    </label>
                </div>

                <hr
                    style={{
                        backgroundColor: '#888888',
                        height: '3px',
                        marginBottom: '30px'
                    }}
                />


                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ marginRight: '100px' }}>
                        <label>
                            Pro udržení svého zdraví je doporučováno alespoň 150 minut přiměřené fyzické akivity týdně. Splňujete tento limit?
                        </label>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', marginRight: '100px' }}>
                        <Checkbox
                            shape="round"
                            variant="fill"
                            name="Physicalactivity"
                            value="ANO"
                            checked={formData.Physicalactivity === true}
                            onChange={handleChange}
                        />
                        <label>ANO</label>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', marginRight: '50px' }}>
                        <Checkbox
                            shape="round"
                            variant="fill"
                            name="Physicalactivity"
                            value="NE"
                            checked={formData.Physicalactivity === false}
                            onChange={handleChange}
                        />
                        <label>NE</label>
                    </div>
                </div>



                <hr
                    style={{
                        backgroundColor: '#888888',
                        height: '3px',
                        marginBottom: '30px'
                    }}
                />


                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <label style={{ marginRight: '50px' }}>
                        Kouříte pravidelně?
                    </label>

                    <label style={{ marginRight: '50px' }}>
                        <Checkbox
                            shape="round"
                            variant="fill"
                            name="Smoking"
                            value="ANO"
                            checked={formData.Smoking === true}
                            onChange={handleChange}
                        />
                        ANO
                    </label>


                    <label style={{ marginRight: '50px' }}>
                        <Checkbox
                            shape="round"
                            variant="fill"
                            name="Smoking"
                            value="NE"
                            checked={formData.Smoking === false}
                            onChange={handleChange}
                        />
                        NE
                    </label>

                </div>


                <hr
                    style={{
                        backgroundColor: '#888888',
                        height: '3px',
                        marginBottom: '30px'
                    }}
                />


                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <label style={{ marginRight: '50px' }}>
                        Pijete alkohol pravidelně na týdenní bázi?
                    </label>

                    <label style={{ marginRight: '50px' }}>
                        <Checkbox
                            shape="round"
                            variant="fill"
                            name="Alcohol"
                            value="ANO"
                            checked={formData.Alcohol === true}
                            onChange={handleChange}
                        />
                        ANO
                    </label>

                    <label style={{ marginRight: '50px' }}>
                        <Checkbox
                            shape="round"
                            variant="fill"
                            name="Alcohol"
                            value="NE"
                            checked={formData.Alcohol === false}
                            onChange={handleChange}
                        />
                        NE
                    </label>

                </div>


                <hr
                    style={{
                        backgroundColor: '#888888',
                        height: '3px',
                        marginBottom: '30px'
                    }}
                />


                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <label style={{ marginRight: '10px' }}>
                        Jaký máte k dnešnímu dni tlak?
                    </label>

                    <input
                        type="text"
                        name="PressureSys"
                        value={formData.PressureSys === null ? '' : formData.PressureSys}
                        onChange={handleChange}
                        placeholder="Systolický"
                        style={{ marginRight: '5px', width: '100px' }}
                    />

                    <span>/</span>

                    <input
                        type="text"
                        name="PressureDias"
                        value={formData.PressureDias === null ? '' : formData.PressureDias}
                        placeholder="Diastolický"
                        style={{ marginLeft: '5px', marginRight: '50px', width: '100px' }}
                        onChange={handleChange}
                    />

                    <label style={{ marginRight: '20px' }}>
                        <Checkbox
                            shape="round"
                            variant="fill"
                            name="PressureCheckbox"
                            checked={formData.PressureSys === null && formData.PressureDias === null}
                            onChange={handleChange}
                        />
                        Nevím
                    </label>

                </div>




                <hr
                    style={{
                        backgroundColor: '#888888',
                        height: '3px',
                        marginBottom: '30px'
                    }}
                />


                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <label style={{ marginRight: '50px' }}>
                        Konzumujete pravidelně, optimálně každý den ovoce a zeleninu?
                    </label>

                    <label style={{ marginRight: '50px' }}>
                        <Checkbox
                            shape="round"
                            variant="fill"
                            name="VeggieFruit"
                            value="ANO"
                            checked={formData.VeggieFruit === true}
                            onChange={handleChange}
                        />
                        ANO
                    </label>

                    <label style={{ marginRight: '50px' }}>
                        <Checkbox
                            shape="round"
                            variant="fill"
                            name="VeggieFruit"
                            value="NE"
                            checked={formData.VeggieFruit === false}
                            onChange={handleChange}
                        />
                        NE
                    </label>


                </div>


                <hr
                    style={{
                        backgroundColor: '#888888',
                        height: '3px',
                        marginBottom: '30px'
                    }}
                />

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <label style={{ marginRight: '50px' }}>
                        V případě, že pravidelně zažíváte míru stresu, která Vám není komfortní, zaškrtněte možnost ANO.
                    </label>

                    <label style={{ marginRight: '50px' }}>
                        <Checkbox
                            shape="round"
                            variant="fill"
                            name="Stress"
                            value="ANO"
                            checked={formData.Stress === true}
                            onChange={handleChange}
                        />
                        ANO
                    </label>


                    <label style={{ marginRight: '50px' }}>
                        <Checkbox
                            shape="round"
                            variant="fill"
                            name="Stress"
                            value="NE"
                            checked={formData.Stress === false}
                            onChange={handleChange}
                        />
                        NE
                    </label>

                </div>


                <hr
                    style={{
                        backgroundColor: '#888888',
                        height: '3px',
                        marginBottom: '30px'
                    }}
                />

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <label style={{ marginRight: '50px' }}>
                        Jakou máte hladinu cukru v krvi?
                    </label>

                    <input
                        style={{ marginRight: '60px', width: '400px' }}
                        type="text"
                        name="Sugar"
                        value={formData.Sugar === null ? '' : formData.Sugar}
                        onChange={handleChange}

                    />

                    <label style={{ marginRight: '50px' }}>
                        <Checkbox
                            shape="round"
                            variant="fill"
                            name="SugarCheckbox"
                            checked={formData.Sugar === null}
                            onChange={handleChange}>
                        </Checkbox>
                        Nevím
                    </label>

                </div>

                <hr
                    style={{
                        backgroundColor: '#888888',
                        height: '3px',
                        marginBottom: '30px'
                    }}
                />

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <label style={{ marginRight: '50px' }}>
                        Jaká je Vaše hodnota LDL cholesterolu?
                    </label>

                    <input
                        style={{ marginRight: '60px', width: '400px' }}
                        type="text"
                        name="Cholesterol"
                        value={formData.Cholesterol === null ? '' : formData.Cholesterol}
                        onChange={handleChange}

                    />

                    <label style={{ marginRight: '50px' }}>
                        <Checkbox
                            shape="round"
                            variant="fill"
                            name="CholesterolCheckbox"
                            checked={formData.Cholesterol === null}
                            onChange={handleChange}
                        />
                        Nevím
                    </label>

                </div>

                <hr
                    style={{
                        backgroundColor: '#888888',
                        height: '3px',
                    }}
                />



                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxSizing: 'border-box',
                    margin: 'auto',
                    //borderStyle: 'solid',
                    width: '1000px',

                }}>

                    <label style={{ marginLeft: '20px', marginRight: '200px', width: '400px', fontSize: '18px', lineHeight: '2' }}>
                        *Pokud na některou otázku odpovíte "Nevím",
                        navštivte svého praktického lékare a hodnoty si
                        nechte zjistit
                    </label>

                    <input
                        type="submit"
                        value="Odeslat odpovědi"
                        style={{
                            backgroundColor: '#0FCEA0',
                            borderRadius: '10px',
                            fontSize: '28px',
                            color: 'white',
                            padding: '10px',
                            cursor: 'pointer',
                            marginBottom: '125px',
                            border: 'none',
                            height: '60px',
                            width: '350px',
                            marginRight: '20px'
                        }}
                    />

                </div>


                <div style={{marginBottom: '30px'}}>
                    Vaše vyhodnocená míra rizika podle metody SCORE je: <bold style={{color: 'red'}}>{serverResponse.score}</bold>
                </div>
            </form>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '100px'
                }}
            >

                <ResponseComponent serverResponse={serverResponse} />

            </div>

        </div>

    );

}

export default Dotaznik;


