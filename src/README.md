# Water Tracker

## DOM vs Virtual DOM
Virtual DOM improves performance by reducing direct DOM manipulations. For example, directly manipulating styles (e.g., red text if total > 3000 ml) is fine in limited cases.

## Component Structure
- WaterForm: UI input
- WaterList: Display logs

## Functions
- Pure: `calculateTotal`
- Impure: DOM style update in `<p>`

## State Handling
- Used local state (`useState`) to manage logs.
- State lifted to `App` and passed down.

## Controlled vs Uncontrolled
- Used `useRef` to build uncontrolled inputs, demonstrating minimal re-renders.

## useRef Use
- `useRef` to access input values
- `useRef` can be extended for focus or other mutable refs

## Link
- [Water-tracker](https://564vvd.csb.app/)