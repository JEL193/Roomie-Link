import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';


function TinderCards() {
    const [people, setPeople ] = useState([
        {
            name: 'steve jobs',
            url: "https://cdn.profoto.com/cdn/053149e/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-original.jpg?width=1280&quality=75&format=jpg",
        },
        {
            name: 'mark zukerberg' ,
            url: 'https://d1oqwsnd25kjn6.cloudfront.net/production/curio_primary_images/12566/original/Feb._25_2018-SteveJobs.jpg?1518809726',
        }
   ]);

    return (
        <div>
           <h1>Tinder cards</h1>

           <div class name = "tinderCards__cardContainer">

           {people.map(person => (
               <TinderCard
                   className="swipe"
                   key={person.name}
                   preventSwipe={['up','down']}

>                 
                  
                   <div
                    style={{ backgroundImage:`url(${person.url})`}}
                    className= "card"
>
                    <h3>{person.name}</h3>
                   </div>

               </TinderCard>
            
            
           ))}
        </div>
    </div>
     );
}

export default TinderCards