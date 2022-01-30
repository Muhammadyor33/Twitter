import React from "react";

function Gif({color}) {
    return(
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.7499 9.10808V7.40808H13.3499V13.8081H15.0499V11.8081H17.0499V10.1081H15.0499V9.10808H17.7499ZM10.4499 7.40808H12.1499V13.8081H10.4499V7.40808ZM6.8499 9.00808C7.2499 9.00808 7.7499 9.20808 8.0499 9.50808L9.2499 8.50808C8.6499 7.80808 7.7499 7.40808 6.8499 7.40808C5.0499 7.40808 3.6499 8.80808 3.6499 10.6081C3.6499 12.4081 5.0499 13.8081 6.8499 13.8081C7.8499 13.8081 8.6499 13.4081 9.2499 12.7081V10.2081H6.4499V11.4081H7.6499V12.0081C7.4499 12.1081 7.1499 12.2081 6.8499 12.2081C5.9499 12.2081 5.2499 11.5081 5.2499 10.6081C5.2499 9.80808 5.9499 9.00808 6.8499 9.00808Z" fill={color}/>
            <path d="M19.25 0.628052H2.25C1.01 0.628052 0 1.63505 0 2.87505V18.382C0 19.6201 1.01 20.628 2.25 20.628H19.25C20.49 20.628 21.5 19.6201 21.5 18.382V2.87505C21.5 1.63505 20.49 0.628052 19.25 0.628052ZM20 18.382C20 18.792 19.664 19.128 19.25 19.128H2.25C1.836 19.128 1.5 18.792 1.5 18.382V2.87505C1.5 2.46305 1.836 2.12805 2.25 2.12805H19.25C19.664 2.12805 20 2.46305 20 2.87505V18.382Z" fill={color}/>
        </svg>

    )
}
export {Gif}