/**
 * @author BREBION Mathis
 * @function
 * @name convert
 * @param { number } baseD Starting base (between 2 and 36)
 * @param { number | string } number The number to convert
 * @param { number } baseA Arrival base (between 2 and 36)
 * @returns { number | string } Returns a number
 */
const convert = ( baseD, number, baseA ) => {
    if ( typeof baseD != "number" || typeof number == 'undefined' || typeof baseA != "number" )
        throw new Error ( "All arguments must be correctly defined" );

    if ( baseD == baseA )
        throw new Error ( "The arrival base cannot be the same as the departure base" );
    
    if ( baseD < 2 || baseD > 36 || baseA < 2 || baseA > 36 )
        throw new Error ( "This function only supports bases between 2 and 36 inclusive.\n" +
        "For base 64, use the functions that support base 64. (see documentation)" );

    if ( baseD == 10 )
        return number.toString ( baseA );

    else if ( baseD != 10 && baseA == 10 )
        return parseInt ( number, baseD );

    else {
        number = parseInt ( number, baseD );
        return number.toString ( baseA );
    }
}

module.exports = convert;