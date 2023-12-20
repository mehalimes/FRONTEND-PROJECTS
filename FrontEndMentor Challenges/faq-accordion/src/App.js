import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import FaqItem from './components/FaqItem';
import StarImage from './images/icon-star.svg';
import { useEffect } from 'react';

function App() {
  const faqs = useSelector((state) => state.faq.faqs);
  return (
    <>
      <div className="faq-header">
        <h1><img src={StarImage} />FAQs</h1>
      </div>
      <div className="faq-container">
        {
          faqs.map((item, index, array) => {
            return <FaqItem item={item} index={index} key={index} />;
          })
        }
      </div>
    </>
  );
}

export default App;
