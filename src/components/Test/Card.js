import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import RadioButtonsGroup from './Radio';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({ testLength, numOfTest, question, answers, handleAnswer, id }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Вопрос {numOfTest} / {testLength}
          </Typography>
          <Typography variant="h5" component="h2" className={classes.title}>
            {question}
          </Typography>
          <RadioButtonsGroup answers={answers} handleAnswer={handleAnswer} id={id} />
        </CardContent>
      </Card>
      {/* <div class="card">
        <p class="counter">
          Вопрос {numOfTest} / {testLength}
        </p>
        <h2 class="question"> {question}</h2>
        <RadioButtonsGroup answers={answers} handleAnswer={handleAnswer} id={id} />
      </div> */}
    </>
  );
}
