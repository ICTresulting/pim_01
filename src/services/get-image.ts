export const getImage = (ean: string | string) => {
  let img = "/src/assets/articles/" + ean + ".jpg";
  // if (img === "") {
  //   img = "/src/assets/articles/4000810115013.jpg";
  // }

  img = "/src/assets/articles/4000810313822.jpg";

  return img;
};
