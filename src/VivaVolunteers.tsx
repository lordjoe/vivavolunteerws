import React from 'react';


function VivaVolunteers() {
    let size = window.innerWidth;

    if (size > 600) {
        return (
            <div className="title-row">
                <p className="title_text">Viva Volunteers</p>
                <img src="/Vivalogo.jpg" alt="Viva Organization Logo" className="title-logo"/>
            </div>
        );
    }
    else {
        return (
            <div className="title-row">
                <p className="title_text_small">Viva Volunteers</p>
                <img src="/Vivalogo.jpg" alt="Viva Organization Logo" className="title-logo"/>
            </div>
        );

    }
}

export default VivaVolunteers;