/*
  Based on https://tannerhelland.com/2012/09/18/convert-temperature-rgb-algorithm-code.html
*/
export const colorTemperatureKelvinToRgb = (kelvin, asHexadecimal = false) => {

    const temp = kelvin / 100
    let red, green, blue

    if (temp <= 66) {
        red = 255
        // new code to make brown dwarfs dimmer
        if (temp < 10) {
            red = 255 * (temp / 10)
        }

        green = temp
        green = 99.4708025861 * Math.log(green) - 161.1195681661

        if (temp <= 19) {
            blue = 0
        } else {
            blue = temp - 10;
            blue = 138.5177312231 * Math.log(blue) - 305.0447927307
        }

    } else {
        red = temp - 60;
        red = 329.698727446 * Math.pow(red, -0.1332047592)

        green = temp - 60;
        green = 288.1221695283 * Math.pow(green, -0.0755148492)

        blue = 255
    }

    if (asHexadecimal) {
      return (Math.round(red)<< 16) | (Math.round(green) << 8) | Math.round(blue)
    } else {
      return {
        red: clamp(red, 0, 255),
        green: clamp(green, 0, 255),
        blue: clamp(blue, 0, 255)
      }
    }
}

const clamp = (x, min, max) => {
    if (x < min) { return min }
    if (x > max) { return max }

    return x
}