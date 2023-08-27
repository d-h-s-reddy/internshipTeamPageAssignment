import React from "react";
import './styling.css';
import Carosel from 'react-elastic-carousel'
function Mentors(){
    const slider=[
        {
            image:'http://sciastra.com/new_admin//teams/files/Piyush_Verma_biology.jpg',
            name:'Piyush Verma',
            title:'Cambridge University',
        },
        {
            image:'http://sciastra.com/new_admin//teams/files/Aditya%20Nayak_Biology.jpeg',
            name:'Aditya Nayak',
            title:'Cambridge University',
        },
        {
            image:'http://sciastra.com/new_admin//teams/files/TIASHA_DAS_Biology.jpg',
            name:'Tiasha Das',
            title:'Cambridge University',
        },
        {
            image:'http://sciastra.com/new_admin//teams/files/Kedar_Tornekar1.jpg',
            name:'Mandar Tornekar',
            title:'Cambridge University',
        },
        {
            image:'http://sciastra.com/new_admin//teams/files/Sehasree_Mohanta.jpg',
            name:'Sehasree Mohanta',
            title:'Cambridge University',
        },
        {
            image:'http://sciastra.com/new_admin//teams/files/Siddharth_Bhatt_physics.jpg',
            name:'Siddharth Bhatt',
            title:'Cambridge University',
        },
        {
            image:'http://sciastra.com/new_admin//teams/files/Ripunjay.JPG',
            name:'Ripunjay',
            title:'Cambridge University',
        },
        {
            image:'http://sciastra.com/new_admin//teams/files/Screenshot(49).png',
            name:'Tanmay',
            title:'Cambridge University',
        },
        {
            image:'http://sciastra.com/new_admin//teams/files/Sagar_Rathore_physics.jpg',
            name:'Sagar Rathore',
            title:'Cambridge University',
        },
        {
            image:'http://sciastra.com/new_admin//teams/files/Abhay_Gupta_physics.jpg',
            name:'Abhay Gupta',
            title:'Cambridge University',
        },

    ]
    const itemtoshow=4;
    const carouselProps = {
        itemsToShow: itemtoshow,
        rewind: true, 
      };
    return(
        <>
        <div class="mainheader">
            <br/>
            <h1>Meet Your Mentors</h1>
            <hr/>
        </div>
        
        <div class="carousel-containerm">
        <Carosel {...carouselProps}>
             {slider.map((item, index) => (
                <div key={index} class="imagesliderm">
                    <img src={item.image} alt={item.name} />
                    <p class="name">{item.name}</p>
                    <p class="title">{item.title}</p>
                 </div>
              ))}
        </Carosel>

        </div>
        </>
    )
}
export default Mentors;