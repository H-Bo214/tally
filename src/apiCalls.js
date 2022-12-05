const getProducts = async () => {
  try {
    const res = await fetch('http://localhost:5000/products')
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error.message)
  }
}

const getSingleProduct = async (id) => {
  try {
    const res = await fetch(`http://localhost:5000/products/${id}`)
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error.message)
  }
}

const updateProduct = async (id, newData) => {
  try {
    const putOptions = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newData),
    }
    const res = await fetch(`http://localhost:5000/products/${id}`, putOptions)
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error.message)
  }
}

const addNewProduct = async (newProductData) => {
  try {
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newProductData),
    }
    const res = await fetch(`http://localhost:5000/products`, postOptions)
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error.message)
  }
}

const deleteProduct = async (id) => {
  try {
    const deleteOptions = { method: 'DELETE' }
    await fetch(`http://localhost:5000/products/${id}`, deleteOptions)
  } catch (error) {
    console.error(error.message)
  }
}

export {
  getProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
  addNewProduct,
}
