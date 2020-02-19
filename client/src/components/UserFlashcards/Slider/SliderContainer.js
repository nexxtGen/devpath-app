import React, { Component } from 'react';
import SliderItem from './SliderItem';
import Slider from 'react-slick';
import './styles.css';

export default class App extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2
    };

    const items = [
      {
        id: 1,
        url:
          'https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png'
      },
      {
        id: 2,
        url: 'https://i.ytimg.com/vi/TZeyqDZuliU/maxresdefault.jpg'
      },
      {
        id: 3,
        url:
          'https://i2.wp.com/www.nettecode.com/wp-content/uploads/2017/08/nodejs-1280x1024.png?fit=1280%2C1024&ssl=1'
      },
      {
        id: 4,
        url: 'https://wallpapercave.com/wp/wp2885598.jpg'
      },
      {
        id: 5,
        url: 'https://miro.medium.com/max/805/1*alZcSIb0lcN7gQIx2tJ_tg.png'
      },
      {
        id: 6,
        url: 'https://farm5.static.flickr.com/4459/37356064940_c64413db3f.jpg'
      },
      {
        id: 7,
        url:
          'https://www.geek.com/wp-content/uploads/2016/08/Berlin_Cities_of_2029.jpg'
      }
    ];
    return (
      <div className='slider-container'>
        <Slider {...settings}>
          {items.map((item, index) => (
            <SliderItem key={index} index={index + 1} url={item.url} />
          ))}
        </Slider>
      </div>
    );
  }
}
