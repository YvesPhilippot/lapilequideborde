import React from 'react'
import Header from './Header'
import Footer from './Footer'
import AddTranslate from '../containers/AddTranslate'
import { Jumbotron} from 'reactstrap';

const App = () => (
    <div>
   <Jumbotron>
    <Header></Header>
 
    <AddTranslate /> 
                 
    </Jumbotron>
    <Footer></Footer>   
     </div>  

)

export default App