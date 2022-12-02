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

export { getProducts, getSingleProduct }
