import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { mens_kurta } from "../../../Data/mens_kurta";


const HomeSectionCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 6   },
  };  

  const slidePrev =()=> setActiveIndex(activeIndex - 1);
  const slideNext =()=> setActiveIndex(activeIndex + 1);

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = mens_kurta.slice(0,10).map((item) => <HomeSectionCard product={item} />);
 
  return (
    <div className="border">
      <div className="relative p-5">
      <AliceCarousel
        items={items}
        responsive={responsive}
        disableDotsControls
        onSlideChange={syncActiveIndex}
        activeIndex={activeIndex}
        disableButtonsControls  
     />
       
      { activeIndex !== items.length-5 && <Button
        variant="contained "
        className="z-50 bg-white"
        onClick={slideNext}
        sx={{
          position: "absolute",
          top: "8rem",
          right: "0rem",
          transform: "translateX(50%) rotate(90deg)",
          bgcolor: "white",
        }}
        aria-label="next"
      >
        <KeyboardArrowLeftIcon
          sx={{
            transform: "rotate(90deg)",
            color: "black",
          }}
        />
      </Button>}

        { activeIndex !== 0 &&<Button
          onClick={slidePrev}
          variant="contained "
          className="z-50 "
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="previous"
        >
          <KeyboardArrowLeftIcon
            sx={{
              transform: "rotate(-90deg)",
              color: "black",
            }}
          />
        </Button>}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;