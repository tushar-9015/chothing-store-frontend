import React from 'react';
import './categories.scss';
import { Link } from 'react-router-dom';

const categories = [
  { img: 'https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', label: 'Women', link: '/products/2' },
  { img: 'https://images.pexels.com/photos/2351321/pexels-photo-2351321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', label: 'Sale', link: '/products/1' },
  { img: 'https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', label: 'New Season', link: '/products/1' },
  { img: 'https://images.pexels.com/photos/374044/pexels-photo-374044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', label: 'Men', link: '/products/1' },
  { img: 'https://images.pexels.com/photos/1374910/pexels-photo-1374910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', label: 'Casual Wear', link: '/products/1' }
];

const Categories = () => {
  return (
    <div className="categories">
      {categories.map((category, index) => (
        <div key={index} className="col">
          <div className="row">
            <img src={category.img} alt={category.label} />
            <button className="btn">
              <Link className="link" to={category.link}>{category.label}</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
