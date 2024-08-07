export const get_color = (str: string) => {
  const predim_colors: Record<string, string> = {
    Organizer: "#a855f780",
    "Testing Account": "#ef444480",
    Volunteer: "rgb(59 130 246 / 0.7)",
  };

  ("bg-blue-500/50");

  if (predim_colors[str]) return predim_colors[str];

  const color = hexToRgb(stringToColour(str));
  if (!color) return null;
  return `rgba(${color.r}, ${color.g}, ${color.b}, 0.7)`;
};

// Get a determinsitc pseudo random colour
const stringToColour = (str: string) => {
  let hash = 0;
  str.split("").forEach((char) => {
    hash = char.charCodeAt(0) + ((hash << 5) - hash);
  });
  let colour = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    colour += value.toString(16).padStart(2, "0");
  }
  return colour;
};

function hexToRgb(hex: string) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}
