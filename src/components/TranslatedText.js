import React from 'react'
import PropTypes from 'prop-types'

const TranslatedText = ({ text }) => (
 <blockquote>{text}</blockquote>
)

TranslatedText.propTypes = { 
  text: PropTypes.string.isRequired
}

export default TranslatedText