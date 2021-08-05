import React from 'react';

const styles = {
    heading: {
        padding: "2rem",
        textAlign: "center",
        fontWeight: 900,
        fontSize: "2rem",
    },

    light: {
        fontWeight: 100,
    },
};

const Header = () => (
    <h1 className={styles.heading}>
        <span className={styles.light}>Weather</span> Forecast
    </h1>
);

export default Header;