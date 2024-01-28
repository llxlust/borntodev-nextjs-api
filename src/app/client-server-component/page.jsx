'use client'

import React, { useState, useEffect } from "react"
import { submitForm } from "./action";
import { getUserAll } from "./action";
export default function Page() {
const [data,setData] = useState(null)

const getData = async  () => {
  const data =  await getUserAll()
  setData(data)
}
console.log(data)
  return (
    <div>
      <button onClick={getData}>Fetch User data</button>
    </div>
  );
}
