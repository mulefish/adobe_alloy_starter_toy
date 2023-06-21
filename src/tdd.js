const { verdict, getCssForRow, getCssForTextArea } = require('./common.js');

function getCssForRowTest() {
  const expected = { display: 'flex', alignItems: 'center' };
  const actual = getCssForRow();
  verdict(expected, actual, 'getCssForRowTest');
}
function getCssForTextAreaTest() {
  let isOk = false;
  const x = getCssForTextArea();
  const isOk = x.hasOwnProperty('width') && x.hasOwnProperty('height');
  verdict(isOk, true, 'getCssForTextArea');
}
if (!module.parent) {
  getCssForRowTest();
  getCssForTextAreaTest();
}
