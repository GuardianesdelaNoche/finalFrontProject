import RangeSlider from 'react-bootstrap-range-slider';

const RangeSelector = ({label, value, onChange}) => {
    return(
        <div className="formField-rangeSelector">
            <span>{label}</span>            
            <RangeSlider
                value={value}
                min={0}
                max={500}
                step={10}
                onChange={onChange}             
            />            
        </div>
    )

};
export default RangeSelector;