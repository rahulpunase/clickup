import React from 'react';

/**
 * Extracts children of a specific type from a React node.
 * @template T - The type of the children to extract.
 * @param children - The React node to extract children from.
 * @param types - An object mapping the names of the children to extract to their types.
 * @returns An object containing the extracted children.
 */
export const extractChildrenOfType = <
  T extends Record<string, React.ElementType>,
>(
  children: React.ReactNode,
  types: T,
): { [K in keyof T]: React.ReactNode } => {
  const childrenArray = React.Children.toArray(children);
  return Object.entries(types).reduce(
    (acc, [key, type]) => {
      acc[key as keyof T] = childrenArray.find(
        (child) => React.isValidElement(child) && child.type === type,
      );
      return acc;
    },
    {} as { [K in keyof T]: React.ReactNode },
  );
};

/**
 * Extracts children of specific types from a React node and returns them along with the remaining children.
 * @template T - The type of the children to extract.
 * @param children - The React node to extract children from.
 * @param types - An object mapping the names of the children to extract to their types.
 * @returns An object containing the extracted children and the remaining children.
 */
export const extractChildren = <T extends Record<string, React.ElementType>>(
  children: React.ReactNode,
  types: T,
): { [K in keyof T]: React.ReactNode } & { remaining: React.ReactNode[] } => {
  const childrenArray = React.Children.toArray(children);
  const extracted = Object.entries(types).reduce(
    (acc, [key, type]) => {
      acc[key as keyof T] = childrenArray.find(
        (child) => React.isValidElement(child) && child.type === type,
      );
      return acc;
    },
    {} as { [K in keyof T]: React.ReactNode },
  );
  const remaining = childrenArray.filter(
    (child) => !Object.values(types).includes(child.type),
  );
  return { ...extracted, remaining };
};
