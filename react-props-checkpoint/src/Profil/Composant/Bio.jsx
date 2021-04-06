import React from "react";

function Bio({ bio }) {
    return (
        <div>
            <h1>{bio}</h1>
        </div>
    );
}
Bio.defaultProps = {
    bio: "NA",
};

export default Bio;
