type HTMLTagNames = keyof HTMLElementTagNameMap & string;
type HTMLElementContent = HTMLElement & Array<HTMLElement> | string | DocumentFragment;

interface HTMLElement {
  /**
   * Returns the first element that is a descendant of node that matches selectors.
   */
  get<K extends keyof HTMLElementTagNameMap>(
    selectors: K,
  ): HTMLElementTagNameMap[K] | null;
  get<K extends keyof SVGElementTagNameMap>(
    selectors: K,
  ): SVGElementTagNameMap[K] | null;
  get<K extends keyof MathMLElementTagNameMap>(
    selectors: K,
  ): MathMLElementTagNameMap[K] | null;
  get<E extends Element = Element>(selectors: string): E | null;
  /**
   * Returns all element descendants of node that match selectors.
   */
  getAll<K extends keyof HTMLElementTagNameMap>(
    selectors: K,
  ): NodeListOf<HTMLElementTagNameMap[K]>;
  getAll<K extends keyof SVGElementTagNameMap>(
    selectors: K,
  ): NodeListOf<SVGElementTagNameMap[K]>;
  getAll<K extends keyof MathMLElementTagNameMap>(
    selectors: K,
  ): NodeListOf<MathMLElementTagNameMap[K]>;
  getAll<E extends Element = Element>(selectors: string): NodeListOf<E>;
  /**
   * Sets or gets the content of the element.
   */
  content: HTMLElementContent;
}

