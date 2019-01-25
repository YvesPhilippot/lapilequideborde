export const ADD_TRANSLATE = 'ADD_TRANSLATE';

export function addTranslate(text)
{
    return  { type : ADD_TRANSLATE, text }
}