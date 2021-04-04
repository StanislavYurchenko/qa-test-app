import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default function RadioButtonsGroup({ answers, handleAnswer, id }) {
  const [value, setValue] = React.useState('');

  const handleChange = (_, value) => {
    console.log(`value`, value);
    setValue(value);
    handleAnswer({ [id]: value });
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup aria-label="gender" name="question" value={value} onChange={handleChange}>
        {answers.map((answer, i) => (
          <label key={String(i)}>
            <Radio value={answer} /> {answer}
          </label>
        ))}
      </RadioGroup>
    </FormControl>
  );
}

{
  /* <FormControlLabel
            key={String(id + i)}
            value={answer}
            control={<Radio />}
            label={answer}
          /> */
}
