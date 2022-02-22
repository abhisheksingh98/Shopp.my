import React from 'react';
import ProductRow from '../../components/ProductRow/ProductRow';
import Carousel from '../../components/carousel/Carousel';
import { bannerImages } from './BannerData';
import { useHistory } from 'react-router-dom';
import './Home.scss';
import DATA from '../../shared/utils/Data';

const Home = () => {
  const history = useHistory();

  return (
    <div className="home">
      <Carousel />
      <div className="home__categories">
        <div
          className="home__categories1"
          style={{ backgroundImage: `url(${bannerImages[0].img})` }}
        >
          <div className="home__categories1__content">
            <h1 className="home__categories1__title">
              {'MENS'}
            </h1>
            <p className="home__categories1__text">
              {'Dress up for parties with the spirit of passion'}
            </p>
            <button
              className="home__categories1__button"
              data-test-id="menCategory"
              onClick={(e) => history.push('/products/men')}
            >
              {'SHOP NOW'}
            </button>
          </div>
        </div>
        <div
          className="home__categories2"
          style={{ backgroundImage: `url(${bannerImages[1].img})` }}
        >
          <div className="home__categories1__content">
            <h1 className="home__categories1__title">
              {'WOMENS'}
            </h1>
            <p className="home__categories1__text">
              {
                'Redefine your fashion with these stunning casual wear'
              }
            </p>
            <button
              className="home__categories1__button"
              data-test-id="womenCategory"
              onClick={(e) => history.push('/products/women')}
            >
              {'SHOP NOW'}
            </button>
          </div>
        </div>
        <div
          className="home__categories3"
          style={{ backgroundImage: `url(${bannerImages[2].img})` }}
        >
          <div className="home__categories1__content">
            <h1 className="home__categories1__title">
              {'KIDS'}
            </h1>
            <p className="home__categories1__text">
              {
                'Sophesticated kids to make your look and life a paradise.'
              }
            </p>
            <button
              className="home__categories1__button"
              data-test-id="kidsCategory"
              onClick={(e) => history.push('/products/kids')}
            >
              {'SHOP NOW'}
            </button>
          </div>
        </div>
        <div
          className="home__categories4"
          style={{ backgroundImage: `url(${bannerImages[3].img})` }}
        >
          <div className="home__categories1__content">
            <h1 className="home__categories1__title">
              {'FOOTWEAR'}
            </h1>
            <p className="home__categories1__text">
              {'Footwear that makes you comfortable and look good.'}
            </p>
            <button
              className="home__categories1__button"
              data-test-id="footwearCategory"
              onClick={(e) => history.push('/products/footwear')}
            >
              {'SHOP NOW'}
            </button>
          </div>
        </div>
      </div>

      <ProductRow
        title="Featured Products"
        items={DATA['FEATURED_PRODUCTS']}
      />
    </div>
  );
};

export default Home;
