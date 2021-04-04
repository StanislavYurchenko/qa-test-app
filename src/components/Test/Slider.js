import React, { Component } from 'react';
import Slider from 'react-slick';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SimpleCard from './Card';
import { techTestQA, teoryTest } from './data';

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
  }
  next = () => {
    this.slider.slickNext();
  };
  previous = () => {
    this.slider.slickPrev();
  };

  render() {
    const settings = {
      dots: false,
      fade: true,
      lazyLoad: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      //   adaptiveHeight: true,
      // arrows: false,
      swipe: false,
    };
    return (
      <div>
        <Slider ref={c => (this.slider = c)} {...settings}>
          {techTestQA.map((item, i, arr) => (
            <SimpleCard
              key={item.questionId}
              testLength={arr.length}
              numOfTest={i + 1}
              question={item.question}
              answers={item.answers}
              handleAnswer={this.props.handleAnswer}
              id={item.questionId}
            />
          ))}
        </Slider>
        <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center' }}>
          <Button variant="outlined" color="primary" onClick={this.previous}>
            Previous
          </Button>
          <Button variant="outlined" color="primary" onClick={this.next}>
            Next
          </Button>
        </div>
      </div>
    );
  }
}
