import * as actionTypes from './actionTypes';

// In Parameter we gets whole contactsection as an object
export const add = (contactSection) => {
    return { type: actionTypes.ADD_CONTACT, contactSection: contactSection }
}

export const update = (contactSection) => {
    return { type: actionTypes.UPDATE_CONTACT, contactSection: contactSection }
}