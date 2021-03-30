import React, { useState } from "react";
// import './App.css';
import About from "./components/About";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";

function App() {
  //navbar categories, other then about me and contact
  const [categories] = useState([
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);

  //state for keeping track of what object in categories array is selected
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  //to track whether contact has been selected
  //if contact is selected and therefore state is set to true then contact will render, but not about me and gallery
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      <main>
        {!contactSelected ? (
          <>
            <Gallery
              currentCategory={currentCategory}
            />
            <About />
          </>
        ) : (
          <ContactForm />
        )}
      </main>
    </div>

  );
}

export default App;
