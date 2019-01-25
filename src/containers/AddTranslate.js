import React from 'react'
import { connect } from 'react-redux'
import { addTranslate } from '../actions'
import { Button, Input } from 'reactstrap';
const AddTranslate = ({ dispatch }) => {
  let input

  return (
   
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()

          console.log(input)
          if (!input.value.trim()) {
            return
          }
          dispatch(addTranslate(input.value))
          input.value = ''
        }}
      >
       <Input type="textarea" name="text" id="exampleText" ref={node => (input = node)} />
        <br/>
        <Button type="submit" color="primary">Traduire</Button>
      </form>
    </div>
   
  )
}

export default connect()(AddTranslate)