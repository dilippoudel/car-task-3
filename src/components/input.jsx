import React from 'react';
const Input = (props) => {
    const { name, value, onChange, label, error} = props;
return (
 <div className="gorm-group">
<label htmlFor={name}>{label}</label>
<input id = {name} 
name = {name}
value = {value} 
onChange = {onChange}
type="text" className="form-control"/>
{ error && <div className="alert alert-danger">{error}</div>}
</div>
);

}
export default Input;