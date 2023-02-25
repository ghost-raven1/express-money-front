import {useEffect, useRef, useState} from "react";

export const Mounted = (Func) => useEffect(() => Func(), [])

export const useValidation = (value, validations) => {

    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [mobilePhoneError, setMobilePhoneError] = useState(false);
    const [inputValid, setInputValid] = useState(false);
    const [numberWithDotError, setNumberWithDotError] = useState(false);

    useEffect(() => {
        let re = ''
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value?.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case 'maxLength':
                    value?.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
                    break;
                case "date":
                    re = /(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.(19|20)\d\d/
                    re.test(String(value).toLowerCase()) ? setDateError(false) : setDateError(true)
                    break;
                case 'isEmail':
                    re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
                    break;
                case 'isMobilePhone':
                    re = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/
                    re.test(String(value).toLowerCase()) ? setMobilePhoneError(false) : setMobilePhoneError(true)
                    break;
                case 'isNumbersWithDot':
                    re = /^([0-9]+)([.,]?)([0-9]*)$/
                    re.test(String(value).toLowerCase()) ? setNumberWithDotError(false) : setNumberWithDotError(true)
                    break;
                default:
                    break;
            }
        }
    }, [value])

    useEffect(() => {
        if (validations?.isEmpty) {
            if (isEmpty) setInputValid(false)
            else setInputValid(true)
        }
        if (validations?.minLength) {
            if (minLengthError) setInputValid(false)
            else setInputValid(true)
        }
        if (validations?.maxLength) {
            if (maxLengthError) setInputValid(false)
            else setInputValid(true)
        }
        if (validations?.date) {
            if (dateError) setInputValid(false)
            else setInputValid(true)
        }
        if (validations?.isEmail) {
            if (emailError) setInputValid(false)
            else setInputValid(true)
        }
        if (validations?.isMobilePhone) {
            if (mobilePhoneError) setInputValid(false)
            else setInputValid(true)
        }
        if (validations?.isNumbersWithDot) {
            if (numberWithDotError) setInputValid(false)
            else setInputValid(true)
        }
    }, [isEmpty, maxLengthError, dateError, minLengthError, emailError, mobilePhoneError, validations?.isEmpty, validations?.minLength, validations?.maxLength, validations?.isEmail, validations?.isMobilePhone, validations?.date, validations?.isNumbersWithDot])

    return {
        isEmpty,
        dateError,
        minLengthError,
        maxLengthError,
        emailError,
        mobilePhoneError,
        numberWithDotError,
        inputValid
    }
}

export const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const [valRules, setValRules] = useState(validations)
    const valid = useValidation(value, valRules)

    const onChange = (e, onInput) => {
        if (e?.target?.value) {
            setValue(e.target.value)
            onInput(e.target.value);
        } else {
            setValue(e)
            onInput(e);
        }
    }

    const onBlur = () => {
        setDirty(true)
    }

    useEffect(() => {
        setValRules(validations)
    }, [validations])

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}

export default function useComponentVisible(initialIsVisible) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsComponentVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return { ref, isComponentVisible, setIsComponentVisible };
}
