export function costCalculator(monto_transaccion) {
    const tarifa_fija=3;
    const tarifa_interes=0.01
    const pago_total=monto_transaccion+tarifa_fija+(monto_transaccion*tarifa_interes)
    return parseFloat(pago_total.toFixed(2)); 
}

console.log(costCalculator(124));



