import React from 'react';
import SliderItem from './SliderItem';
import Slider from 'react-slick';
import { createStyles, withStyles, Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = createStyles({
  container: {
    width: '100%',
    margin: '15px 0'
  }
});

const KanbanSliderContainer = ({ classes, collections, setCollection }) => {
  return (
    <Grid className={classes.container}>
      <Slider {...settings}>
        {collections && collections.length > 0 ? (
          collections.map((item, index) => (
            <SliderItem
              key={index}
              name={item.name}
              image={item.image}
              id={item._id}
              setCollection={setCollection}
            />
          ))
        ) : (
          <Typography>List is Empty</Typography>
        )}
      </Slider>
    </Grid>
  );
};

const settings = {
  dots: true,
  arrows: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        //initialSlide: 2
        infinite: false,
        dots: true
      }
    }
  ]
};

KanbanSliderContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  collections: PropTypes.array
};
export default withStyles(styles)(KanbanSliderContainer);
