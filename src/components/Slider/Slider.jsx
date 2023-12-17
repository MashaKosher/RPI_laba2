import React from 'react';
import {Carousel, CarouselItem} from "react-bootstrap";
import classes from "./Slider.module.css"

const Slider = ({photo1, photo2, photo3}) => {
    return (
        <div className={"slider"}>
            <Carousel>
                <CarouselItem>
                    <div>
                        <img className={classes.imge} src={photo1}/>
                    </div>

                </CarouselItem>
                <CarouselItem>
                    <div>
                        <img className={classes.imge} src={photo2}/>
                    </div>


                </CarouselItem>
                <CarouselItem>
                    <div className={classes.wrap}>
                        <img className={classes.imge} src={photo3}/>
                    </div>


                </CarouselItem>
            </Carousel>
        </div>

    );
};

export default Slider;