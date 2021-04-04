import { useState, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import s from './Card.module.css';

export default function Card({ questions, activeCard, handleAnswer, answered }) {
  const [value, setValue] = useState('');

  const { question, answers, questionId } = questions[activeCard];
  useEffect(() => {}, []);

  const handleChange = e => {
    setValue(e.target.value);
    handleAnswer({ [questionId]: e.target.value });
  };

  return (
    <div className={s.card}>
      <p className={s.counter}>
        Вопрос {activeCard + 1} / {questions.length}
      </p>
      <h2 className={s.question}>{question}</h2>

      <RadioGroup name="question" value={answered[questionId] || ''} onChange={handleChange}>
        {answers.map((answer, i) => (
          <FormControlLabel key={i} value={answer} control={<Radio />} label={answer} />
        ))}
      </RadioGroup>
    </div>
  );
}

// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
// import RadioButtonsGroup from './Radio';
// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

// export default function SimpleCard({ testLength, numOfTest, question, answers, handleAnswer, id }) {
//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

//   return (
//     <>
//       <Card className={classes.root}>
//         <CardContent>
//           <Typography className={classes.title} color="textSecondary" gutterBottom>
//             Вопрос {numOfTest} / {testLength}
//           </Typography>
//           <Typography variant="h5" component="h2" className={classes.title}>
//             {question}
//           </Typography>
//           <RadioButtonsGroup answers={answers} handleAnswer={handleAnswer} id={id} />
//         </CardContent>
//       </Card>
//       {/* <div class="card">
//         <p class="counter">
//           Вопрос {numOfTest} / {testLength}
//         </p>
//         <h2 class="question"> {question}</h2>
//         <RadioButtonsGroup answers={answers} handleAnswer={handleAnswer} id={id} />
//       </div> */}
//     </>
//   );
// }
