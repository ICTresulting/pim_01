export const getImage = (dir: string | string, code: string | string) => {
  let img = "/src/assets/" + dir + "/" + code + ".jpg";
  // if (img === "") {
  //   img = "/src/assets/articles/4000810115013.jpg";
  // }

  img = "/src/assets/articles/4000810313822.jpg";

  return img;
};
