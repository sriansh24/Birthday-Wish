import { forwardRef } from 'react'

const ConfettiContainer = forwardRef(function ConfettiContainer(_, ref) {
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-999"
    />
  )
})

export default ConfettiContainer
