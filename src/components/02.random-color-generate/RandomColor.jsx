// import React from 'react'
import './random-color.css'
import { useState, useEffect } from "react"

const RandomColor = () => {

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    const randomColorUtility = (len) => {
        return Math.floor(Math.random() * len);
    }

    const createHexColor = () => {

        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor);
    }

    const createRgbColor = () => {
        let r = randomColorUtility(256);
        let g = randomColorUtility(256);
        let b = randomColorUtility(256);

        let rgbColor = `rgb(${r}, ${g}, ${b})`;
        setColor(rgbColor);
    }

    useEffect(() => {

        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (typeOfColor === 'hex') createHexColor();
        else createRgbColor();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [typeOfColor]);

    return (
        <div className="container"
            style={{
                background: color
            }}>
            <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Create RGB color</button>
            <button
                onClick={
                    typeOfColor === 'hex'
                        ? createHexColor
                        : createRgbColor
                }
            >
                Generate Random Color
            </button>

            <div className="conten">
                <h3>{typeOfColor === 'hex' ? 'HEX' : 'RGB'}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}

export default RandomColor