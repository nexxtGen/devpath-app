import React, { useEffect } from 'react';
import SliderItem from './SliderItem';
import Slider from 'react-slick';
import { createStyles, withStyles, Grid, Typography } from '@material-ui/core';
import CollectionInformation from './CollectionInformation';
import PropTypes from 'prop-types';

const styles = createStyles({
  container: {
    width: '100%',
    margin: '15px 0'
  },
  empty: {
    marginLeft: 20
  }
});

const KanbanSliderContainer = ({
  classes,
  collections,
  currentCollection,
  setCollection,
  setIsOpenCollectionModal,
  setIsOpenCollectionsListModal
}) => {
  useEffect(() => {
    if (collections && collections.length > 0 && !currentCollection) {
      setCollection(collections[0]);
    }
    //eslint-disable-next-line
  }, [collections]);
  return (
    <Grid className={classes.container}>
      <CollectionInformation
        collections={collections}
        currentCollection={currentCollection}
        setIsOpenCollectionModal={setIsOpenCollectionModal}
        setIsOpenCollectionsListModal={setIsOpenCollectionsListModal}
      />
      <Slider {...settings}>
        {collections && collections.length > 0 ? (
          collections.map((item, index) => (
            <SliderItem
              key={index}
              collection={item}
              setCollection={setCollection}
            />
          ))
        ) : (
          <Typography className={classes.empty}>List is Empty</Typography>
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
