import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import db from './Firebase';
import { doc, getFirestore, onSnapshot, collection, query, where, getDocs,  } from "firebase/firestore";
import './TinderCards.css';


function TinderCards() {
    const [people, setPeople ] = useState([ 
        {
            name: 'steve jobs',
            rent: "$2,000-$2,5000",
            blank:"",
            url: "https://cdn.profoto.com/cdn/053149e/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-original.jpg?width=1280&quality=75&format=jpg",
        },
        {
            name: 'mark zukerberg' ,
            url: 'https://d1oqwsnd25kjn6.cloudfront.net/production/curio_primary_images/12566/original/Feb._25_2018-SteveJobs.jpg?1518809726',
        },
        {
            name: 'Putin',
            rent: "$2,000-$2,5000",
            blank:"",
            url: "https://cdn.profoto.com/cdn/053149e/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-original.jpg?width=1280&quality=75&format=jpg",
        },
        {
            name: 'Michale Jordan' ,
            rent: "$2,000-$2,5000",
            blank:"",
            url: 'https://d1oqwsnd25kjn6.cloudfront.net/production/curio_primary_images/12566/original/Feb._25_2018-SteveJobs.jpg?1518809726',
        }
        
    ]);

   // uses code which runs on a condition 

/*useEffect(() => {
       //collection('people').onSnapshot((snapshot) => setPeople(snapshot.docs.map((doc) => doc.data())));
        const q = query(collection(db, "people "))
        const unsub = onSnapshot(q, (querySnapshot) => {
    console.log("", querySnapshot.docs.map(d => doc.data()));
  });
    }, []); 
*/
    return (
        <div>

           <div className = "tinderCards__cardContainer">

           {people.map((person) => (
               <TinderCard
                   className="swipe"
                   key={person.name}
                   preventSwipe={['up','down']}

>                 
                  
                   <div
                    style={{ backgroundImage:`url(${person.url})`}}
                    className= "card"
>
                    <h3><span>{person.name} </span></h3>
                    <h3><span>{person.rent}</span></h3>
                   </div>

               </TinderCard>
           ))}
        </div>
    </div>
     );
}

export default TinderCards