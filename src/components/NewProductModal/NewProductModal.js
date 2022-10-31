import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './NewProductModal.css'
const NewProductModal = () => {
  const { register, handleSubmit } = useForm()

  const handleData = (data) => {
    console.log(data)
  }

  return (
    <>
      <section className='modal-heading'>
        <h1>New Product</h1>
        <button className='close-button' name='close button' />
      </section>
      <form onSubmit={handleSubmit(handleData)}></form>
    </>
  )
}

export default NewProductModal
