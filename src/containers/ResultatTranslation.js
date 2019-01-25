import { connect } from 'react-redux'
import TranslatedText from '../components/TranslatedText'


const translateText = (translation) => {
   
    //console.log("Texte traduit : " + translation.text);
    console.log(translation);
    return "Texte traduit : " + translation.addTranslate;
  
}

const mapStateToProps = state => ({

  text: translateText(state)
})



export default connect(
  mapStateToProps
)(TranslatedText)