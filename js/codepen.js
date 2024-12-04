// Based on Dribbble shot 
// https://dribbble.com/shots/2090988-Sleeping-Beauty by Linn Fritz

// Modified CSS for the tail animation from David Khourshid's pen: https://codepen.io/davidkpiano/pen/wMqXea
// Init plugin
$("canvas").constellation({
    star: { width: 3 },
    line: { color: "rgba(255, 255, 255, .5)" },
    length: (window.innerWidth / 6),
    radius: (window.innerWidth / 5)
});
