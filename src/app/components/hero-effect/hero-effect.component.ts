import { ChangeDetectionStrategy, Component, input } from '@angular/core';

interface Star {
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

// Fixed pseudo-random sky so the stars sit in the same places on every visit.
function makeStars(count: number): Star[] {
  let seed = 7;
  const rand = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
  return Array.from({ length: count }, () => ({
    x: rand() * 100,
    y: rand() * 100,
    size: rand() < 0.85 ? 1 + rand() * 1.5 : 2.5 + rand() * 1.5,
    delay: rand() * 6,
    duration: 2.5 + rand() * 4,
  }));
}

const STARS = makeStars(140);

/**
 * Animated background for a service hero: a twinkling sky with shooting stars ("stars") or slowly
 * shifting colour light like a car's ambient lighting ("ambient"). Calm when the visitor prefers
 * reduced motion.
 */
@Component({
  selector: 'app-hero-effect',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'pointer-events-none absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,black_65%,transparent)]',
    'aria-hidden': 'true',
  },
  template: `
    @if (effect() === 'stars') {
      <div class="sky"></div>
      @for (star of stars; track $index) {
        <span
          class="star"
          [style.left.%]="star.x"
          [style.top.%]="star.y"
          [style.width.px]="star.size"
          [style.height.px]="star.size"
          [style.animation-delay.s]="star.delay"
          [style.animation-duration.s]="star.duration"
        ></span>
      }
      <span class="shooting" style="top: 12%; left: 55%; animation-delay: 1s"></span>
      <span class="shooting" style="top: 30%; left: 85%; animation-delay: 5.5s"></span>
      <span class="shooting" style="top: 5%; left: 30%; animation-delay: 9s"></span>
    } @else {
      <div class="glow glow--a"></div>
      <div class="glow glow--b"></div>
      <div class="line"></div>
    }
  `,
  styles: `
    .sky {
      position: absolute;
      inset: 0;
      background:
        radial-gradient(ellipse at 70% 20%, rgb(60 70 140 / 0.35), transparent 60%),
        radial-gradient(ellipse at 20% 80%, rgb(225 29 42 / 0.12), transparent 55%);
    }
    .star {
      position: absolute;
      border-radius: 9999px;
      background: #fff;
      box-shadow: 0 0 6px 1px rgb(255 255 255 / 0.7);
      animation: twinkle ease-in-out infinite;
    }
    .shooting {
      position: absolute;
      width: 140px;
      height: 1.5px;
      background: linear-gradient(90deg, #fff, transparent);
      border-radius: 9999px;
      opacity: 0;
      transform: rotate(-35deg);
      animation: shoot 12s linear infinite;
    }
    .glow {
      position: absolute;
      width: 60vw;
      height: 60vw;
      max-width: 720px;
      max-height: 720px;
      border-radius: 9999px;
      filter: blur(90px);
      opacity: 0.45;
      animation: hue 14s linear infinite;
    }
    .glow--a {
      right: -10%;
      top: -20%;
      background: #e11d2a;
    }
    .glow--b {
      right: 25%;
      bottom: -40%;
      background: #3b5bff;
      animation-delay: -7s;
    }
    .line {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 18%;
      height: 2px;
      background: linear-gradient(90deg, transparent, #ff2d55, #7c3aed, #22d3ee, transparent);
      filter: drop-shadow(0 0 12px #ff2d55);
      opacity: 0.7;
      animation: hue 10s linear infinite;
    }
    @keyframes twinkle {
      0%,
      100% {
        opacity: 0.25;
        transform: scale(0.8);
      }
      50% {
        opacity: 1;
        transform: scale(1);
      }
    }
    @keyframes shoot {
      0% {
        opacity: 0;
        translate: 0 0;
      }
      2% {
        opacity: 1;
      }
      8% {
        opacity: 0;
        translate: -320px 230px;
      }
      100% {
        opacity: 0;
        translate: -320px 230px;
      }
    }
    @keyframes hue {
      to {
        filter: blur(90px) hue-rotate(360deg);
      }
    }
    .line {
      animation-name: line-hue;
    }
    @keyframes line-hue {
      to {
        filter: drop-shadow(0 0 12px #ff2d55) hue-rotate(360deg);
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .star,
      .shooting,
      .glow,
      .line {
        animation: none;
      }
    }
  `,
})
export class HeroEffectComponent {
  effect = input.required<'stars' | 'ambient'>();
  protected readonly stars = STARS;
}
