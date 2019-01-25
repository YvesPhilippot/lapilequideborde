import React from 'react'
import Header from './Header'
import Footer from './Footer'
import AddTranslate from '../containers/AddTranslate'
import { Jumbotron} from 'reactstrap';
import ResultatTranslation from '../containers/ResultatTranslation'

const App = () => (
    <div>
   <Jumbotron>
        <Header></Header>    
        <AddTranslate /> 
        <ResultatTranslation/>
    </Jumbotron>
    <Footer></Footer>   
     </div>  

)

export default App