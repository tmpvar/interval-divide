var max = Math.max;
var min = Math.min;

function interval_divide(a, b, out) {
  var al = a[0];
  var au = a[1];
  var bl = b[0];
  var bu = b[1];

  out = out || [0, 0];

  if (bl < 0 && bu > 0) {
    out[0] = -Infinity;
    out[1] = Infinity;
    return out;
  } else if (bl === 0) {
    out[1] = Infinity;
  } else if (bu === 0) {
    out[0] = -Infinity
  }

  if (bl !== 0 && bu !== 0) {
    var albl = al / bl;
    var albu = al / bu;
    var aubl = au / bl;
    var aubu = au / bu;
    out[0] = min(albl, albu, aubl, aubu);
    out[1] = max(albl, albu, aubl, aubu);
    return out;
  }

  if (au <= 0 && bu === 0) {
    out[0] = au / bl;
    out[1] = Infinity;
  }

  if (au < 0 && bl === 0) {
    out[0] = -Infinity;
    out[1] = al / bu;
  }

  if (al >= 0 && bu === 0) {
    out[1] = al / bl;
  }

  if (al >= 0 && bl === 0) {
    out[0] = al / bu;
  }

  return out;
}

module.exports = interval_divide;
