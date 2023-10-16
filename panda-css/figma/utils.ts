import primitivesJson from "./primitives.json";

type OriginalPalette = {
  $type?: string;
  $value?: string;
};

type originalRadius = {
  $type?: string;
  $value?: number;
};

export const getPalette = (name: string) => {
  const originalPalette = primitivesJson.colors[name];
  return Object.fromEntries(
    Object.entries(originalPalette).map(([key, value]) => [
      key,
      { value: (value as OriginalPalette).$value ?? "#000000" },
    ])
  );
};

export const getRadius = () => {
  const originalRadius = primitivesJson.radius;
  return Object.fromEntries(
    Object.entries(originalRadius).map(([key, value]) => [
      key,
      { value: `${(value as originalRadius).$value}px` ?? "0px" },
    ])
  );
};
