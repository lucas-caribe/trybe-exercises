const assert = require('assert');

function verify(password) {
  if (!password) return false;
  if (password.length < 8) return false;
  if (!password.match(/^(?=.+?[A-Z]).*$/)) return false;
  if (!password.match(/^(?=.+?[a-z]).*$/)) return false;
  if (!password.match(/^(?=.+?[0-9]).*$/)) return false;

  return true;
}

assert.strictEqual(verify('ASDASaD123123'), true);