const vflow = (mh, p, t, d, mw) => {
    var wcf = d -0.0011;
    var v1 = mh * (273 + t) * 1.013 * 22.4 * 1000 * d;
    var v2 = 273 * ( 1.013 + p) * mw * wcf;
    return v1/v2;
}

module.exports = vflow;