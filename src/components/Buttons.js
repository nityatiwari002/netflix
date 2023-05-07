import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faList } from "@fortawesome/free-solid-svg-icons";
import "../components-style/Buttons.css";

function Buttons() {
	return (
		<div className="buttons-header">
			<button className="header-but">
				<FontAwesomeIcon
					icon={faPlay}
					style={{ background: `transparent`, marginRight: `8px` }}
				/>
				Play
			</button>
			<button className="header-but">
				<FontAwesomeIcon
					icon={faList}
					style={{ background: `transparent`, marginRight: `8px` }}
				/>
				My List
			</button>
		</div>
	);
}

export default Buttons;
