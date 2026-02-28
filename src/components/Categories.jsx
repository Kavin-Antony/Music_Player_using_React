import { allCategories } from '../data/songsData';
import '../styles/Categories.css';

const Categories = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="categories-wrapper">
      <div className="categories">
        {allCategories.map((category, index) => (
          <button
            key={index}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
