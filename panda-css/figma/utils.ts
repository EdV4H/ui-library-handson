import primitivesJson from "./primitives.json";
import textStyleJson from "./design-tokens.tokens.json";

type OriginalPalette = {
  $type?: string;
  $value?: string;
};

type OriginalRadius = {
  $type?: string;
  $value?: number;
};

type OriginalTextStyle = {
  fontSize: {
    type: string;
    value: number;
  };
  textDecoration: {
    type: string;
    value: string;
  };
  fontFamily: {
    type: string;
    value: string;
  };
  fontWeight: {
    type: string;
    value: string;
  };
  fontStyle: {
    type: string;
    value: string;
  };
  fontStretch: {
    type: string;
    value: string;
  };
  letterSpacing: {
    type: string;
    value: number;
  };
  lineHeight: {
    type: string;
    value: number;
  };
  paragraphIndent: {
    type: string;
    value: number;
  };
  paragraphSpacing: {
    type: string;
    value: number;
  };
  textCase: {
    type: string;
    value: string;
  };
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
      { value: `${(value as OriginalRadius).$value}px` ?? "0px" },
    ])
  );
};

export const getTextStyles = () => {
  const originalTextStyles = textStyleJson.typography;
  return Object.fromEntries(
    Object.entries(originalTextStyles).map(([key, value]) => [
      key,
      Object.fromEntries(
        Object.entries(value).map(([k, v]) => [
          k,
          {
            value: {
              fontSize: `${v.fontSize}px`,
            },
          },
        ])
      ),
    ])
  );
};
