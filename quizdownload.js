qns = document.getElementsByClassName("question-view")

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

style = `
<style>
/* css for input boxes */
form {
  width: 80%;
  padding-top: 20px;
  position: relative; }
.character-limit {
  font-size: 10px;
  flex: 3; }
.exceed {
  color: #a94442; }
.invalid-field:focus {
  border: 1px solid #C82128 !important;
  border-radius: 3px !important; }
.extra-flex {
  flex: 22; }
.question-container {
  display: flex;
  justify-content: space-between;
  flex-flow: column nowrap;
  background-color: white;
  border: 1px solid #DFDFDF;
  border-radius: 3px;
  font-size: 16px;
  padding: 20px; }
.question-container     em.question-blank {
    display: inline;
    border-bottom: 1px solid black;
    font-style: normal;
    padding: 0 20px; }
.input-container {
  display: flex;
  flex-flow: column nowrap;
  margin-top: 20px; }
.input-container    > * {
    margin: 5px 0; }
.input-container    > *:first-child {
      margin-top: 0; }
.input-container    > *:last-child {
      margin-bottom: 0; }
.input {
  display: flex;
  flex-flow: row nowrap;
  align-items: center; }
  
 .form-control {
  display: block;
  height: 34px;
  padding: 6px 12px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #555555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #cccccc;
  border-radius: 3px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  }
.form-control:focus {
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6); }
.input    > span {
    margin-right: 10px; }
.fib-input {
  min-width: 27%; }
.answer-fib {
  background-color: #eeeeee;
  cursor: not-allowed;
  min-width: 100%;
  border-radius: 3px; }
  
</style>
 

<style>
/* css for radio buttons and checkboxes*/
form {
  padding-top: 26px;
  position: relative; }
.option {
  display: flex;
  align-items: center;
  font-size: 16px;
  padding: 2px 20px;
  overflow: hidden;
  position: relative;
  background-color: #FFFFFF;
  border: 1px solid #dfdfdf;
  border-top: 0;
  outline: none; }
.option:first-child {
    border-top: 1px solid #dfdfdf;
    border-radius: 3px 3px 0 0; }
.option:last-child {
    border-radius: 0 0 3px 3px; }
.option   .option-bar {
    background: #D5E4F1;
    opacity: 0.59;
    position: absolute;
    display: block;
    height: 100%;
    left: 0;
    top: 0; }
.option   .option-content {
    display: flex;
    align-items: center;
    width: 100%;
    z-index: 1; }
.option   .option-content   .text {
      flex: 1;
      margin-top: 9px; }
.option   .option-content   .percentage {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin: auto 12px;
      padding: 3px;
      width: 50px;
      min-width: 50px;
      height: 50px;
      border-radius: 3px;
      background-color: #E1E1E1; }
.option   .option-content   .percentage   span {
        font-size: 13px;
        font-weight: 600;
        text-overflow: ellipsis;
        overflow: hidden; }
.option   .radio {
    position: relative;
    overflow: hidden;
    padding: 7px 1px;
    flex: 0 0 auto;
    cursor: default;
    margin-right: 15px; }
.option   .radio   input {
      position: absolute !important;
      left: -100%; }
.option   .radio   input    + span {
      display: inline-block;
      font-size: 12px;
      vertical-align: middle;
      min-width: 21px;
      cursor: pointer; }
.option   .radio   input[disabled]    + span {
      cursor: not-allowed; }
.option   .radio   input    + span:before {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      content: '';
      border-radius: 100%;
      width: 15px;
      height: 15px;
      max-width: 20px;
      max-height: 20px;
      margin-right: 10px;
      color: white;
      background: white;
      box-shadow: 0px 0px 0px 1px #cccccc;
      margin-top: -1px; }
.option   .radio   input:checked    + span:before {
      border: solid 5px white;
      background: #44be42; }
.option   .radio   input[disabled]:checked    + span:before {
      background: #909090; }
.option   .checkbox {
    position: relative;
    overflow: hidden;
    padding: 2px;
    font-weight: 400;
    margin: 0;
    
    flex: 0 0 auto;
    cursor: default;
    margin-right: 15px; }
.option   .checkbox:hover {
      cursor: pointer; }
.option   .checkbox.disabled {
      cursor: default; }
.option   .checkbox   input {
      position: absolute !important;
      pointer-events: none;
      opacity: 0; }
.option   .checkbox   input    + span {
      display: block;
      font-size: 12px;
      overflow: hidden;
      padding: 1px 0 0 1px;
      min-width: 21px; }
.option   .checkbox   input    + span:before {
      position: relative;
      display: block;
      float: left;
      content: ' ';
      border-radius: 3px;
      width: 15px;
      height: 15px;
      margin-right: 10px;
      color: white;
      background: white;
      border: solid 1px #cccccc; }
.option   .checkbox   input.indeterminate    + span:before, .option   .checkbox   input:checked    + span:before {
      content: ' ';
      font-size: 1.4em;
      padding: 1px;
      background-size: 80%;
      background-repeat: no-repeat;
      background-position: center;
      background-color: #44be42;
      background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2213%22%20viewBox%3D%222%203%2016%2013%22%3E%3Cpolyline%20points%3D%223.5%2011%206.9%2014.4%2016.4%204.9%22%20style%3D%22fill%3Anone%3Bstroke-width%3A2%3Bstroke%3A%23FFF%22%2F%3E%3C%2Fsvg%3E");
      border: solid 1px #44be42; }
.option   .checkbox   input.indeterminate    + span:before {
      background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2213%22%20viewBox%3D%222%203%2018%2013%22%3E%3Cpolyline%20points%3D%223%2010%2017%2010%22%20style%3D%22fill%3Anone%3Bstroke-width%3A2%3Bstroke%3A%23FFF%22%2F%3E%3C%2Fsvg%3E"); }
.open-option   .option-content   .text {
  margin-top: 0px; }
.open-option   .option-content   .text   span {
    font-size: 13px;
    color: #909090; }

 </style>


<style> /* css for mark indicator and 'fill in the blanks'*/
.question-header{
  overflow-x: auto;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 100%;
  overflow-y: hidden; }
  
h1>p {
  border: 0;
  font-size: 20px;}
</style>

<style type="text/css"> /* mathjax styling */

.MJX_Assistive_MathML {position: absolute!important; top: 0; left: 0; clip: rect(1px, 1px, 1px, 1px); padding: 1px 0 0 0!important; border: 0!important; height: 1px!important; width: 1px!important; overflow: hidden!important; display: block!important; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none}
.MJX_Assistive_MathML.MJX_Assistive_MathML_Block {width: 100%!important}
.MathJax_Display {text-align: center; margin: 1em 0em; position: relative; display: block!important; text-indent: 0; max-width: none; max-height: none; min-width: 0; min-height: 0; width: 100%}
.MathJax .merror {background-color: #FFFF88; color: #CC0000; border: 1px solid #CC0000; padding: 1px 3px; font-style: normal; font-size: 90%}
.MathJax .MJX-monospace {font-family: monospace}
.MathJax .MJX-sans-serif {font-family: sans-serif}
#MathJax_Tooltip {background-color: InfoBackground; color: InfoText; border: 1px solid black; box-shadow: 2px 2px 5px #AAAAAA; -webkit-box-shadow: 2px 2px 5px #AAAAAA; -moz-box-shadow: 2px 2px 5px #AAAAAA; -khtml-box-shadow: 2px 2px 5px #AAAAAA; filter: progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true'); padding: 3px 4px; z-index: 401; position: absolute; left: 0; top: 0; width: auto; height: auto; display: none}
.MathJax {display: inline; font-style: normal; font-weight: normal; line-height: normal; font-size: 100%; font-size-adjust: none; text-indent: 0; text-align: left; text-transform: none; letter-spacing: normal; word-spacing: normal; word-wrap: normal; white-space: nowrap; float: none; direction: ltr; max-width: none; max-height: none; min-width: 0; min-height: 0; border: 0; padding: 0; margin: 0}
.MathJax:focus, body :focus .MathJax {display: inline-table}
.MathJax.MathJax_FullWidth {text-align: center; display: table-cell!important; width: 10000em!important}
.MathJax img, .MathJax nobr, .MathJax a {border: 0; padding: 0; margin: 0; max-width: none; max-height: none; min-width: 0; min-height: 0; vertical-align: 0; line-height: normal; text-decoration: none}
img.MathJax_strut {border: 0!important; padding: 0!important; margin: 0!important; vertical-align: 0!important}
.MathJax span {display: inline; position: static; border: 0; padding: 0; margin: 0; vertical-align: 0; line-height: normal; text-decoration: none; box-sizing: content-box}
.MathJax nobr {white-space: nowrap!important}
.MathJax img {display: inline!important; float: none!important}
.MathJax * {transition: none; -webkit-transition: none; -moz-transition: none; -ms-transition: none; -o-transition: none}
.MathJax_Processing {visibility: hidden; position: fixed; width: 0; height: 0; overflow: hidden}
.MathJax_Processed {display: none!important}
.MathJax_test {font-style: normal; font-weight: normal; font-size: 100%; font-size-adjust: none; text-indent: 0; text-transform: none; letter-spacing: normal; word-spacing: normal; overflow: hidden; height: 1px}
.MathJax_test.mjx-test-display {display: table!important}
.MathJax_test.mjx-test-inline {display: inline!important; margin-right: -1px}
.MathJax_test.mjx-test-default {display: block!important; clear: both}
.MathJax_ex_box {display: inline-block!important; position: absolute; overflow: hidden; min-height: 0; max-height: none; padding: 0; border: 0; margin: 0; width: 1px; height: 60ex}
.MathJax_em_box {display: inline-block!important; position: absolute; overflow: hidden; min-height: 0; max-height: none; padding: 0; border: 0; margin: 0; width: 1px; height: 60em}
.mjx-test-inline .MathJax_left_box {display: inline-block; width: 0; float: left}
.mjx-test-inline .MathJax_right_box {display: inline-block; width: 0; float: right}
.mjx-test-display .MathJax_right_box {display: table-cell!important; width: 10000em!important; min-width: 0; max-width: none; padding: 0; border: 0; margin: 0}
.MathJax .MathJax_HitBox {cursor: text; background: white; opacity: 0; filter: alpha(opacity=0)}
.MathJax .MathJax_HitBox * {filter: none; opacity: 1; background: transparent}
#MathJax_Tooltip * {filter: none; opacity: 1; background: transparent}
@font-face {font-family: MathJax_Main; src: url('https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/fonts/HTML-CSS/TeX/woff/MathJax_Main-Regular.woff?V=2.7.5') format('woff'), url('https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/fonts/HTML-CSS/TeX/otf/MathJax_Main-Regular.otf?V=2.7.5') format('opentype')}
@font-face {font-family: MathJax_Main-bold; src: url('https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/fonts/HTML-CSS/TeX/woff/MathJax_Main-Bold.woff?V=2.7.5') format('woff'), url('https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/fonts/HTML-CSS/TeX/otf/MathJax_Main-Bold.otf?V=2.7.5') format('opentype')}
@font-face {font-family: MathJax_Main-italic; src: url('https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/fonts/HTML-CSS/TeX/woff/MathJax_Main-Italic.woff?V=2.7.5') format('woff'), url('https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/fonts/HTML-CSS/TeX/otf/MathJax_Main-Italic.otf?V=2.7.5') format('opentype')}
@font-face {font-family: MathJax_Math-italic; src: url('https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/fonts/HTML-CSS/TeX/woff/MathJax_Math-Italic.woff?V=2.7.5') format('woff'), url('https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/fonts/HTML-CSS/TeX/otf/MathJax_Math-Italic.otf?V=2.7.5') format('opentype')}
@font-face {font-family: MathJax_Caligraphic; src: url('https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/fonts/HTML-CSS/TeX/woff/MathJax_Caligraphic-Regular.woff?V=2.7.5') format('woff'), url('https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/fonts/HTML-CSS/TeX/otf/MathJax_Caligraphic-Regular.otf?V=2.7.5') format('opentype')}
@font-face {font-family: MathJax_Size1; src: url('https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/fonts/HTML-CSS/TeX/woff/MathJax_Size1-Regular.woff?V=2.7.5') format('woff'), url('https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/fonts/HTML-CSS/TeX/otf/MathJax_Size1-Regular.otf?V=2.7.5') format('opentype')}
@font-face {font-family: MathJax_Size2; src: url('https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/fonts/HTML-CSS/TeX/woff/MathJax_Size2-Regular.woff?V=2.7.5') format('woff'), url('https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/fonts/HTML-CSS/TeX/otf/MathJax_Size2-Regular.otf?V=2.7.5') format('opentype')}
@font-face {font-family: MathJax_Size3; src: url('https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/fonts/HTML-CSS/TeX/woff/MathJax_Size3-Regular.woff?V=2.7.5') format('woff'), url('https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/fonts/HTML-CSS/TeX/otf/MathJax_Size3-Regular.otf?V=2.7.5') format('opentype')}
@font-face {font-family: MathJax_Size4; src: url('https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/fonts/HTML-CSS/TeX/woff/MathJax_Size4-Regular.woff?V=2.7.5') format('woff'), url('https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/fonts/HTML-CSS/TeX/otf/MathJax_Size4-Regular.otf?V=2.7.5') format('opentype')}
.MathJax .noError {vertical-align: ; font-size: 90%; text-align: left; color: black; padding: 1px 3px; border: 1px solid}
</style>
`

str = style;
for(let q of qns){
  const clonedQ = q.cloneNode(true);
  for(let box of clonedQ.querySelectorAll('input')){
    if((box.type == "checkbox" || box.type == "radio") && box.checked){
      box.setAttribute('checked', true);
    } else if(box.type == 'text' || box.type === 'number') {
      box.setAttribute('value', box.value);
    }
  }
  for(let box of clonedQ.querySelectorAll('textarea')){
    box.innerText = box.value;
  }
  if(q.querySelectorAll('.matching-left').length > 0){
    let container = clonedQ.querySelector('.question-container');
    container.style = "display:flex;justify-content: space-between;position:relative;"
  }
  str += clonedQ.innerHTML;
}

download("myquiz.html", str);
