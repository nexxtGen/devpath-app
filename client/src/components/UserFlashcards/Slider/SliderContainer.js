import React from 'react';
import SliderItem from './SliderItem';
import Slider from 'react-slick';
import { createStyles, withStyles, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = createStyles({
  container: {
    width: '100%'
  }
});

const SliderContainer = ({ classes, categories, setCategory }) => {
  return (
    <Grid className={classes.container}>
      <Slider {...settings}>
        {categories.map((item, index) => (
          <SliderItem
            key={index}
            name={item.name}
            image={item.image}
            id={item._id}
            length={categories.length}
            setCategory={setCategory}
          />
        ))}
      </Slider>
    </Grid>
  );
};

const settings = {
  dots: true,
  arrows: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }
    }
  ]
};

SliderContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  categories: PropTypes.array
};
export default withStyles(styles)(SliderContainer);
