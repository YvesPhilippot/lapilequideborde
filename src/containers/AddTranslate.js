import React from 'react'
import { connect } from 'react-redux'
import { addTranslate } from '../actions'
import { Button, Input, Label, Form, FormGroup } from 'reactstrap';
const AddTranslate = ({ dispatch }) => {
  let input

  return (
   
    <div>
      <Form
        onSubmit={e => {
          e.preventDefault()
         
          if (!input.value.trim()) {
            return
          }
          dispatch(addTranslate(input.value))
          input.value = ''
        }}
      >

      <FormGroup> 
        <Label for="translationArea">Votre texte à traduire :</Label>
       <Input type="textarea" id="translationArea" innerRef={node => (input = node)} />
        
        </FormGroup>
        <Button type="submit" color="primary" id="">Lancer la Sombre merde traduction !</Button>

      </Form>
    </div>
  )
}

export default connect()(AddTranslate)