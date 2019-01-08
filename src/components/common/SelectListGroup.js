import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const SelectListGroup  = ({
	name,
	value,
	error,
	info,
	onChange,
	options
}) =>{
	const selectOptions = options.map(option =>(
		<option key={option.label} value={option.value}>
			{option.label}
		</option>
	));
	return(
		<div className="form-group">
			{error? <div className="red">{error}</div>:null}
			<select
			className={classnames('form-control form-control-lg', {
				'is-invalid':error
			})}
			name={name}
			value={value}
			onChange={onChange}>
				{selectOptions}
			</select>
			{info?<small className="form-text text-muted">{info}</small>:null}

		</div>
	)
}


SelectListGroup.propTypes = {
	name:PropTypes.string.isRequired,
	value:PropTypes.string.isRequired,
	error:PropTypes.string,
	info:PropTypes.string,
	onChange:PropTypes.func.isRequired,
	options:PropTypes.array.isRequired,
}

export default SelectListGroup;
