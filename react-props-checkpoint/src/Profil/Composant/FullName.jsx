import React from "react";

const FullName = ({ fullname }) => {
    return (
        <div className="full">
            <h1> FullName: {fullname} </h1>
        </div>
    );
};

FullName.defaultProps = {
    fullname: "NA",
};

export default FullName;
