# scss

## import

```scss
/* _colors.scss(partial) */

$light-gray: #F2F2F2
$dark-gray: #737373
/*EOF colors.scss*/
```

```scss
/* _buttons.scss(partial) */

.button-primary {
  color: #4c7396;
  background-color: #ffffff;
}
.button-secondary {
  background: #4c7396;
  color: #ffffff;
}
/*EOF buttons.scss*/
```

```scss
/* main.scss */
@import '_buttons.scss';
@import '_colors.scss';
```
