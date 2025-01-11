export const createElement = (
  component: keyof HTMLElementTagNameMap | JSX.Component,
  props: Record<string, unknown> | null,
  ...children: JSX.VirtualNode[]
): JSX.Element => {
  if (typeof component === "function") {
    return component({ ...props, children });
  }

  return {
    node: {
      tag: component,
      props,
      children: children.flat(Infinity).map((child) => {
        if (
          typeof child === "string" ||
          typeof child === "number" ||
          child === null
        ) {
          return {
            node: {
              tag: "text",
              props: null,
              children: [child],
            },
          };
        }
        return child as JSX.VirtualDOM;
      }),
    },
  };
};

export const Fragment = (props: { children?: JSX.VirtualNode[] }) => {
  return props.children || [];
};

export const jsx = { createElement };
