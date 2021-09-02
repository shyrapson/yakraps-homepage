import React from 'react'
import { Slider,SliderTrack,SliderThumb,SliderFilledTrack } from '@chakra-ui/slider'

const Slide = () => {
    return (
        <div>
            <Slider aria-label="slider-ex-4" defaultValue={30}>
                <SliderTrack bg="blue.100">
                    <SliderFilledTrack bg="blue" />
                </SliderTrack>
                <SliderThumb boxSize={6}>
                </SliderThumb>
            </Slider>
        </div>
    )
}

export default Slide
