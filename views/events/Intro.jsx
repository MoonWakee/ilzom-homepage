import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import { Flex, Link as ChakraLink, Box } from '@chakra-ui/react';
import "keen-slider/keen-slider.min.css"
import Image from 'next/image';
import ilzom_sponsor from '../../public/assets/illustrations/ilzom_sponsor.png';

import {
  StyledPrimaryButton,
  StyledSecondaryButton,
  StyledPrimaryHeading,
  StyledBodyText
} from '../../themes/styled';

export const Intro = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {origin: 'center', perView: 1, height: '100px'},
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <Box
        display='flex'
        px={{ base: '2rem', lg: '5rem' }}
        py='2rem'>
        <Box>
          <StyledPrimaryHeading>
            Events
          </StyledPrimaryHeading>
          <br/>
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider" style={{width: '500px', height: '500px'}}>
            <div className="keen-slider__slide number-slide1">
              <Image src={ilzom_sponsor} layout="fill"></Image>
            </div>
            <div className="keen-slider__slide number-slide2">2</div>
            <div className="keen-slider__slide number-slide3">3</div>
            <div className="keen-slider__slide number-slide4">4</div>
            <div className="keen-slider__slide number-slide5">5</div>
            <div className="keen-slider__slide number-slide6">6</div>
          </div>
          
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
          
        </div>
        {loaded && instanceRef.current && (
          <div className="dots">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx)
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              )
            })}
          </div>
        )}
      </Box>
            <Box
              display='flex'
              width='500px'
              height='500px'
              >
              <Box
                padding='50px'
                ml='5'
                display='flex'>
                <Box
                  display='flex'
                  textAlign='center'
                  fontSize='30'
                  borderRadius='10'
                  padding='5'
                  height='130'
                  backgroundColor='gray.500'
                  color='white'>
                  August<br/> 9th
                </Box>
                <Box
                  color='white'>
                  <Box
                    color='white'
                    fontSize='25'
                    ml='10'
                    padding='3'
                    >
                      <nobr>Outside Lands 2022</nobr>
                  </Box>
                  <Box
                    color='white'
                    fontSize='20'
                    ml='10'
                    padding='3'
                    >
                    San Francisco, CA
                  </Box>
                  <Box
                    color='white'
                    fontSize='20'
                    ml='52px'
                    >
                    Sun, 6:00 PM 
                  </Box>
                </Box>
              </Box>
              
              <Box
                color='white'>
                  Music Festival
              </Box>
            </Box>
      </Box>
    </>
  )
}

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}
