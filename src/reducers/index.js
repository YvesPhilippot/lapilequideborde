import { combineReducers } from 'redux'
import addTranslate from './addTranslate'


export default combineReducers({
  addTranslate,
})


/* les réducers permettent de définir comment l'état de l'application va changer
On prends une action qui va décrire ce qu'il se passe mais pas comment

Les reducers doivent éviter les choses compliquées. Pas d'appel de Web API, pas de calcule utilisant des fonctiont comme la date ou encore du random. 

*/
