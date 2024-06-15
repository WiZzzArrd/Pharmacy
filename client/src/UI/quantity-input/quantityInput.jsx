import React, { useState } from 'react';
import style from "./input.module.css"

const QuantityInput = ({ initialQuantity = 1, min = 1, max = 100, onQuantityChange }) => {
    const [quantity, setQuantity] = useState(initialQuantity);

    const handleChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            const numericValue = parseInt(value, 10);
            if (numericValue >= min && numericValue <= max) {
                setQuantity(numericValue);
                if (onQuantityChange) {
                    onQuantityChange(numericValue);
                }
            } else if (value === '') {
                setQuantity('');
                if (onQuantityChange) {
                    onQuantityChange('');
                }
            }
        }
    };

    const handleBlur = () => {
        if (quantity === '') {
            setQuantity(min);
            if (onQuantityChange) {
                onQuantityChange(min);
            }
        }
    };

    return (
        <div>
            <input
                className={style.inp}
                type="text"
                value={quantity}
                onChange={handleChange}
                onBlur={handleBlur}
                inputMode="numeric"
                pattern="[0-9]*"
            />
        </div>
    );
};

export default QuantityInput;