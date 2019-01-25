const translation = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TRANSLATE':
        return [
          /* Utilisation ... = Copie d'un objet puis après la virgule, ajoute un objet à ce tableau copié. Rappel : React préconise de toujours copier un objet plutôt
          que de le modifier directement. Trop risqué si l'on veut gérer les états antérieurs....
          */
          ...state,
          {
            text: action.text,
          }
        ]     
      default:
        return state
    }
  }
  
  export default translation