import React from 'react';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Slider from '../../components/Slider/Slider';
import Categories from '../../components/Categories/Categories';
import './home.scss';

const Home = () => {

  return (
    <div className="home">
      {/* Slider Section */}
      <section className="home-section slider-section">
        <Slider />
      </section>

      {/* Featured Products Section */}
      <section className="home-section featured-products-section">
        <FeaturedProducts tag="featured" />
      </section>

      {/* Categories Section */}
      <section className="home-section categories-section">
        <Categories />
      </section>

      {/* Trending Products Section */}
      <section className="home-section trending-products-section">
        <FeaturedProducts tag="trending" />
      </section>
    </div>
  );
};

export default Home;
