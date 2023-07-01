const qflow = (v, p, t, d, mw) => {
    // v - Thể tích đo được - lit
    // p - áp suất đo được - bar
    // t - nhiệt độ - độ C
    // d - tỷ trọng gas ở 15 độ C - kg/lit
    // mw - trọng lượng phân tử  - kg/lit
    // Mh - khối lượng gas tính ra - kg
    var wcf = d - 0.0011;
    var v1 = 273 * (1.013 +p) * mw * v * wcf;
    var v2 = (273 + t) * 1.013 * 22.1 *1000 *d
    return v1 / v2
}

module.exports = qflow;