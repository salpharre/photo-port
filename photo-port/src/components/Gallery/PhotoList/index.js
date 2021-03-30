import React, { useState } from "react";
// import photo from "../../../assets/small/commercial/0.jpg";
import Modal from "./Modal";

function PhotoList({categoryName}) {
    const [photos] = useState([
        {
          name: 'Grocery aisle',
          category: 'commercial',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Grocery booth',
          category: 'commercial',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Building exterior',
          category: 'commercial',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Restaurant table',
          category: 'commercial',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Cafe interior',
          category: 'commercial',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Cat green eyes',
          category: 'portraits',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Green parrot',
          category: 'portraits',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Yellow macaw',
          category: 'portraits',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Pug smile',
          category: 'portraits',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Pancakes',
          category: 'food',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Burrito',
          category: 'food',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Scallop pasta',
          category: 'food',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Burger',
          category: 'food',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Fruit bowl',
          category: 'food',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Green river',
          category: 'landscape',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Docks',
          category: 'landscape',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Panoramic village by sea',
          category: 'landscape',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Domestic landscape',
          category: 'landscape',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Park bench',
          category: 'landscape',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
      ]);

    //state to track current photo
    const [currentPhoto, setCurrentPhoto] = useState();
    //tracks whether modal is open
    const [isModalOpen, setIsModalOpen] = useState(false);

    //function to toggle modal
    //takes in the object from the filtered photos array and the position (index => i) in the array
    //saved in state as an object that includes all the object key values pairs from the image plus the index(which will be used to grab the image from the assets folder)
    //!isModalOpen will cause the boolean for isModalOpen state to flip to true when clicked on
    //and back to false when button to close is clicked
    const toggleModal = (image, i) => {
      setCurrentPhoto({...image, index: i});
      setIsModalOpen(!isModalOpen);
    }
    //filters photos so only photos that match selected category are visible
    const currentPhotos = photos.filter((photo) => photo.category === categoryName);

    return(
        <div className="flex-row">
          {isModalOpen &&
          <Modal 
            currentPhoto={currentPhoto}
            onClose={toggleModal}
          />}
            {currentPhotos.map((image, i) => (
            <img 
                src={require(`../../../assets/small/${categoryName}/${i}.jpg`).default}
                alt={image.name}
                className="img-thumbnail mx-1"
                onClick={() => toggleModal(image, i)}
                key={image.name}
            />
            ))}
        </div>
    );
}

export default PhotoList;