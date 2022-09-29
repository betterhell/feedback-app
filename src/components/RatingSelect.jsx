import React from 'react';
import {useState} from "react";

const RatingSelect = ({select}) => {
    const [selected, setSelected] = useState(10)

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }

    return (
       <ul className="rating">

           <li>
               <input
                   id="num1"
                   name="rating"
                   value="1"
                   type="radio"
                   onChange={handleChange}
                   checked={selected === 1}
               />
               <label htmlFor="num1">1</label>
           </li>

           <li>
               <input
                   id="num2"
                   name="rating"
                   value="2"
                   type="radio"
                   onChange={handleChange}
                   checked={selected === 2}
               />
               <label htmlFor="num2">2</label>
           </li>

           <li>
               <input
                   id="num3"
                   name="rating"
                   value="3"
                   type="radio"
                   onChange={handleChange}
                   checked={selected === 3}
               />
               <label htmlFor="num3">3</label>
           </li>

           <li>
               <input
                   id="num4"
                   name="rating"
                   value="4"
                   type="radio"
                   onChange={handleChange}
                   checked={selected === 4}
               />
               <label htmlFor="num4">4</label>
           </li>

           <li>
               <input
                   id="num5"
                   name="rating"
                   value="5"
                   type="radio"
                   onChange={handleChange}
                   checked={selected === 5}
               />
               <label htmlFor="num5">5</label>
           </li>

           <li>
               <input
                   id="num6"
                   name="rating"
                   value="6"
                   type="radio"
                   onChange={handleChange}
                   checked={selected === 6}
               />
               <label htmlFor="num6">6</label>
           </li>

           <li>
               <input
                   id="num7"
                   name="rating"
                   value="7"
                   type="radio"
                   onChange={handleChange}
                   checked={selected === 7}/>
               <label htmlFor="num7">7</label>
           </li>

           <li>
               <input
                   id="num8"
                   name="rating"
                   value="8"
                   type="radio"
                   onChange={handleChange}
                   checked={selected === 8}
               />
               <label htmlFor="num8">8</label>
           </li>

           <li>
               <input
                   id="num9"
                   name="rating"
                   value="9"
                   type="radio"
                   onChange={handleChange}
                   checked={selected === 9}
               />
               <label htmlFor="num9">9</label>
           </li>

           <li>
               <input
                   id="num10"
                   name="rating"
                   value="10"
                   type="radio"
                   onChange={handleChange}
                   checked={selected === 10}
              />
               <label htmlFor="num10">10</label>
           </li>

       </ul>
    );
};

export default RatingSelect;