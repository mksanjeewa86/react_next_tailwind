import PropTypes from 'prop-types'
import React from 'react'

type StyleOpts = {
  [key: string]: string | StyleOpts
}

export default function Button(props: {
  children: PropTypes.ReactNodeLike
  onClick?: (_: any) => any
  style?: StyleOpts
}): JSX.Element {
  return (
    <button
      className="bg-green-500 p-2 w-52 rounded-lg hover:bg-green-600"
      onClick={props.onClick}
      style={props.style || {}}
    >
      {props.children}
    </button>
  )
}