type StyleList = {
  [key in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[key];
};

type Dataset = {
  [key: string]: string;
};

type EnterKeyHint =
  | "enter"
  | "done"
  | "go"
  | "next"
  | "previous"
  | "search"
  | "send";

interface HTMLElementAttributes {
  /**
   * The id of the element.
   */
  id?: string;
  /**
   * Sets content of the element.
   * @example $div.content = tag('span', 'Hello World!');
   */
  content?: HTMLElementContent;
  /**
   * css class name
   */
  className?: string;
  /**
   * Sets attributes of element.
   */
  attr?: { string: string };
  /**
   * child of this element.
   */
  child?: Node;
  /**
   * children of the this element.
   */
  children?: Array<Node>;
  /**
   * style of the HTMLElement
   */
  style?: StyleList;
  /**
   * Forms a class of attributes, called custom data attributes, that allow proprietary information to be exchanged between the HTML and its DOM representation that may be used by scripts. All such custom data are available via the HTMLElement interface of the element the attribute is set on. The HTMLElement.dataset property gives access to them.
   */
  dataset?: Dataset;
  /**
   * A string representing the access key assigned to the element.
   */
  accessKey?: string;
  /**
   * A string reflecting the aria-atomic attribute, which indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
   */
  ariaAtomic?: "true" | "false";
  /**
   * A string reflecting the aria-autocomplete attribute, which indicates whether inputting text could trigger display of one or more predictions of the user's intended value for a combobox, searchbox, or textbox and specifies how predictions would be presented if they were made.
   */
  ariaAutoComplete?: "inline" | "list" | "both" | "none";
  /**
   *The ariaBusy property of the Element interface reflects the value of the aria-busy attribute, which indicates whether an element is being modified, as assistive technologies may want to wait until the modifications are complete before exposing them to the user.
   */
  ariaBusy?: "true" | "false";
  /**
   * A string reflecting the aria-checked attribute, which indicates the current "checked" state of checkboxes, radio buttons, and other widgets that have a checked state.
   */
  ariaChecked?: "true" | "false" | "mixed";
  /**
   * A number reflecting the aria-colcount attribute, which defines the number of columns in a table, grid, or treegrid.
   */
  ariaColCount?: number;
  /**
   * A number reflecting the aria-colindex attribute, which defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
   */
  ariaColIndex?: number;
  /**
   * A string reflecting the aria-colindextext attribute, which defines a human readable text alternative of aria-colindex.
   */
  ariaColIndexText?: string;
  /**
   * A number reflecting the aria-colspan attribute, which defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
   */
  ariaColSpan?: number;
  /**
   * A string reflecting the aria-current attribute, which indicates the element that represents the current item within a container or set of related elements.
   */
  ariaCurrent?:
    | "page"
    | "step"
    | "location"
    | "date"
    | "time"
    | "true"
    | "false";
  /**
   * A string reflecting the aria-description attribute, which defines a string value that describes or annotates the current element.
   */
  ariaDescription?: string;
  /**
   * A string reflecting the aria-disabled attribute, which indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
   */
  ariaDisabled?: "true" | "false";
  /**
   * A string reflecting the aria-expanded attribute, which indicates whether a grouping element owned or controlled by this element is expanded or collapsed.
   */
  ariaExpanded?: "true" | "false" | "undefined";
  /**
   * A string reflecting the aria-haspopup attribute, which indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
   */
  ariaHasPopup?:
    | "true"
    | "false"
    | "menu"
    | "listbox"
    | "tree"
    | "grid"
    | "dialog";
  /**
   * A string reflecting the aria-hidden attribute, which indicates whether the element is exposed to an accessibility API.
   */
  ariaHidden?: "true" | "false" | "undefined";
  /**
   * A string reflecting the aria-keyshortcuts attribute, which indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
   */
  ariaKeyShortCuts?: string;
  /**
   * A string reflecting the aria-label attribute, which defines a string value that labels the current element.
   */
  ariaLabel?: string;
  /**
   * A number reflecting the aria-level attribute, which defines the hierarchical level of an element within a structure.
   */
  ariaLevel?: number;
  /**
   * A string reflecting the aria-live attribute, which indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
   */
  ariaLive?: "assertive" | "off" | "polite";
  /**
   * A string reflecting the aria-modal attribute, which indicates whether an element is modal when displayed.
   */
  ariaModal?: "true" | "false";
  /**
   * A string reflecting the aria-multiline attribute, which indicates whether a text box accepts multiple lines of input or only a single line.
   */
  ariaMultiline?: "true" | "false";
  /**
   * A string reflecting the aria-multiselectable attribute, which indicates that the user may select more than one item from the current selectable descendants.
   */
  ariaMultiSelectable?: "true" | "false";
  /**
   * A string reflecting the aria-orientation attribute, which indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
   */
  ariaOrientation?: "horizontal" | "vertical" | "undefined";
  /**
   * A string reflecting the aria-placeholder attribute, which defines a short hint intended to aid the user with data entry when the control has no value.
   */
  ariaPlaceholder?: string;
  /**
   * A number reflecting the aria-posinset attribute, which defines an element's number or position in the current set of listitems or treeitems.
   */
  ariaPosInSet?: number;
  /**
   * A string reflecting the aria-pressed attribute, which indicates the current "pressed" state of toggle buttons.
   */
  ariaPressed?: "true" | "false" | "mixed" | "undefined";
  /**
   * A string reflecting the aria-readonly attribute, which indicates that the element is not editable, but is otherwise operable.
   */
  ariaReadOnly?: "true" | "false";
  /**
   * A string reflecting the aria-relevant attribute, which indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. This is used to describe what changes in an aria-live region are relevant and should be announced.
   */
  ariaRelevant?: "additions" | "removals" | "text" | "all";
  /**
   * A string reflecting the aria-required attribute, which indicates that user input is required on the element before a form may be submitted.
   */
  ariaRequired?: "true" | "false";
  /**
   * A string reflecting the aria-roledescription attribute, which defines a human-readable, author-localized description for the role of an element.
   */
  ariaRoleDescription?: string;
  /**
   * A string reflecting the aria-rowcount attribute, which defines the total number of rows in a table, grid, or treegrid.
   */
  ariaRowCount?: number;
  /**
   * A string reflecting the aria-rowindex attribute, which defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
   */
  ariaRowIndex?: number;
  /**
   * A string reflecting the aria-rowindextext attribute, which defines a human readable text alternative of aria-rowindex.
   */
  ariaRowIndexText?: string;
  /**
   * A number reflecting the aria-rowspan attribute, which defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
   */
  ariaRowSpan?: number;
  /**
   * A string reflecting the aria-selected attribute, which indicates the current "selected" state of elements that have a selected state.
   */
  ariaSelected?: "true" | "false" | "undefined";
  /**
   * A number reflecting the aria-setsize attribute, which defines the number of items in the current set of listitems or treeitems.
   */
  ariaSetSize?: number;
  /**
   * A string reflecting the aria-sort attribute, which indicates if items in a table or grid are sorted in ascending or descending order.
   */
  ariaSort?: "ascending" | "descending" | "none" | "other";
  /**
   * A number reflecting the aria-valueMax attribute, which defines the maximum allowed value for a range widget.
   */
  ariaValueMax?: number;
  /**
   * A number reflecting the aria-valueMin attribute, which defines the minimum allowed value for a range widget.
   */
  ariaValueMin?: number;
  /**
   * A number reflecting the aria-valueNow attribute, which defines the current value for a range widget.
   */
  ariaValueNow?: number;
  /**
   * A string reflecting the aria-valuetext attribute, which defines the human readable text alternative of aria-valuenow for a range widget.
   */
  ariaValueText?: string;
  /**
   * Controls whether and how text input is automatically capitalized as it is entered/edited by the user. It can have the following values:
   *  - `off` or `none`, no autocapitalization is applied (all letters default to lowercase)
   *  - `on` or `sentences`, the first letter of each sentence defaults to a capital letter; all other letters default to lowercase
   *  - `words`, the first letter of each word defaults to a capital letter; all other letters default to lowercase
   *  - `characters`, all letters should default to uppercase
   */
  autocapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters";
  /**
   * Indicates that an element is to be focused on page load, or as soon as the <dialog> it is part of is displayed. This attribute is a boolean, initially false.
   */
  autofocus?: boolean;
  /**
   * An enumerated attribute indicating if the element should be editable by the user. If so, the browser modifies its widget to allow editing. The attribute must take one of the following values:
   *  - `true` or the empty string, which indicates that the element must be editable;
   *  - `false`, which indicates that the element must not be editable.
   */
  contentEditable?: boolean;
  /**
   * A string, reflecting the dir global attribute, representing the directionality of the element. Possible values are "ltr", "rtl", and "auto".
   */
  dir?: "ltr" | "rtl" | "auto";
  /**
   * A boolean value indicating if the element can be dragged.
   */
  draggable?: boolean;
  /**
   * A string defining what action label (or icon) to present for the enter key on virtual keyboards.
   */
  enterKeyHint?: EnterKeyHint;
  /**
   * A boolean value indicating if the element is hidden or not.
   */
  hidden?: boolean;
  /**
   * Provides a hint to browsers as to the type of virtual keyboard configuration to use when editing this element or its contents. Used primarily on `<input>` elements, but is usable on any element while in contenteditable mode.
   */
  inputMode?:
    | "none"
    | "text"
    | "decimal"
    | "numeric"
    | "tel"
    | "search"
    | "email"
    | "url";
  /**
   * Allows you to specify that a standard HTML element should behave like a registered custom built-in element (see Using custom elements for more details).
   */
  is?: string;
  /**
   * A boolean value indicating whether the user agent must act as though the given node is absent for the purposes of user interaction events, in-page text searches ("find in page"), and text selection.
   */
  inert?: boolean;
  /**
   * Represents the rendered text content of a node and its descendants. As a getter, it approximates the text the user would get if they highlighted the contents of the element with the cursor and then copied it to the clipboard. As a setter, it replaces the content inside the selected element, converting any line breaks into `<br>` elements.
   */
  innerText?: string;
  /**
   * A string representing the markup of the element's content.
   */
  innerHTML?: string;
  /**
   * A string representing the language of an element's attributes, text, and element contents.
   */
  lang?: string;
  /**
   * A cryptographic nonce ("number used once") which can be used by Content Security Policy to determine whether or not a given fetch will be allowed to proceed.
   */
  nonce?: string;
  /**
   * Represents the rendered text content of a node and its descendants. As a getter, it is the same as HTMLElement.innerText (it represents the rendered text content of an element and its descendants). As a setter, it replaces the selected node and its contents with the given value, converting any line breaks into `<br>` elements.
   */
  outerText?: string;
  /**
   * A string representing the markup of the element including its content. When used as a setter, replaces the element with nodes parsed from the given string.
   */
  outerHTML?: string;
  /**
   * Represents the part identifier(s) of the element (i.e. set using the `part` attribute), returned as a DOMTokenList.
   */
  part?: string;
  /**
   * A number representing the left scroll offset of the element.
   */
  scrollLeft?: number;
  /**
   * A number representing number of pixels the top of the element is scrolled vertically.
   */
  scrollTop?: number;
  /**
   * Returns the name of the shadow DOM slot the element is inserted in.
   */
  slot?: string;
  /**
   * An enumerated attribute defines whether the element may be checked for spelling errors. It may have the following values:
   * - `true`, which indicates that the element should be, if possible, checked for spelling errors;
   * - `false`, which indicates that the element should not be checked for spelling errors.
   */
  spellcheck?: boolean;
  /**
   * A `long` representing the position of the element in the tabbing order.
   */
  tabIndex?: number;
  /**
   * A string containing the text that appears in a popup box when mouse is over the element.
   */
  title?: string;
  /**
   * A boolean value representing the translation.
   */
  translate?: boolean;
  /**
   * The `abort` event is fired when the resource was not fully loaded, but not as the result of an error.
   * This event is not cancelable and does not bubble.
   */
  onabort?: (this: HTMLElement, event: Event) => void;
  /**
   * Fired when a non-primary pointing device button (e.g., any mouse button other than the left button) has been pressed and released on an element. Also available via the onauxclick property.
   */
  onuxclick?: (this: HTMLElement, event: MouseEvent) => void;
  /**
   * The `contextmenu` event fires when the user attempts to open a context menu. This event is typically triggered by clicking the right mouse button, or by pressing the context menu key.
   * In the latter case, the context menu is displayed at the bottom left of the focused element, unless the element is a tree, in which case the context menu is displayed at the bottom left of the current row.
   * Any right-click event that is not disabled (by calling the event's
   * ```js
   * preventDefault()
   * ```
   * method) will result in a `contextmenu` event being fired at the targeted element.
   */
  oncontextmenu?: (this: Node, event: MouseEvent) => void;
  /**
   * Fired when the user initiates a copy action through the browser's user interface. Also available via the oncopy property.
   */
  oncopy?: (this: HTMLElement, event: ClipboardEvent) => void;
  /**
   * Fired when a pointing device button (e.g., a mouse's primary button) is pressed and released on a single element. Also available via the onclick property.
   */
  onclick?: (this: HTMLElement, event: MouseEvent) => void;
  /**
   * Fired when the user initiates a cut action through the browser's user interface. Also available via the oncut property.
   */
  oncut?: (this: HTMLElement, event: ClipboardEvent) => void;
  /**
   * Fired when a pointing device button (e.g., a mouse's primary button) is clicked twice on a single element. Also available via the ondblclick property.
   */
  ondblclick?: (this: HTMLElement, event: MouseEvent) => void;
  /**
   * The `formdata` event fires after the entry list representing the form's data is constructed. This happens when the form is submitted, but can also be triggered by the invocation of a `FormData()` constructor.
   */
  onformdata?: (this: Node, event: FormDataEvent) => void;
  /**
   * Fired when a pointing device button is pressed on an element. Also available via the onmousedown property.
   */
  onmousedown?: (this: HTMLElement, event: MouseEvent) => void;
  /**
   * Fired when a pointing device (usually a mouse) is moved over the element that has the listener attached. Also available via the onmouseenter property.
   */
  onmouseenter?: (this: HTMLElement, event: MouseEvent) => void;
  /**
   * Fired when the pointer of a pointing device (usually a mouse) is moved out of an element that has the listener attached to it. Also available via the onmouseleave property.
   */
  onmouseleave?: (this: HTMLElement, event: MouseEvent) => void;
  /**
   * Fired when a pointing device (usually a mouse) is moved while over an element. Also available via the onmousemove property.
   */
  onmousemove?: (this: HTMLElement, event: MouseEvent) => void;
  /**
   * Fired when a pointing device (usually a mouse) is moved off the element to which the listener is attached or off one of its children. Also available via the onmouseout property.
   */
  onmouseout?: (this: HTMLElement, event: MouseEvent) => void;
  /**
   * Fired when a pointing device is moved onto the element to which the listener is attached or onto one of its children. Also available via the onmouseover property.
   */
  onmouseover?: (this: HTMLElement, event: MouseEvent) => void;
  /**
   * Fired when a pointing device button is released on an element. Also available via the onmouseup property.
   */
  onmouseup?: (this: HTMLElement, event: MouseEvent) => void;
  /**
   * Fired when the user initiates a paste action through the browser's user interface. Also available via the onpaste property.
   */
  onpaste?: (this: HTMLElement, event: ClipboardEvent) => void;
  /**
   * An event handler representing the code to be called when the `progress` event is raised.
   */
  onprogress?: (this: Node, event: Event) => void;
  /**
   * An event handler representing the code to be called when the `ratechange` event is raised.
   */
  onratechange?: (this: Node, event: Event) => void;
  /**
   * An event handler representing the code to be called when the `seeked` event is raised.
   */
  onseeked?: (this: Node, event: Event) => void;
  /**
   * An event handler representing the code to be called when the `seeking` event is raised.
   */
  onseeking?: (this: Node, event: Event) => void;
  /**
   * An event handler representing the code to be called when the `stalled` event is raised.
   */
  onstalled?: (this: Node, event: Event) => void;
  /**
   * An event handler representing the code to be called when the `suspend` event is raised.
   */
  onsuspend?: (this: Node, event: Event) => void;
  /**
   * An event handler representing the code to be called when the `timeupdate` event is raised.
   */
  ontimeupdate?: (this: Node, event: Event) => void;
  /**
   * An event handler representing the code to be called when the `volumechange` event is raised.
   */
  onvolumechange?: (this: Node, event: Event) => void;
  /**
   * An event handler representing the code to be called when the `waiting` event is raised.
   */
  onwaiting?: (this: Node, event: Event) => void;
  /**
   * An event handler executed on touch start.
   */
  ontouchstart?: (this: Node, event: TouchEvent) => void;
  /**
   * An event handler executed on touch move.
   */
  ontouchmove?: (this: Node, event: TouchEvent) => void;
  /**
   * An event handler executed on touch end.
   */
  ontouchend?: (this: Node, event: TouchEvent) => void;
  /**
   * An event handler executed on touch cancel.
   */
  ontouchcancel?: (this: Node, event: TouchEvent) => void;
  /**
   * attributes of the HTMLElement
   */
  [key: string]: any;
}

interface UseText extends Text {
  value: string | number;
  onChange: (this: UseText, value: string | number) => void;
}

interface Tag {
  <K extends HTMLTagNames>(
    tagName: K,
    options?: HTMLElementAttributes & object,
  ): HTMLElementTagNameMap[K];
  <K extends HTMLTagNames>(
    tagName: K,
    innerHTML: string,
  ): HTMLElementTagNameMap[K];
  (tagName: string, options?: HTMLElementAttributes & object): HTMLElement;
  (tagName: string, innerHTML: string): HTMLElement;
  /**
   * Returns the first element that is a descendant of node that matches selectors.
   */
  get<K extends keyof HTMLElementTagNameMap>(
    selectors: K,
  ): HTMLElementTagNameMap[K] | null;
  get<K extends keyof SVGElementTagNameMap>(
    selectors: K,
  ): SVGElementTagNameMap[K] | null;
  get<K extends keyof MathMLElementTagNameMap>(
    selectors: K,
  ): MathMLElementTagNameMap[K] | null;
  get<E extends Element = Element>(selectors: string): E | null;
  /**
   * Returns all element descendants of node that match selectors.
   */
  getAll<K extends keyof HTMLElementTagNameMap>(
    selectors: K,
  ): NodeListOf<HTMLElementTagNameMap[K]>;
  getAll<K extends keyof SVGElementTagNameMap>(
    selectors: K,
  ): NodeListOf<SVGElementTagNameMap[K]>;
  getAll<K extends keyof MathMLElementTagNameMap>(
    selectors: K,
  ): NodeListOf<MathMLElementTagNameMap[K]>;
  getAll<E extends Element = Element>(selectors: string): NodeListOf<E>;
  text(text: string): Text;
  use(text: string | number): UseText;
}

declare module "html-tag-js" {
  const tag: Tag;

  export default tag;
}

declare const tag: typeof import("html-tag-js").default;

declare module "html-tag-js/ref" {
  export default class Ref {
    /**
     * Element reference
     */
    el: HTMLElement;
    /**
     * Get element by query selector
     * @param selector
     */
    get(selector: string): HTMLElement;
    /**
     * Get all elements by query selector
     * @param selector
     */
    getAll(selector: string): Array<HTMLElement>;
    /**
     * Parse html string to HTMLElement
     * @param name name of the attribute
     * @param value value of the attribute
     */
    attr(name: string, value: string): void;
    /**
     * Get attribute value
     * @param name name of the attribute
     * @returns value of the attribute
     */
    attr(name: string): string;
    /**
     * Append child to the element
     * @param els child element
     */
    append(...els: Node[]): void;
    /**
     * Attach event listener
     * @param event event name
     * @param cb callback function
     */
    on(event: "ref", cb: (this: Ref, ref: HTMLElement) => void): void;
    /**
     * Remove event listener
     * @param event event name
     * @param cb callback function
     */
    off(event: "ref", cb: (this: Ref, ref: HTMLElement) => void): void;
    /**
     * Called when reference is set
     */
    onref: (this: Ref, ref: HTMLElement) => void;
    /**
     * Get the classList
     * If the element is not yet created
     * `Setter` will store the value and apply it when the element is created
     * `Getter` will return a similar object to DOMTokenList which will store the value and apply it when the element is created
     */
    classList: DOMTokenList;
    /**
     * Get the id
     * If the element is not yet created
     * `Setter` will store the value and apply it when the element is created
     * `Getter` will return the stored value
     */
    id: string;
    /**
     * Get the class name
     * If the element is not yet created
     * `Setter` will store the value and apply it when the element is created
     * `Getter` will return the stored value
     */
    className: string;
    /**
     * Get the textContent
     * If the element is not yet created
     * `Setter` will store the value and apply it when the element is created
     * `Getter` will return the stored value
     */
    textContent: string;
    /**
     * Get the innerText
     * If the element is not yet created
     * `Setter` will store the value and apply it when the element is created
     * `Getter` will return the stored value
     */
    innerText: string;
    /**
     * Get the innerHTML
     * If the element is not yet created
     * `Setter` will store the value and apply it when the element is created
     * `Getter` will return the stored value
     */
    innerHTML: string;
    /**
     * Get the value
     * If the element is not yet created
     * `Setter` will store the value and apply it when the element is created
     */
    value: string;
    /**
     * Get the value
     * If the element is not yet created
     * `Setter` will store the value and apply it when the element is created
     * `Getter` will return proxy object similar to CSSStyleDeclaration
     */
    style: CSSStyleDeclaration;
    /**
     * Get the value
     * If the element is not yet created
     * `Setter` will store the value and apply it when the element is created
     * `Getter` will return proxy object
     */
    dataset: DOMStringMap;
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    [name: string]: HTMLElementAttributes & object;
  }

  type Element = HTMLElement;
}
