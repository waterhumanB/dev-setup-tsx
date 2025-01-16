export {};
declare global {
  namespace JSX {
    type VirtualNode = VirtualDOM | string | number | null;
    interface VirtualDOM {
      node: {
        tag: keyof HTMLElementTagNameMap | Component | "text";
        props: Record<string, unknown> | null;
        children: VirtualNode[];
      };
    }

    type Component = (props: Record<string, unknown>) => VirtualDOM;

    type Element = VirtualDOM;
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
