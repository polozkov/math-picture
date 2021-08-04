# math-picture
Visit
https://polozkov.github.io/math-picture/
to see math picture.

Generate picture on JavaScript (pixel by pixel) by math formula. Result is on HTML canvas.


Generation Canvas Image pixel by pixel
One page Example on vanilla JavaScript

I make constant amount of steps for each pixel for RGB components
My formula works with three real numbers in [0..1)

(x,y,z) = (any three real functions(x,y,z))
then a convert  3 real numbers [0..1) in RGB color


How I work with one pixel (pixel by pixel)?
I Use Context Object with ctx.createImageData().data
It is the array with all RGBA components for pixels,
It has length = [width * height * 4]
