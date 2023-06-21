import  React,{ useState } from "react";
import Body from "./components/Body";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import list from "./data";

import "./styles/App.css";

const App = () => {
  const [display, setDisplay] = useState(true);
  const [cart, setCart] = useState([]);

  const [newdata,setnewdata]=useState([])

  const [check,setcheck]=useState(0);

  const [filters,setfilters]=useState([]);

  const [firstFilter,setFirstFilter]=useState([])

  const [brands,setbrands]=useState('');
  const [sizes,setsizes]=useState('');


  const [radio,setradio]=useState('')
  const [radiochange,setradiochange]=useState('')


   


// const itemfilter=(product)=>{
//   var arr=[];
//   const products=product.split(",");
//   console.log(products)
//   products.forEach(item=>{
//      const res= list.filter(items=>{return items.type===item})
//       arr=arr.concat(res)

//     })
//    setnewdata(arr)
//    console.log(newdata)
// }


// var arr;
 var cont;
const brandfilters=(product)=>{
  const products=product.split(" ")
  setbrands(products[1])
  if(sizes==='')
  {
    cont=list.filter(item=>{
      return item.brand===products[1]
    })
    setnewdata(cont)
    setcheck(1)
  }
  else
  {
  cont=list.filter(item=>{
    return item.brand===products[1] && item.size===sizes
  })
  setnewdata(cont)
  setcheck(1)
}
}



const sizefilters=(product)=>{
  const products=product.split(" ")
  setsizes(products[1])
  if(brands==='')
  {
    cont=list.filter(item=>{
      return item.size===products[1]
    })
    setnewdata(cont)
    setcheck(1)
  }
  else{

  cont=list.filter(item=>{
    return item.size===products[1] && item.brand===brands
  })
  setnewdata(cont)
  setcheck(1)
}
}

const radiochanger=(event)=>{
    setradio(event.target.value)
}

const radiochanger2=(event)=>{
  setradiochange(event.target.value)
}



// const products=product.split(" ")
// if(products[0]==="brand")
// {
//   cont=size.filter(item=>{
//     return item.brand===products[1]
//   })
//   if(cont.length==0)
//   {
//     cont=list.filter(item=>{
//       return item.brand===products[1]
//     })
//   }
//   setnewdata(cont)
//   setcheck(1)
//   setsize(cont)
// }
  // if(cont.length>0)
  // {
  //   setnewdata(cont)
  //   setbrand(cont)
  // }
  // else{
  //   var conts
  //   conts=list.filter(item=>{
  //     return item.brand===products[1];
  //   })
  //   setnewdata(conts)
  //   setcheck(1)
  // }
// else if(products[0]==="size")
// {
//   cont=list.filter(item=>{
//     return item.size===products[1]
//   })
//   setnewdata(cont)
//   setsize(cont)
//   setcheck(1)
// }
// setnewdata(list.filter(item=>{
//   return item.type===product || item.brand===product;
// }))
// setcheck(1);
//   arr=[]
//   if(cont.includes(product))
// {
//     let b=cont.indexOf(product);
//     cont.splice(b,1)
//     cont.forEach(item=>{
//       var res= list.filter(items=>{return items.type===item})
//        arr=arr.concat(res)
//     })
//     setnewdata(arr)
// }
// else
// {
//     cont.push(product)

//     cont.forEach(item=>{
//       var res= list.filter(items=>{return items.type===item})  
//        arr=arr.concat(res)
//     })
//     setnewdata(arr)


  // cont.forEach(item=>{
  //   var res= list.filter(items=>{return items.type===item})
  //    arr=arr.concat(res)
  // })
  // setnewdata(arr)


// const mobile=()=>{
//   setnewdata(list.filter(item=>{
//     return item.type==="mobile"
//   }))
//   setcheck(1)
//   console.log(newdata);
  
// }
//   const laptop=()=>{
//     setnewdata(list.filter(item=>{
//       return item.type==="laptop"
//     }))
//     console.log(newdata)
//     setcheck(1)
//   }

//   const desktop=()=>{
//     setnewdata(list.filter(item=>{
//       return item.type==="desktop"
//     }))
//     console.log(newdata)
//     setcheck(1)
//   }

//   const mobi_laptop=()=>{
//     setnewdata(list.filter(item=>{
//       return item.type==="mobile"||item.type==="laptop"
//     }))
//     console.log(newdata)
//     setcheck(1)
//   }
// const lap_desktop=()=>{
//     setnewdata(list.filter(item=>{
//       return item.type==='laptop'||item.type==="desktop";
//     }))
//     console.log(newdata)
//     setcheck(1)
//   }
//   const mobi_desktop=()=>{
//     setnewdata(list.filter(item=>{
//       return item.type==="mobile"||item.type==="desktop"
//     }))
//     console.log(newdata)
//     setcheck(1)
//   }
//   const alldata=()=>{
//     setnewdata(list.filter(item=>{
//       return item;
//     }))
//     console.log(newdata)
//     setcheck(1)
//   }
// const hi=()=>{
//   console.log('click')
// }

// const mobiling=()=>{
// setmobile(!mobile)
// console.log(mobiles)
// }

  return (
    <React.StrictMode>
      <Navbar setDisplay={setDisplay} size={cart.length} />
      <div className='center'>
      <div className="left">
        {/* <button className="btn" onClick={mobile}>MOBILE</button><br/>
        <button className="btn" onClick={laptop}  style={{backgroundColor:"green"}}>LAPTOP</button>
        <button className="btn" onClick={desktop} style={{backgroundColor:"purple"}}>DESKTOP</button>
        <button className="btn" onClick={mobi_laptop} style={{backgroundColor:"teal"}}>MOBILE&LAPTOP</button>
        <button className="btn" onClick={lap_desktop} style={{backgroundColor:"teal"}}>LAPTOP&DESKTOP</button>
        <button className="btn" onClick={mobi_desktop} style={{backgroundColor:"teal"}}>MOBILE&DESKTOP</button>
        <button className="btn" onClick={alldata} style={{backgroundColor:"teal"}}>ALLPRODUCT</button>
        <h1>MOBILE BRAND</h1>
        <h3><button className="btn" onClick={alldata} style={{backgroundColor:"teal"}}>SAMSUNG</button></h3>
        <h3><button className="btn" onClick={alldata} style={{backgroundColor:"teal"}}>VIVO</button></h3>
        <h3><button className="btn" onClick={alldata} style={{backgroundColor:"teal"}}>OPPO</button></h3>
        <h3><button className="btn" onClick={alldata} style={{backgroundColor:"teal"}}>REALME</button></h3>
        <h3><button className="btn" onClick={alldata} style={{backgroundColor:"teal"}}>REDMI</button></h3>
        <h1 style={{cursor:"pointer"}}onClick={hi}>HI</h1>
        <h1 onClick={hi}>HI</h1>
        <h1 onClick={hi}>HI</h1> */}


        {/* <button className="btn" onClick={()=>itemfilter("mobile,laptop")} style={{backgroundColor:"teal"}}>MOBILE&LAPTOP</button> */}

      <div className="inside">
       {/* <h3 className='top' onClick={()=>brandfilters("type mobile")}>MOBILE</h3>
       <h3 className='top' onClick={()=>brandfilters('type laptop')}>LAPTOP</h3>
       <h3 className='top' onClick={()=>brandfilters('type desktop')}>DESKTOP</h3> */}
       <h2>👉MOBILE BRAND</h2>
       <h3 onClick={()=>brandfilters("brand Vivo")}><input type="radio" value="option1" onChange={radiochanger} checked={radio==="option1"}/>VIVO</h3>
       <h3 onClick={()=>brandfilters("brand Oppo")}><input type="radio" value="option2" onChange={radiochanger} checked={radio==="option2"}/>OPPO</h3>
       <h3 onClick={()=>brandfilters("brand Redmi")}><input type="radio" value="option3" onChange={radiochanger} checked={radio==="option3"}/>REDMI</h3>
       <h3 onClick={()=>brandfilters("brand Realme")}><input type="radio" value="option4" onChange={radiochanger} checked={radio==="option4"}/>REALME</h3>
       <h3 onClick={()=>brandfilters("brand Oneplus")}><input type="radio" value="option5" onChange={radiochanger} checked={radio==="option5"}/>ONEPLUS</h3>
       <h3 onClick={()=>brandfilters("brand Samsung")}><input type="radio" value="option6" onChange={radiochanger} checked={radio==="option6"}/>SAMSUNG</h3>
       <h2>👉LAPTOP BRAND</h2>
       <h3 onClick={()=>brandfilters("brand Lenovo")}><input type="radio" value="option7" onChange={radiochanger} checked={radio==="option7"}/>LENOVO</h3>
       <h3 onClick={()=>brandfilters("brand Hp")}><input type="radio" value="option8" onChange={radiochanger} checked={radio==="option8"}/>HP</h3>
       <h3 onClick={()=>brandfilters("laptop Dell")}><input type="radio" value="option9" onChange={radiochanger} checked={radio==="option9"}/>DELL</h3>
       <h3 onClick={()=>brandfilters("laptop Acer")}><input type="radio" value="option10" onChange={radiochanger} checked={radio==="option10"}/>ACER</h3>
       <h2>👉DESKTOP BRAND</h2>
       <h3 onClick={()=>brandfilters("brand lenovo")}><input type="radio" value="option11" onChange={radiochanger} checked={radio==="option11"}/>LENOVO</h3>
       <h3 onClick={()=>brandfilters("brand hp")}><input type="radio" value="option12" onChange={radiochanger} checked={radio==="option12"}/>HP</h3>
       <h3 onClick={()=>brandfilters("brand dell")}><input type="radio" value="option13" onChange={radiochanger} checked={radio==="option13"}/>DELL</h3>
       <h3 onClick={()=>brandfilters("brand acer")}><input type="radio" value="option14" onChange={radiochanger} checked={radio==="option14"}/>ACER</h3>
       <h3 onClick={()=>brandfilters("brand asus")}><input type="radio" value="option15" onChange={radiochanger} checked={radio==="option15"}/>ASUS</h3>

       <h2>👉RAM</h2>
       <h3 onClick={()=>sizefilters("size 4GB")}><input type="radio" value="option1" onChange={radiochanger2} checked={radiochange==="option1"}/>4GB</h3>
       <h3 onClick={()=>sizefilters("size 8GB")}><input type="radio" value="option2" onChange={radiochanger2} checked={radiochange==="option2"}/>8GB</h3>
       <h3 onClick={()=>sizefilters("size 12GB")}><input type="radio" value="option3" onChange={radiochanger2} checked={radiochange==="option3"}/>12GB</h3>
       <h3 onClick={()=>sizefilters("size 16GB")}><input type="radio" value="option4" onChange={radiochanger2} checked={radiochange==="option4"}/>16GB</h3>

       </div>


       </div>
           {display ? (
              <Body  data={newdata} check={check} cart={cart} setCart={setCart}/>
            ) : (
              <Cart cart={cart} setCart={setCart} />)
           }
      
      </div>
    </React.StrictMode>
  );
};

export default App;
