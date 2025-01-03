import React from 'react';
import ToggleComponent from './custom/ToggleComponent.js';

const RizikoveFaktory = () => {


    const containerStyle = {
        textAlign: 'justify',
        margin: '100px',
       // borderStyle: 'solid',
        boxSizing: 'border-box',
        justifyContent: 'center',

    };

    const textStyle = {
        lineHeight: '2',

    };

    return (
        <div style={containerStyle}>


            <div style={{ textAlign: 'justify' }}>
                <h2>Ischemická choroba srdeční a proč jsou rizikové faktory důležité?</h2>

                <p style={textStyle}>
                    Ischemická choroba srdeční vzniká až z 99 % na základě poškození věnčitých tepen aterosklerózou. To má v pozdější době za následek nerovnováhu mezi nabídkou a skutečnou potřebou kyslíku pro myokard a vzniká tak ischemie. Ischemická choroba srdeční se může manifestovat od zcela asymptomatického onemocnění až po náhlou srdeční smrt. Mezi ischemické choroby srdeční lze zařadit anginu pectoris, akutní infarkt myokardu, pokračující infarkt myokardu či chronickou ischemickou chorobu srdeční. Ve světe zemřelo v roce 2019 přibližně 11 340 000 lidí, z toho 11 % populace zemřelo na kardiovaskulární onemocnění. V ČR zemře každoročně přibližně 180 000 lidí, z toho 23 353 pacientů s ischemickou chorobou srdeční. Tyto čísla dostatečně poukazují na rozšířenou diagnózu a je velmi důležité se tomuto onemocnění dostatečně věnovat a zaměřit se na prevenci rizikových faktorů, abychom mohli lépe nemoc léčit a reagovat dostatečně dopředu.</p>
            </div>

            <hr
                style={{
                    backgroundColor: 'gray',
                    height: '2px',
                    marginBottom: '30px'
                }}
            />

            <div>


                <ToggleComponent
                    title="HYPERTENZE - VYSOKÝ KREVNÍ TLAK"
                    initialOpenState={false} 
                    content="Hypertenze patří celosvětově mezi jedny z nejčastějších kariovaskulární onemocnění. Za hypertenzi se označuje opakovaně naměřené zvýšení krevního tlaku nad 140/90 mmHg. První hodnota před lomítkem připadá na systolický tlak, ten odpovídá výši tlaku v cévách během stahu srdce a vypuštění krve do krevního oběhu. Druhé číslo za lomítkem udává diastolický tlak, ten určuje výši vlaku v klidové fázi srdce (v cyklu, kdy je srdce uvolněné). Hodnota optimálního tlaku se může lišit od osoby k osobě, roli hraje například, pokud osoba trpí diabetem, věku, v souvislostí s činností během meřícího dne. Proto každá osoba může mít optimální hodnoty jinde, ovšem orientačne je ideální hodnota je stanovena na 120/80 mmHg . Pokud se naměřené hodnoty pohybují v rozmezí nad 140 systolického tlaku a nad 90 diastolycikého, hovoříme o hypertenzi."
                />

                <ToggleComponent
                    title="NADMĚRNÁ KONZUMACE ALKOHOLU"
                    initialOpenState={false}
                    content="Nadměrná konzumace alkoholu může mít vliv na nemoci trávicí soustavy, onemocnění jater, poruchy a poškození mozku a také onemocnění srdce. Mimo jiné nadměrná konzumace alkoholu vede zpravidla i k závislosti na něm. Závislost se často projevuje a je spojena se změnou v psychice člověka a může vést až k depresím. "
                />

                <ToggleComponent
                    title="DIABETES MELLITUS"
                    initialOpenState={false}
                    content="Nadměrná konzumace alkoholu může mít vliv na nemoci trávicí soustavy, onemocnění jater, poruchy a poškození mozku a také onemocnění srdce. Mimo jiné nadměrná konzumace alkoholu vede zpravidla i k závislosti na něm. Závislost se často projevuje a je spojena se změnou v psychice člověka a může vést až k depresím."
                />

                <ToggleComponent
                    title="NEDOSTATEČNÁ KONZUAMCE OVOCE A ZELENINY"
                    initialOpenState={false}
                    content="Ovoce a zelenina přináší organizmu mnoho prospěšných látek, které se podílejí na snížení výskytu právě kardiovaskulárních onemocnění. Rostlinné produkty jsou dobrý zdrojem vlákniny a jelikož jsou z velké části tvořeny vodou, jsou ideální potravinou pro snížení svého denního kalorického příjmu. To může zabránit rozvinnutí diabetu (cukrovky) a s ní spojené rizikové faktory."
                />

                <ToggleComponent
                    title="PSYCHOSOCIÁLNÍ FAKTORY"
                    initialOpenState={false} 
                    content="Ovoce a zelenina přináší organizmu mnoho prospěšných látek, které se podílejí na snížení výskytu právě kardiovaskulárních onemocnění. Rostlinné produkty jsou dobrý zdrojem vlákniny a jelikož jsou z velké části tvořeny vodou, jsou ideální potravinou pro snížení svého denního kalorického příjmu. To může zabránit rozvinnutí diabetu (cukrovky) a s ní spojené rizikové faktory."
                />

                <ToggleComponent
                    title="KOUŘENÍ"
                    initialOpenState={false}
                    content="Ovoce a zelenina přináší organizmu mnoho prospěšných látek, které se podílejí na snížení výskytu právě kardiovaskulárních onemocnění. Rostlinné produkty jsou dobrý zdrojem vlákniny a jelikož jsou z velké části tvořeny vodou, jsou ideální potravinou pro snížení svého denního kalorického příjmu. To může zabránit rozvinnutí diabetu (cukrovky) a s ní spojené rizikové faktory."
                />

                <ToggleComponent
                    title="DYSLIPIDÉMIE"
                    initialOpenState={false} 
                    content="Ovoce a zelenina přináší organizmu mnoho prospěšných látek, které se podílejí na snížení výskytu právě kardiovaskulárních onemocnění. Rostlinné produkty jsou dobrý zdrojem vlákniny a jelikož jsou z velké části tvořeny vodou, jsou ideální potravinou pro snížení svého denního kalorického příjmu. To může zabránit rozvinnutí diabetu (cukrovky) a s ní spojené rizikové faktory."
                />

                <ToggleComponent
                    title="OBEZITA"
                    initialOpenState={false} 
                    content="Ovoce a zelenina přináší organizmu mnoho prospěšných látek, které se podílejí na snížení výskytu právě kardiovaskulárních onemocnění. Rostlinné produkty jsou dobrý zdrojem vlákniny a jelikož jsou z velké části tvořeny vodou, jsou ideální potravinou pro snížení svého denního kalorického příjmu. To může zabránit rozvinnutí diabetu (cukrovky) a s ní spojené rizikové faktory."
                />

                <ToggleComponent
                    title="FYZICKÁ NEČINNOST"
                    initialOpenState={false} 
                    content="Ovoce a zelenina přináší organizmu mnoho prospěšných látek, které se podílejí na snížení výskytu právě kardiovaskulárních onemocnění. Rostlinné produkty jsou dobrý zdrojem vlákniny a jelikož jsou z velké části tvořeny vodou, jsou ideální potravinou pro snížení svého denního kalorického příjmu. To může zabránit rozvinnutí diabetu (cukrovky) a s ní spojené rizikové faktory."
                />


            </div>
        </div>
    );
};

export default RizikoveFaktory;