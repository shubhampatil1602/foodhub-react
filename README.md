# foodhub - A React Project from scratch 🚀

## foodhub

- Header
  - Logo
  - Nav Items
- Body
  - Search
  - RestaurantContainer
  - RestaurantCards
  - Img
  - Name of resto, star, cuisine, delivery time
- Footer
  - Copyright
  - Links
  - Address
  - Contact us

## Learnings from Namaste React while making this project:

- One of the reason for react is fast is it uses virtual dom, diff algo., reconciliation.

- Virtual DOM helps in rendering only those components which have changed instead of re-rendering all component.

- Virtual DOM helps in optimizing rendering by comparing old and new state of components. It only updates.

- Virtual DOM is the object representation of Actual DOM.

- Reconciliation aka react-fiber is, The algorithm React uses to diff one tree with another to determine which parts need to be changed.

- In React, a component is a piece of reusable code that represents a part of a user interface. Components are used to render, manage, and update the UI elements in your application.

- package.json is a configuration for npm.

- npm is a package manager. Collection of packages.

- create-react-app uses webpack and babel bts.

- Two type of dependencies we can install : 1) Dev-dependencies (used in development phase) 2) Normal (production).

- Packages are aka dependencies. node_modules is a collection of dependencies.

- If you have package.json & package-lock.json, you can recreate/install all your node_modules.

- Most imp. package in our project is a bundler. (webpack, parcel, vite, etc...)

- `JSX - HTML-like or XML-like syntax.`

- JSX => Babel transpiles it to React.createElement => JS Object => HTMLElement(render) => And this all done by Babel. Babel is converting JSX to React.createElement.

` Load -> Render -> API call -> Re-render`

- Two ways to create Components in react: 1) Class Based (old) and 2) Functional Based Compponents (new).

- In class based component,
  class Name extends React.Component {
  constructor(props) {
  super(props);
  } and then render() { return (...)} this is how it is written and inside constructor this.state={something: 1,} & to update this.setState({something: this.state.something+1}) inside return statement.

- `componentDidMount()` is used to make api calls

- A f`unctional component` is normal JS function that returns JSX code or React element.

- `Component Composition` -> Component inside ReactComponent.

- `Functional components` are JS functions and Props are like passing arguments to functional components.

- `ConfigDrivenUI` - data is driven by config with the help of backend api. In short different content for different locations.

- Two types of export/import. 1) export default componentName -> import componentName from "path" 2) using export keyword infront of variable (named export) -> import { name } from "path"

- `Lazy Loading` -> Lazy loading is a technique used to improve the performance of a web application by loading specific components or code chunks only when they are needed, rather than loading everything upfront. (In short Import code for a particular page when required to avoid large file size).

  - Lazy loading also known as:
    - Chunking
    - Code Splitting
    - Dynamic Bundling
    - On Demand loading
    - Dynamic import

- `Higher order components` is a normal javascript function, that takes a component and returns a component.

  - It takes an existing component, enhances it, adds some extra features to component and return it.

- `React Context` avoids problem called `props drilling` aka `prop passing`.

  - Prop drilling involves sending props from one component to another, and potentially passing them through several intermediate components (higher-level component to a lower-level component in a component hierarchy).
  - For example -
    - If I had to send prop from top level node to leaf node level, I need to pass that props to intermediate children and then they need to pass that prop to next level in order to reach leaf node. This is what prop drilling is.

- `Context` is a feature that allows you to share data across the component tree without having to pass props manually at every level. It provides a way to create a global state or shared data that can be accessed by any component within the tree.

- `Redux` is a different library that is used for managing state (state management). Redux works with other libraries as well but it is heavily used with react. There is a library called `zustand` which is similar to redux.

- Redux is helpful for managing large scale application. Here are some advantages/uses:
  - Used to handle state of application
  - Handing data
  - Managing store
  - Redux offers Easy debugging

### 🚀 `To install a package we use npm and to execute a package we use npx command.`

## React Hooks

- Normal JS utility functions

- Whenever a state variable updates, react re-render the components.

- There are multiple hooks in react but here are 2 very imp hooks:

  - useState() -> used to generate powerful state variables in react. If you want to make your component dynamic, this is where useState variables comes.
  - useEffect() -> used when we have to make an external api calls, useEffect() will be called after the component rendered.

- Whenever state variables update, react triggers a reconciliation cycle(re-renders the component).

## 2 Types of Routing in web apps

- Client Side Routing
- Server Side Routing -> refreshes whole page if we have to navigate into the other page(<a href="/"> tag in html)

## What is Parcel doing for us ?

- Dev Build
- Local Server
- Hot Module Replacement (HMR). Automatic reloding page on save.
- It uses File Watching Algorithm - written in C++
- Caching - Faster builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - it gives support of older browsers.
- Diagnostic - beautiful errors
- Error Handling
- HTTPs
- Tree Shaking - remove unused code.
- Different dev and production bundles.

## Packages to install:

1. Start with npm init (it create package.json)
2. npm i -D parcel (-D refers to dev-dependency)
3. npx parcel sourceFile (localhost)
4. Install react & react-dom as normal dependency
