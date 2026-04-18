import React from 'react';

const GetHyped = () => {
    const containerStyle = {
        display: 'inline-flex',
        flexWrap: 'nowrap',
        whiteSpace: 'nowrap',
        padding: "9px 10px 9px 0", 
        transform: "perspective(430px) rotateY(-28deg) skewY(-4deg)",
        transformOrigin: "left center",
    };

    const spanStyle = {
        backgroundColor: "black",
        display: 'inline-block',
        lineHeight: '1',
        padding: '2px 6px',
        margin: '0',
        fontFamily: '"Anton", sans-serif',
        color: 'white',
        borderRadius: '0 8px 8px 0'
    };

    return (
        
        <div className="mt-5 w-fit">
            <div style={containerStyle}>
                <h1 className="font-bold text-3xl md:text-4xl flex items-center tracking-tighter">
                    <span className="pr-1 text-black">GET</span>
                    <span style={spanStyle}>HYPED</span>
                </h1>
            </div>
        </div>
    );
};

export default GetHyped;