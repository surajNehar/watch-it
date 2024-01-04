import React from "react";

import "./style.scss";

const ContentWrapper = ({ children }) => {
    return <div className="contentWrapper">{children}</div>;
};
// to avoid repeatition this does align content at the center 
export default ContentWrapper;