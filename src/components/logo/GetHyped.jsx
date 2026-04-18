import React from 'react';

const GetHyped = () => {
    const containerStyle = {
        display: 'inline-flex',
        padding: "9px 40px",
        borderRadius: "0 20px 20px 0",
        transform : "perspective(430px) rotateY(-28deg) skewY(-4deg)"
    };

    const spanStyle = {
        backgroundColor: "black",
        display: 'inline-block',
        lineHeight: '0.88',
        paddingRight: '2px',
        margin: '0',
        fontFamily: '"Anton", sans-serif',
        color: 'white',
        borderRadius: '0 17px 17px 0'
    }


    return (
        <div className="mt-5 md:max-w-90">
            <div style={containerStyle}>
                <h1 className="font-bold text-4xl font_used"><span>GET</span><span style={spanStyle}>HYPED</span></h1>
            </div>
        </div>
    );
};

export default GetHyped;