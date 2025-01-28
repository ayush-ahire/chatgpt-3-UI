import React from 'react';
import './brand.css';
import inv1 from '../../assets/investor-1.jpeg';
// import inv2 from '../../assets/investor-2.jpeg';
import inv3 from '../../assets/investor-3.jpeg';
import inv4 from '../../assets/investor-4.jpeg';
import inv5 from '../../assets/investor-5.jpeg';
import inv6 from '../../assets/investor-6.jpeg';
import inv7 from '../../assets/investor-7.jpeg';
import inv8 from '../../assets/investor-8.jpeg';
import inv9 from '../../assets/investor-9.jpeg';
import inv10 from '../../assets/investor-10.jpeg';

const Brand = () => {
    return (
        <div className="gpt3__brand-wrapper">
            <div className="gpt3__brand">
                <div><img src={inv1} alt="Investor 1" /></div>

                <div><img src={inv3} alt="Investor 3" /></div>
                <div><img src={inv4} alt="Investor 4" /></div>
                <div><img src={inv5} alt="Investor 5" /></div>
                <div><img src={inv6} alt="Investor 6" /></div>
                <div><img src={inv7} alt="Investor 7" /></div>
                <div><img src={inv8} alt="Investor 8" /></div>
                <div><img src={inv9} alt="Investor 9" /></div>
                <div><img src={inv10} alt="Investor 10" /></div>
                <div><img src={inv1} alt="Investor 1" /></div>

                <div><img src={inv3} alt="Investor 3" /></div>
                <div><img src={inv4} alt="Investor 4" /></div>
                <div><img src={inv5} alt="Investor 5" /></div>
                <div><img src={inv6} alt="Investor 6" /></div>
                <div><img src={inv7} alt="Investor 7" /></div>
                <div><img src={inv8} alt="Investor 8" /></div>
                <div><img src={inv9} alt="Investor 9" /></div>
                <div><img src={inv10} alt="Investor 10" /></div>
            </div>
        </div>
    );
};

export default Brand;
