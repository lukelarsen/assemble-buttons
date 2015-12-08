[Assemble]:                http://assemblecss.com
[Assemble Core]:           https://github.com/lukelarsen/assemble-core

# Assemble Buttons
Assemble Buttons is a component of the [Assemble] CSS Framework. It will give you a solid base for buttons in your project. It has some default styles that can easily be overridden so you can add your own look.

## Requirements
Assemble Buttons requires [Assemble Core].

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
        assembleCore({
            zLayerValues: {
                'modal': 9,
                'tip': 10
            }
        }),
        assembleButtons
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'));
});
```

## Options

### Design Variables

##### $btn-size-ratio
- Default: 1.2;
- Type: Number
```css
$btn-size-ratio: 1;
```

##### $btn-padding
- Default: 0.7em;
- Type: Number
- It can be multiple values with a max of four (see example). It can also take any unit type.
```css
$btn-padding: 5px 10px;
```

##### $btn-default-font-size
- Default: 100%;
- Type: Number
- It can take any unit type.
```css
$btn-padding: 5px 10px;
```

##### $btn-border-size
- Default: 1px;
- Type: Number
- It can take any unit type.
- It is only used if a border-color is set when creating button colors. See colors below.
```css
$btn-border-size: 2px;
```

##### $btn-disabled-bg-color
- Default: #DDD;
- Type: Color
- It should be hex or rgba.
- It is only used if $btn--disabled is true. See below.
```css
$btn-disabled-bg-color: #BBB;
```

##### $btn-disabled-text-color
- Default: #777;
- Type: Color
- It should be hex or rgba.
- It is only used if $btn--disabled is true. See below.
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

### Modifier Variables

#### Button Sizes

##### $btn--large
- Default: false;
- Type: Boolean
- If true the css for large buttons will be loaded.
```css
$btn-large: true;
```
Will give you:
```css
.btn--large{
    font-size: calc($btn-default-font-size * $btn-size-ratio);
}
```

##### $btn--small
- Default: false;
- Type: Boolean
- If true the css for small buttons will be loaded.
```css
$btn--small: true;
```
Will give you:
```css
.btn--small{
    font-size: calc($btn-default-font-size / $btn-size-ratio);
}
```

##### $btn--block
- Default: false;
- Type: Boolean
- If true the css for block butons will be loaded.
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

#### Button Types

##### $btn--natural
- Default: false;
- Type: Boolean
- If true the css for natural buttons will be loaded.
- Use this if you'd like buttons to appear in the middle of sentences.
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

##### $btn--disabled
- Default: false;
- Type: Boolean
- If true the css for disabled buttons will be loaded.
- Use this if you will be having buttons that are disabled in your app.
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

#### Button Group
- Default: false;
- Type: Boolean
- If true the css for button groups will be loaded.
- Use this if you will be having buttons that are grouped together in your app.
- You will need to have a wrapping div around your buttons that has the class .btn-group.
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
