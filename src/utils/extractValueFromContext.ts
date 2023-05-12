type ContextItem = {
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export const extractValueFromContext = (
  context: ContextItem[],
  targetType: string
): string => {
  const target = context.find((item) => item.id.startsWith(targetType));
  return target ? target.text : "";
};
