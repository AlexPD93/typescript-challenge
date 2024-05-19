type Square = {
  kind: "square";
  size: number;
};

type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};

type Circle = {
  kind: "circle";
  radius: number;
};

type Shape = Square | Rectangle | Circle;

export function area(shape: Shape): number {
  // Return the area for each kind of shape
  if (shape.kind === "square") return shape.size * shape.size;
  else if (shape.kind === "rectangle") return shape.width * shape.height;
  else return Math.PI * (shape.radius * shape.radius);
}
