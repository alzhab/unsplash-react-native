interface IProps {
  photo: {
    width: number;
    height: number;
  };
  defaultHeight: number;
}

export const getImageHeight = ({
  photo: {width, height},
  defaultHeight,
}: IProps) => {
  if (width > height) {
    return defaultHeight;
  } else {
    const withPercentage = +((width * 100) / height).toFixed();

    if (withPercentage > 50) {
      return defaultHeight * 2.5;
    } else if (withPercentage > 25) {
      return defaultHeight * 2;
    } else {
      return defaultHeight * 1.5;
    }
  }
};
