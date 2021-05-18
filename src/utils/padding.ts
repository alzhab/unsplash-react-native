const padding = ({
  top = 20,
  right,
  bottom,
  left,
}: {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}) => {
  return {
    paddingTop: top,
    paddingRight: Number.isInteger(right) ? right : top,
    paddingBottom: Number.isInteger(bottom) ? bottom : top,
    paddingLeft: Number.isInteger(left)
      ? left
      : Number.isInteger(right)
      ? right
      : top,
  };
};

export default padding;
