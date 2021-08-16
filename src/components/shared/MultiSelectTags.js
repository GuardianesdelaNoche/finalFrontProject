import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import pT from 'prop-types';
import { Label } from './elements/formElements';
import { useSelector } from 'react-redux';
import { getTags } from '../../store/selectors/tags'; 



const MultiSelectTags = ({onChange, label, isRequired}) => {

    const [tagsOptions, setTagsOptions] = React.useState({
        value: '',
        label: '',
        name:'tags'
    });
    
    const getTagsValue = tags => {
        if(tags){
            const tagsValues = tags.map(tag =>{ 
                const tagLine = {value: tag.name,label: tag.name,name: 'tags'};
                return tagLine; 
            });			

            return tagsValues;
        } else
        {
            return [];
        }
    }
    const tagsArray = useSelector(getTags);


     React.useEffect (() => {
         setTagsOptions(getTagsValue(tagsArray));
     }, [tagsArray]);

    const animatedComponents = makeAnimated();

    return (
        <label className="formField-label">
     
		<Label>
			{label}		
		</Label>
        <Select 
            closeMenuOnSelect={false}
            components = {animatedComponents}
            isMulti
            name='tags'
            onChange={onChange}
            options={tagsOptions}
            required={isRequired?true:false}
        />
        </label>
    );
};

MultiSelectTags.propTypes = {
    onChange: pT.func,
    label: pT.string.isRequired,   
  }
  
  MultiSelectTags.defaultProps = {    
    isRequired: false
  }
  
export default MultiSelectTags;