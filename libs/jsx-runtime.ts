export function createElement(type: string, props: string, ...children: any) {
  return {
    type,
    props,
    children,
  };
}

export function Fragment(props: any) {
  return props.children;
}
