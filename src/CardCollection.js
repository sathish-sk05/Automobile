
import React, { useEffect, useState } from 'react'
import './CardCollection.css';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;


function CardCollection(props) {

  const [cartAdd, setCartAdd] = useState({});
  const [data, setData] = useState([])
  
 
  useEffect(() => {
    async function getFilteredCategory(categoryName) {
      const receivingProductData = await fetch('https://rcz-backend.onrender.com/api/getSpecificAnciDataCollection', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ category: categoryName })

      });
      const formattedProductData = await receivingProductData.json(categoryName);

      setData(formattedProductData)
    }
    if (props.location && props.location.state && props.location.state.category) {
      getFilteredCategory(props.location.state.category);
    }

  }, [])
  return (
    <div id="flex-details">
      <div className="card-details">




        <Row>

          {data.map((e, index) => {
            let { id, thumbNail, price, spareName } = e
            return (



              <Col span={6}>
                <div className="wrapper" key={id}>

                  <Card
                    hoverable
                    style={{
                      width: 230,

                    }}
                    cover={<img alt="example" src={thumbNail} />}
                  >
                    <h4>{e.spareName.slice(0, 11)}</h4>

                    <p>${price}</p>
                    <div id="button-locate">
                      <button id="button-details">View</button>

                      {!cartAdd[e.spareName] ? <button id="button-colect" onClick={(f) => { setCartAdd({ ...cartAdd, [e.spareName]: cartAdd[e.spareName] ? cartAdd[e.spareName] + 1 : 1 }) }}> Add</button> : null}
                      {cartAdd[e.spareName] ? <div id="increment-decriment">
                      

                        <button onClick={(f) => { setCartAdd({ ...cartAdd, [e.spareName]: cartAdd[e.spareName] ? cartAdd[e.spareName] + 1 : 1 }) }} style={{ width: 20, height: 4 }}>+</button>

                        {cartAdd[e.spareName]}<button onClick={(f) => {
                          //debugger
                          setCartAdd({ ...cartAdd, [e.spareName]: cartAdd[e.spareName] - 1 })
                        }} style={{ width: 20, height: 4 }}>-</button></div> : null}
                    </div>
                  </Card>

                </div>
              </Col>

            )

          })}


        </Row>
      </div>
      <div id="flex-details1">
        <div className="site-card-border-less-wrapper">
          <Card

            bordered={false}
            style={{
              width: 320,
              fontSize: "16px"
            }}
          >
            <h2>Card</h2>

            {Object.keys(cartAdd).map(e => {
              return (

                <div>
                  <div>
                    {e}
                    <div id="plus-decriment">

                      <button onClick={(f) => { setCartAdd({ ...cartAdd, [e.spareName]: cartAdd[e.spareName] ? cartAdd[e.spareName] + 1 : 1 }) }} style={{ width: 20, height: 4 }}>+</button>
                    
                      {cartAdd[e] +"" }
 
                      {cartAdd[e.spareName]}<button onClick={(f) => {
                        //debugger
                        setCartAdd({ ...cartAdd, [e.spareName]: cartAdd[e.spareName] - 1 })
                      }} style={{ width: 20, height: 4 }}>-</button></div>

                  </div>

                  <div>

                    {cartAdd[e] + "items added"}
                  </div>

                </div>

              )


            })}
            <button className="button-checkout">CHECKOUT </button>
          </Card>

        </div>
      </div>


    </div>


  )

}

export default withRouter(CardCollection)