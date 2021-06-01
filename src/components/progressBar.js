import React from "react";
import ClayProgressBar from '@clayui/progress-bar';

export const ProgressBar = (props) => {
    const spritemap = "https://cdn.jsdelivr.net/npm/@clayui/css/lib/images/icons/icons.svg";
    return (
        <>
            <div className="main-container-progress-bar">
                <p className="pt">{props.name}</p>
                    <ClayProgressBar
				        spritemap={spritemap}
				        value={props.value[props.name]}
			        />
            </div>
        </>
    )
}