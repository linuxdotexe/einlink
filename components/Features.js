import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { featureList } from '../data';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";


function Features () {
    return (
        <div className="featuresContainer">
            <p className="heading">
                Features
            </p>
            <p className="featuresListHeading">
                These are the features currently available in EinLink
            </p>
            <div className="featuresListContainer">
                {featureList.map((feature) => (
                    <div className="featureListItem" key={feature}>
                        <FontAwesomeIcon icon={faCheckCircle} className="checkmark"/>
                        {feature}
                    </div>
                ))}
                <p className="featureDisclaimer">
                    * - Indicates that the feature is available on request and not by default.
                </p>
            </div>
        </div>
    )
}

export default Features;