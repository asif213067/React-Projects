// import React from 'react'
import styles from './Accordion.module.css'
import { useState } from 'react'
import data from './accordionData'

const Accordion = () => {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    const handleSingleSelection = (currentID) => {
        setSelected(currentID === selected ? null : currentID);
    }

    const handleMultiSelection = (currentID) => {
        const cpyMultiple = [...multiple];
        const findIdxOfCurrID = cpyMultiple.indexOf(currentID);

        if (findIdxOfCurrID === -1) cpyMultiple.push(currentID);
        else cpyMultiple.splice(findIdxOfCurrID, 1);

        setMultiple(cpyMultiple);
    }

    // console.log(selected, multiple);

    return (
        <div className={styles.wrapper}>
            <button
                onClick={() => setEnableMultiSelection(!enableMultiSelection)}
                className={styles.btn}
            >
                {enableMultiSelection ? "Disable" : "Enable"} Multi Selection
            </button>
            {data && data.length > 0 ? (
                data.map((dataItem) => {

                    return <div className={styles.item}>
                        <div
                            onClick={enableMultiSelection
                                ? () => handleMultiSelection(dataItem.id)
                                : () => handleSingleSelection(dataItem.id)
                            }
                            className={styles.title}
                        >
                            <h3>{dataItem.question}</h3>
                            <span>{selected === dataItem.id ? '-' : '+'}</span>
                        </div>
                        {/* {selected === dataItem.id ||
                            multiple.indexOf(dataItem.id) !== -1 ?
                            <div className='content'>
                                {dataItem.answer}
                            </div>
                            : null
                        } */}
                        {enableMultiSelection
                            ? multiple.indexOf(dataItem.id) !== -1 && (
                                <div className={styles.accContent}>{dataItem.answer}</div>
                            )
                            : selected === dataItem.id && (
                                <div className={styles.accContent}>{dataItem.answer}</div>
                            )
                        }
                    </div>
                })
            ) : <div>No data Found!</div>}
        </div>
    )
}

export default Accordion