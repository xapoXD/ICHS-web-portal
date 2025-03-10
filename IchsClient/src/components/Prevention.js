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
                <h2>Proč je prevence důležitá?</h2>

                <p style={textStyle}>
                Základem pevného zdraví do vysokého věku je systematická prevence ve všech aspektech zdravého životního stylu. Prevence jako taková je soubor opatření, která by měla zabránit vzniku a rozvinutí onemocnění a zamezit nepříznivým následkům nemoci vedoucí k předčasnému úmrtí. Pečlivě si prostudujte níže uvedené informace o rizikových faktorech
                </p>
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
                    content="TBA"
                />

                <ToggleComponent
                    title="NADMĚRNÁ KONZUMACE ALKOHOLU"
                    initialOpenState={false}
                    content="TBA"
                />

                <ToggleComponent
                    title="DIABETES MELLITUS"
                    initialOpenState={false}
                    content="Cukrovka nás může postihnout v jakémkoliv věku, kdy pouze zlomek všech diabetiků si nemoc rozvine na základě generačních faktorů. U zbytku se považuje za příčinu nevhodný životní styl. Zdravá výživa je samozřejmostí doporučuje se omezení živočisných tuku, zejména uzenin, minimalizovat cukry tzn. například sladkosti, pečivo sladké nápoje. Do jídelníčku je naopak vhodné zařadit co nejvíce zeleninových jídel s vysokým obsahem vitamínů a malou kalorickou náročností. Kouření také napomáhá ke vzniku cukrovky, poškozuje krevní cévy v tkáních a orgánech. Pohybová aktivita také podporuje zdravou funkci metabolizmu, zdroje doporučují alespoň 150 minut středně náročné pohybové aktivy týdně. Zlepšení žuvotního stylu sebou nese i spoustu pozitiv například snížení případné nadváhy k čemu přispívají výše zmíněné body. Spoustu procesů je v našem těle propojených jeden s druhým, stačí začít opravdu jen s málem a postupně přidávat další a další zdravé návyky a uvidíte zlepšení životního stylu již během prvních pár týdnů."
                />

                <ToggleComponent
                    title="NEDOSTATEČNÁ KONZUAMCE OVOCE A ZELENINY"
                    initialOpenState={false}
                    content="TBA"
                />

                <ToggleComponent
                    title="PSYCHOSOCIÁLNÍ FAKTORY"
                    initialOpenState={false} 
                    content="TBA"
                />

                <ToggleComponent
                    title="KOUŘENÍ"
                    initialOpenState={false}
                    content="TBA"
                />

                <ToggleComponent
                    title="DYSLIPIDÉMIE"
                    initialOpenState={false} 
                    content="TBA"
                />

                <ToggleComponent
                    title="OBEZITA"
                    initialOpenState={false} 
                    content="TBA"
                />

                <ToggleComponent
                    title="FYZICKÁ NEČINNOST"
                    initialOpenState={false} 
                    content="TBA"
                />


            </div>
        </div>
    );
};

export default RizikoveFaktory;