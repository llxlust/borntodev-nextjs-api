"use client";

import { useRouter } from "next/router";
import { NextResponse } from "next/server";
import { useEffect } from "react";

export default function error({ error, reset }) {


  return (
    <div>
      error:{error.message}
      <button onClick={()=>{}}>GO home page</button>
    </div>
  );
}
