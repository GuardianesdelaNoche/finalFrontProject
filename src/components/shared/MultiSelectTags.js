import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { getTags } from '../../api/products';
import pT from 'prop-types';


const MultiSelectTags = ({onChange, label, isRequired}) => {

    const [tagsOptions, setTagsOptions] = React.useState({
        value: '',
        label: '',
        name:'tags'
    });

    const getTagsValue = tags => {
        const tagsValues = tags.map(tag =>{ 
            const tagLine = {value: tag,label: tag,name: 'tags'};
            return tagLine; 
        });			
        return tagsValues;
    }

    React.useEffect (() => {
        async function getTagsList() {
            try{
                 setTagsOptions(getTagsValue(await getTags()));
                
            }catch (error) {
            } finally {
                    }
            }
            getTagsList();
           
        }, []);

    const animatedComponents = makeAnimated();

    return (
        <label className="formField-label">
        <span>{label}</span>
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