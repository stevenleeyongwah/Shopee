import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getItems } from '../actions/itemActions'
import Navbar from './Navbar'
import { Link, NavLink } from 'react-router-dom'

class ShoppingList extends Component {
  constructor(props){
    super(props);
    this.state={name:'',picture:[]}

     axios.get(`/image/192b826b538b39197e1a942446f1f67a.jpg`)
    .then(res=>{
        let picture=res.data;
      this.setState({picture:picture})
    })
  }

  // componentDidMount() {
  //   // this.props.getItems()
  //   this.state={name:'',picture:[]}
  // }

  render() {
    return(
        <div className='inside'>

          <img src={`data:image/jpg;base64,${this.state.picture.image}`}></img>
        <br/>
        </div>
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
          // <img src=`data:image/jpg;base64,${}` alt="{{ image }}" />
// items.map(({ _id, title, seller, price }, index) => (
//   <>
//     <div class="col-md-4">
//       <input type="image" src="images/amazon.jpg" alt="Amazon" style={{ width: "40%", height: "40%" }}/>
//       <NavLink to="/"><p>{ title }</p></NavLink>
//       <span style={{ fontSize: "13px" }}>by {seller}</span>
//       <p style={{ fontSize: "13px", color: "DarkRed", fontWeight: "bold" }}>{price}</p>
//       <hr />
//     </div>
//   </>
// ))

// render() {
//   const { items } = this.props.item
//   console.log("items: ", items)
//   return (
//     <>
//       <Navbar />
//       <div class="container">
//         <div class="row">
//           {
//             items
//           }
//         </div>
//       </div>
//     </>
//   )
// }
