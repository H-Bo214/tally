const getProducts = async () => {
  const res = await fetch('http://localhost:5000/products')
  const data = await res.json()
  return data
}

const getSingleProduct = async (id) => {
  const res = await fetch(`http://localhost:5000/products/${id}`)
  const data = await res.json()
  return data
}

const updateProduct = async (id, newData) => {
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
}

const addNewProduct = async (newProductData) => {
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
}

const deleteProduct = async (id) => {
  const deleteOptions = { method: 'DELETE' }
  await fetch(`http://localhost:5000/products/${id}`, deleteOptions)
}

export {
  getProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
  addNewProduct,
}
