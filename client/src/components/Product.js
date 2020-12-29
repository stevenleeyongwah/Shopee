// Import library
import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import 'css/product.css';

// Import components
import { getItems } from 'actions/itemActions'
import Navbar from 'components/navbar/navbar'

class Product extends Component {
  state={ name:'', item:[] }

  componentDidMount(){
    axios.get(`/item/${this.props.match.params.Id}`)
         .then(res=>{
             let item=res.data;
             this.setState({ item: item })
             console.log(this.state)
          })

  }


  render() {
    return(
      <>
        
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  item: state.item
})

export default connect(
  mapStateToProps,
  { getItems }
)(Product)

{/* <div className="containers">
          {
            this.state.item ?
            <>
              <img className="card__image" src={`data:image/jpg;base64,${this.state.item.image}`} />
              <div>
                <p>{this.state.item.ProductName}</p>
              </div>
              <div>
                No Ratings Yet | 0 Sold
              </div>
              <div>
                <p>{this.state.item.Price}</p>
              </div>
              <div>
                <span>Quantity</span>
                <div class="quantity">
                  <button class="plus-btn" type="button" name="button">
                    <img src="plus.svg" alt="" />
                  </button>
                  <input type="text" name="name" value="1">
                  <button class="minus-btn" type="button" name="button">
                    <img src="minus.svg" alt="" />
                  </button>
                </div>
                <p>{this.state.item.StockAvailable}</p>
              </div>
            </>
            : null
          }

        </div> */}