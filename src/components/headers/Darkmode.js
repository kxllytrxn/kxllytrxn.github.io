import '../../App.css';
import React from 'react';

const Darkmode = ({ handleChange, isDarkMode }) => {
    return (
        <div className="toggleContainer">
            <input
                type="checkbox"
                id="check"
                class="toggle"
                onChange={handleChange}
                checked={isDarkMode}
            />
            <label htmlFor="check"></label>

        </div>
    )
};

export default Darkmode;