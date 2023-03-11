## Inspired by breathing-halftone

Using this library for the animations https://github.com/desandro/breathing-halftone

Just made it a React component.

## Usage

```jsx
<BreathingHalftone src="lion.png" />
```

possible props

- src (img source)
- alt (default="Breathing Halftone")
- options (default= {}),

## Options

There are a bunch of options so you can fine-tune to your heart's content.

```js
// default options
{
  // ----- dot size ----- //

  dotSize: 1/40,
  // size of dots
  // as a fraction of the diagonal of the image
  // smaller dots = more dots = poorer performance

  dotSizeThreshold: 0.05,
  // hides dots that are smaller than a percentage

  initVelocity: 0.02,
  // speed at which dots initially grow

  oscPeriod: 3,
  // duration in seconds of a cycle of dot size oscilliation or 'breathing'

  oscAmplitude: 0.2
  // percentage of change of oscillation

  // ----- color & layout ----- //

  isAdditive: false,
  // additive is black with RGB dots,
  // subtractive is white with CMK dots

  isRadial: false,
  // enables radial grid layout

  channels: [ 'red', 'green', 'blue' ],
  // layers of dots
  // 'lum' is another supported channel, for luminosity

  channelFillStyles:  {
      additive: {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF",
        lum: "#FFF",
      },
      subtractive: {
        red: "#00FFFF",
        green: "#FF00FF",
        blue: "#FFFF00",
        lum: "#000",
      },
    },
  //Fill colors

  isChannelLens: true,
  // disables changing size of dots when displaced

  // ----- behavior ----- //

  friction: 0.06,
  // lower makes dots easier to move, higher makes it harder

  hoverDiameter: 0.3,
  // size of hover effect
  // as a fraction of the diagonal of the image

  hoverForce: -0.02,
  // amount of force of hover effect
  // negative values pull dots in, positive push out

  activeDiameter: 0.6,
  // size of click/tap effect
  // as a fraction of the diagonal of the image

  activeForce: 0.01
  // amount of force of hover effect
  // negative values pull dots in, positive push out
}
```

## Gotchas

As the halftone is low resolution, you don't need a high resolution source image.

Images must be hosted on the same domain as the site. Cross-domain images cannot be used for [security according to the `<canvas>` spec](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#security-with-canvas-elements).

Smaller dots = lots more dots = poorer browser performance.

As [Firefox and IE do not support `darker` compositing](http://dropshado.ws/post/77229081704/firefox-doesnt-support-canvas-composite-darker), so these browsers will fallback to simple black and white design, using `channels: [ 'lum' ]`.

## MIT License

All credits to https://github.com/desandro/breathing-halftone
Breathing Halftone is released under the [MIT License](http://desandro.mit-license.org/). Have at it.
