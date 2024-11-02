export const slugify = (title) => {
  return title.toLowerCase().replace(/\s+/g, '-');
};

export const capitalizeFirstLetter = (word) => {
  return word[0].toUpperCase() + word.slice(1)
}