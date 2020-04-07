import React from 'react';
import InputMask from 'react-input-mask';
 
const Fone = ({placeholder, fone, setFone}) => {
    return (
        <InputMask 
        value={fone}
        mask="(99)99999-9999"
        maskChar={null}
        placeholder={placeholder}
        onChange={e => setFone(e.target.value)}/>
    )
}

export default Fone