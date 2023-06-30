const Dpipe = (v, p, a, l) => {
    // v - Thể tích khí sử dụng (lit/s)
    // p - Áp suất yêu cầu (bar)
    // a - áp suất chênh lệch đầu và cuối (bar)
    // l - Chiều dài tuyển ống (met)
    // Dpipe - đường kính ống (mm)
    var D1 = Math.pow(v, 1.85) * 450 * l;
    var D2 = p * a;
    return Math.pow(D1 / D2,0.2);
}
// console.log(Dpipe(140, 1, 0.05, 240));

module.exports = Dpipe;