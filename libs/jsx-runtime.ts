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
      props: props || {},
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

export function render(
  vNode: JSX.VirtualNode | JSX.VirtualNode[],
  container: HTMLElement
): void {
  if (vNode === null) return;

  if (Array.isArray(vNode)) {
    vNode.forEach((child) => render(child, container));
    return;
  }

  if (typeof vNode === "string" || typeof vNode === "number") {
    container.appendChild(document.createTextNode(String(vNode)));
    return;
  }

  const { node } = vNode;

  if (node.tag === "text") {
    const textContent = node.children[0];
    container.appendChild(document.createTextNode(String(textContent)));
    return;
  }

  if (typeof node.tag === "function") {
    const subVNode = node.tag({
      ...node.props,
      children: node.children,
    });
    render(subVNode, container);
    return;
  }

  const el = document.createElement(node.tag);

  if (node.props) {
    Object.entries(node.props).forEach(([key, value]) => {
      if (key.startsWith("on") && typeof value === "function") {
        const eventName = key.slice(2).toLowerCase();
        el.addEventListener(eventName, value as EventListener);
      } else {
        el.setAttribute(key, String(value));
      }
    });
  }

  node.children.forEach((child) => render(child, el));

  container.appendChild(el);
}

export const jsx = { createElement };
