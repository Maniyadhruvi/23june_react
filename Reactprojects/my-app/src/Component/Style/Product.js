import React, { useEffect, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import Header from './Header'
// import Products from './Products'
import { Button, Table } from 'react-bootstrap'


export default function Product() {
  const [products, setProducts] = useState()

  const [foundProducts, setFoundProducts] = useState(products)

  const handleSearch = (e) => {
    // console.log('ff')
    e.preventDefault()
    const search = e.target.value
    if (search) {
      const result = products.filter((item) => {
        // return item.title.toLowerCase().startsWith(search.toLowerCase())
        return item.title.toLowerCase().includes(search.toLowerCase())
      })
      setFoundProducts(result)
    }
    else {
      // console.log('ff')
      setFoundProducts(products)

    }

  }

  useEffect(() => {
    getProducts()

  }, [])
  const getProducts = () => {
    fetch('http://localhost:3001/products')
      .then((response) => response.json())
      .then((json) => {
        setProducts(json)
        setFoundProducts(json)
      });

  }


  const handleDelete = (id) => {
    fetch(`http://localhost:3001/products/${id}`, {
      method: 'DELETE',
    });
  }
  return (
    <div className='container'>
      <div className='row mt-4'>
        <div className='col-md-12'>
          <LinkContainer to="/addproduct">
            <button className='btn btn-info mb-2'>ADD</button>
          </LinkContainer>
          <form>
            <input type="text" placeholder='Search...' onChange={handleSearch} />
          </form><br />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {
                foundProducts && foundProducts.map((p) =>

                  <tr>
                    <td>{p.id}</td>
                    <td>{p.title}</td>
                    <td>{p.price}</td>
                    <td>{p.description}</td>
                    <img src={window.location.origin + `/assets/image/${p.image}`}
                       height="135px" />
                    <td>
                      <LinkContainer to={`/update/${p.id}`}>
                        <button className='btn btn-primary'>EDIT</button>
                      </LinkContainer>

                      <button className='btn btn-danger' onClick={() => handleDelete(p.id)}>DELETE</button>
                    </td>
                  </tr>
                )}
            </tbody>
          </Table>
        </div>
      </div>

    </div>
  )
}
