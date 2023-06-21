function verdict(a, b, msg) {
  if (JSON.stringify(a) === JSON.stringify(b)) {
    console.log('PASS ' + msg);
    return true;
  } else {
    console.log('FAIL ' + msg);
    return false;
  }
}
function getCssForTextArea() {
  return {
    width: '100%',
    height: '500px',
  };
}
function getCssForRow() {
  return { display: 'flex', alignItems: 'center' };
}
function blue(msg) {
  console.log(`%c ${msg}`, 'background:lightblue');
}

function green(msg) {
  console.log(`%c ${msg}`, 'background:lightgreen');
}

module.exports = {
  verdict,
  blue,
  green,
  getCssForRow,
  getCssForTextArea,
};
