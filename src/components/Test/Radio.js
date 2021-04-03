import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup({ answers, handleAnswer, id }) {
  const [value, setValue] = React.useState('');

  const handleChange = event => {
    console.log(`event.target.value`, event.target.value);
    setValue(event.target.value);
    handleAnswer({ [id]: value });
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup aria-label="test" name="test" value={value} onChange={handleChange}>
        {answers.map((answer, i) => (
          <FormControlLabel key={i} value={answer} control={<Radio />} label={answer} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
