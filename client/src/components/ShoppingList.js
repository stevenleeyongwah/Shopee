// Import library
import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import 'css/shoppingList.css';

// Import components
import { getItems } from 'actions/itemActions'
import Navbar from 'components/navbar/navbar'

class ShoppingList extends Component {
  state={ name:'', items:[] }

  componentDidMount(prevProps){
    axios.get("/imagess")
         .then(res=>{
             let items=res.data;
             this.setState({items: items})
          })

  }

  handleClick = (e, item) => {
    this.props.history.push(`/product/${item._id}`);
  }

  render() {
    function shortenText(text, length) {
      if (text == null) {
          return "";
      }
      if (text.length <= length) {
          return text;
      }
      text = text.substring(0, length);
      var last = text.lastIndexOf(" ");
      text = text.substring(0, last);
      return text + "...";
    }

    return(
      <>
        <div className="cards">
          {
            this.state.items.map(item => (
              <div className="card__single" onClick={((e) => this.handleClick(e, item))} key={item._id}>
                <img className="card__image" src={`data:image/jpg;base64,${item.chunk}`} />
                <div className="card__title">
                  <p>
                    {shortenText("FIBA Official basketball ball Size 6 Molten original GG6 Women's Basketball",50)}
                  </p>
                </div>
                <div className="card__info">
                  <div>
                    <span className="card__price">$33.73</span>
                  </div>
                  <div>
                    <a href="./" className="card__link">163 sold</a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
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
)(ShoppingList)
