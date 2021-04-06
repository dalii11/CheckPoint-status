import React from "react";

const Profession = ({ img }) => {
    return (
        <div>
            <img src={img} height="50%" />
        </div>
    );
};
Profession.defaultProps = {
    img: "NA",
};
export default Profession;
