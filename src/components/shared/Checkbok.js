// ./components/Check.js
import React from "react";
import { PropTypes } from "prop-types";

import './Checkbox.css';

function Checkbok({label, name, checked, onChange }) {

	const handleChange = (ev)=>{
		const { name, checked } = ev.target;
		onChange({
			target: {
				name,
				value: checked
					
			},
	});
}

	return (
		<div className="form-check ">
			<label>
			<input
				type="checkbox"
				name="remember"
				value={checked}
				className="form-check-solid"
				defaultChecked={checked}
				onChange={handleChange}		
			/>
				{label}
			</label>
		</div>
	);
}

Checkbok.propTypes = {
	checked: PropTypes.bool.isRequired,
	label: PropTypes.string,
}

export default Checkbok;
