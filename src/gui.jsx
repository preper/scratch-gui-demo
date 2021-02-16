import React from 'react'
import { useSelector } from 'react-redux'

export default function GUI() {
  const vm = useSelector(state => state.vm)
  console.log(vm)

  return (
    <div className="gui">hello world</div>
  )
}
