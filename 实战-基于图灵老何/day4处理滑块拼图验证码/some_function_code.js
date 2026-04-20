function _0x11dbad() {
    for (
      var _0x55977e = [], _0x12474f = '0123456789abcdef', _0x33c6e8 = 0;
      _0x33c6e8 < 36;
      _0x33c6e8++
    ) {
      _0x55977e[_0x33c6e8] = _0x12474f.substr(
        Math.floor(16 * Math.random()),
        1
      )
    }
    return (
      (_0x55977e[14] = '4'),
      (_0x55977e[19] = _0x12474f.substr((3 & _0x55977e[19]) | 8, 1)),
      (_0x55977e[8] = _0x55977e[13] = _0x55977e[18] = _0x55977e[23] = '-'),
      _0x55977e.join('')
    )
}
console.log(_0x11dbad())