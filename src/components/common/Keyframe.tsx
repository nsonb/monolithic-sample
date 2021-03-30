import { keyframes } from 'styled-components'

export const fade_in = keyframes`
  0% {
    visibility: hidden;
    opacity: 0;
    z-index: 4;
  }
  10% {
    visibility: visible;
    opacity: 0;
    z-index: 4;
  }
  50% {
    visibility: visible;
    opacity: 0;
    z-index: 4;
  }
  60% {
    visibility: visible;
    opacity: 1;
    z-index: 8;
  }
  100% {
    visibility: visible;
    opacity: 1;
    z-index: 8;
  }

`

export const fade_out = keyframes`
  0% {
    visibility: visible;
    opacity: 1;
    z-index: 8;
  }
  50% {
    visibility: visible;
    opacity: 1;
    z-index: 8;
  }
  60% {
    visibility: visible;
    opacity: 0;
    z-index: 4;
  }
  100% {
    visibility: hidden;
    opacity: 0;
    z-index: 4;
  }
`