[Assemble]:                http://assemblecss.com
[Assemble Base]:           https://github.com/lukelarsen/assemble-base

# Assemble Buttons
Assemble Buttons is a component of the [Assemble] CSS Framework. It will give you a solid base for buttons in your project. It has some default styles that can easily be overridden so you can add your own look.

## Requirements
Assemble Buttons requires [Assemble Base].

## Installation
npm install assemble-buttons --save-dev

## Usage
### Gulp
```js
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var assembleCore = require('assemble-core');
var assembleButtons = require('assemble-buttons');

gulp.task('css', function () {
    var processors = [
        assembleCore,
        assembleButtons
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'));
});
```

## Options
Options are set with variables. These variables are already set with their default values so they will just work out of the box. If you wish to change them just define the variable you want to change before you load the _assemble-modals.css file. You may wish you see [Assemble Base] for more examples and directions for setting up a Assemble project.

### Design Variables

##### $btn-size-ratio
- Set how quickly the buttons scale.
- Default: 1.2;
- Type: Number
```css
$btn-size-ratio: 1;
```

##### $btn-padding
- Button padding. Can have single or multiple values.
- Default: 0.7em;
- Type: Number
```css
$btn-padding: 5px 10px;
```

##### $btn-default-font-size
- The default button font size
- Default: 100%;
- Type: Number
```css
$btn-padding: 5px 10px;
```

##### $btn-border-size
- The size of the button border. Is only used if border-color is used.
- Default: 1px;
- Type: Number
```css
$btn-border-size: 2px;
```

##### $btn-disabled-bg-color
- The background color of a disabled button. Is only used if $btn-disabled is true.
- Default: #DDD;
- Type: Color
```css
$btn-disabled-bg-color: #BBB;
```

##### $btn-disabled-text-color
- The text color of a disabled button. Is only used if $btn-disabled is true.
- Default: #777;
- Type: Color
```css
$btn-disabled-text-color: #EEE;
```

##### Button Colors
You will need to set a color class by using this syntax: .btn--(color name)
<br>
Then you have six options to set. None are required. They are:
- bg-color
- text-color
- border-color
- bg-hover-color
- text-hover-color
- border-hover-color

###### Example
```css
.btn--primary{
    bg-color: green;
    text-color: white;
    border-color: black;
    bg-hover-color: orange;
    text-hover-color: black;
    border-hover-color: red;
}
```
Will output:
```css
.btn--primary{
    background: green;
    color: white;
    border-color: black;
}

.btn--primary:hover,
.btn--primary:active{
    background: orange;
    color: black;
    border-color: red;
}
```
Usage
```html
<a class="btn  btn--primary">Primary Button</a>
```

### Modifier Variables

#### Button Sizes

##### $btn--large
- Turn on/off large buttons for your application. If set to true a .btn--large class will be generated.
- Default: false;
- Type: Boolean
```css
$btn-large: true;
```
Will give you:
```css
.btn--large{
    font-size: calc($btn-default-font-size * $btn-size-ratio);
}
```
Usage
```html
<a class="btn  btn--large">Primary Button</a>
<a class="btn  btn--primary  btn--large">Primary Button</a>
```

##### $btn--small
- Turn on/off small buttons for your application. If set to true a .btn--small class will be generated.
- Default: false;
- Type: Boolean
```css
$btn--small: true;
```
Will give you:
```css
.btn--small{
    font-size: calc($btn-default-font-size / $btn-size-ratio);
}
```
Usage
```html
<a class="btn  btn--small">Primary Button</a>
<a class="btn  btn--primary  btn--small">Primary Button</a>
```

##### $btn--block
- Turn on/off block buttons for your application. If set to true a .btn--block class will be generated.
- Default: false;
- Type: Boolean
```css
$btn-block: true;
```
Will give you:
```css
.btn--block{
    display: block;
    width: 100%;
    text-align: center;
}
```
Usage
```html
<a class="btn  btn--block  btn--primary">Block Primary Button</a>
```

#### Button Types

##### $btn--natural
- Turn on/off natural buttons for your application. If set to true a .btn--natural class will be generated.
- Use this if you'd like buttons to appear in the middle of sentences.
- Default: false;
- Type: Boolean
```css
$btn--natural: true;
```
Will give you:
```css
.btn--natural{
    height: auto;
    padding-right: 0.5em;
    padding-left: 0.5em;
    font-size: inherit;
    line-height: inherit;
    vertical-align: baseline;
}
```
Usage
```html
<p>Here is some next that has a <a class="btn  btn--natural  btn--small  btn--secondary">button natural</a> in the middle of it.</p>
```

##### $btn--disabled
- Turn on/off disabled buttons for your application. If set to true a .btn--disabled class will be generated.
- Use this if you will be having buttons that are disabled in your app.
- Default: false;
- Type: Boolean
```css
$btn--disabled: true;
```
Will give you:
```css
.btn--disabled{
    background-color: $btn-disabled-bg-color;
    color: $btn-disabled-text-color;
}

.btn-disabled:hover,
.btn-disabled:active,
.btn-disabled:focus{
    background-color: $btn-disabled-bg-color !important;
    cursor: not-allowed;
    color: $btn-disabled-text-color !important;
}
```
Usage
```html
<a class="btn  btn--disabled">Disabled Primary Button</a>
```

#### Button Group
- Turn on/off grouped buttons for your application. If set to true a .btn-group class will be generated.
- Use this if you will be having buttons that are grouped together in your app.
- You will need to have a wrapping div around your buttons that has the class .btn-group.
- Default: false;
- Type: Boolean
- If true the css for button groups will be loaded.
```css
$btn-group: true;
```
Will give you:
```css
.btn-group{
    clear: fix;
    display: inline-block;
    position: relative;
    white-space: nowrap;
    vertical-align: middle;
}

.btn-group > *{
    float: left;
}
```
Usage
```html
<div class="btn-group">
    <a class="btn  btn--small  btn--secondary">Button One</a>
    <a class="btn  btn--small  btn--secondary">Button One</a>
    <a class="btn  btn--small  btn--secondary">Button One</a>
</div>
```

#### Button Clean Up
- Included automatically
```css
.btn:hover,
.btn:active,
.btn:focus,
.btn:visited{
    text-decoration: none;
}

.btn:active,
.btn:focus{
    outline: none;
}

.btn::-moz-focus-inner{
    padding: 0;
    border: 0;
}
```
