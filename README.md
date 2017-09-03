# js-common-styles

Common js styles to be used with a css-in-js library like Glamor.

#### Install

```
npm install --save js-common-styles
```

#### How to use with Glamor:

```jsx
import {p20, bold} from 'js-common-styles';

const textComponent = () => <span css={[p20, bold]}>Example Text</span>
```

#### Available Styles:
```
bold
medium
light
center
top
middle
bottom
p1 -> p72 (Font Sizes)
```
