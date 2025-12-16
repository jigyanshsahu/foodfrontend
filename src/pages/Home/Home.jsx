import React, { useState } from 'react'
import "./Home.css";

import Header from '../../components/header/Header'
import Exploremenu from '../../components/ExploreMenu/Exploremenu'
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";


import Appdownload from '../../components/appdownload/Appdownload'
const Home = () => {
  const [category, setCategory] = useState("ALL")
  return (
    <div>
      <Header/> 
      <Exploremenu category={category} setCategory={setCategory}/>
      <foodDisplay category={category}/>
      <Appdownload/>
    </div>
  )
}

export default Home
