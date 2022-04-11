import React from 'react';

const Info = ({ clearTasks }) => {
    let today = new Date();
    let date =
        today.getDate() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getFullYear();

    return (
        <div className="info">
            <p className="underline" onClick={clearTasks}>
                Clear List
            </p>
            <p>{date}</p>
        </div>
    );
};

export default Info;
