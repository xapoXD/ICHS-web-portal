import React from 'react';
import alcoholPic from './imagesRiskFactors/beer.png';
import diabetesPic from './imagesRiskFactors/blood-test.png';
import hypertensePic from './imagesRiskFactors/hearth.png';
import dyslipidPic from './imagesRiskFactors/polyunsaturated-fat.png';
import obesityPic from './imagesRiskFactors/overweight.png';
import physicalPic from './imagesRiskFactors/jogging.png';
import psychosocPic from './imagesRiskFactors/brain.png';
import smokingPic from './imagesRiskFactors/smoking.png';
import veggiePic from './imagesRiskFactors/broccoli.png';

const ResponseComponent = ({ serverResponse }) => {
    const baseRectangleStyle = {
        width: '1000px',
        height: '400px',
        backgroundColor: '#ADADAD',
        borderRadius: '20px',
    };

    const smallerRectangleStyle = {
        width: '300px',
        height: '100px',
        boxSizing: 'border-box',
        margin: '15px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
    };

    const imageStyle = {
        width: '50px',
        height: '50px',
        marginRight: '10px',
    };

    const textStyle = {
        color: 'white',
        margin: 0,
        textAlign: 'center',
    };

    const order = ['diabetesF', 'alcoholF', 'dyslipidemicF', 'obesityF', 'psychosocialF', 'physicalF', 'hypertenseF', 'vegieAndFruitF', 'smokingF'];

    const contentMapping = {
        alcoholF: { image: alcoholPic, text: 'NADMĚRNÁ KONZUMACE ALKOHOLU', anchor: 'alcohol' },
        diabetesF: { image: diabetesPic, text: 'DIABETES', anchor: 'diabetes' },
        dyslipidemicF: { image: dyslipidPic, text: 'DYSLIPIDÉMIE', anchor: 'dyslipidemic' },
        psychosocialF: { image: psychosocPic, text: 'PSYCHOSOCIÁLNÍ FAKTORY', anchor: 'psychosocial' },
        obesityF: { image: obesityPic, text: 'OBEZITA', anchor: 'obesity' },
        physicalF: { image: physicalPic, text: 'FYZICKÁ NEČINNOST', anchor: 'physical' },
        hypertenseF: { image: hypertensePic, text: 'HYPERTENZE', anchor: 'hypertense' },
        smokingF: { image: smokingPic, text: 'KOUŘENÍ', anchor: 'smoking' },
        vegieAndFruitF: { image: veggiePic, text: 'NEDOSTATEČNÁ KONZUAMCE OVOCE A ZELENINY', anchor: 'vegieAndFruit' },
    };

    const smallerRectangles = order.map((key) => {
        const { text, anchor } = contentMapping[key];
        return (
            <div
                key={key}
                style={{
                    ...smallerRectangleStyle,
                    backgroundColor: serverResponse[key] ? '#D25C5C' : '#ADADAD',
                }}
            >
                {contentMapping[key] && contentMapping[key].image && (
                    <a href={`/#${anchor}`} style={{ textDecoration: 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                src={contentMapping[key].image}
                                alt={`Image for ${key}`}
                                style={imageStyle}
                            />
                            <p style={textStyle}>{text}</p>
                        </div>
                    </a>
                )}
            </div>
        );
    });

    return (
        <div>
            <div style={baseRectangleStyle}>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>{smallerRectangles}</div>
            </div>
        </div>
    );
};

export default ResponseComponent;
