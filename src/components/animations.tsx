import { css } from 'styled-components'

export interface IAnimationFadeIn {
  duration: number
}
export function fadeIn(config: IAnimationFadeIn = {
  duration: 300
}) {
  return css`
    animation: fadeIn ${config.duration}ms;

    @keyframes fadeIn {
      from {
        transform: translate(0, -15px);
        opacity: 0;
      }

      to {
        transform: translate(0, 0);
        opacity: 1;
      }
    }
  `
}
