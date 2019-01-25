import React from 'react'
import Header from './Header'
import AddTranslate from '../containers/AddTranslate'
import { Alert, Jumbotron} from 'reactstrap';

const App = () => (
    <div>
    <Jumbotron>
    <Header></Header>
    <AddTranslate />            
    </Jumbotron>
                    
     </div>     
)

export default App