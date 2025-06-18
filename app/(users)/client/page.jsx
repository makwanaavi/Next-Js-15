"use client";
import React, { useEffect } from "react";
import Api from "../client/Api";

function Client() {
  useEffect(() => {
    alert("Hello Client Compoents");
    console.log("Hello Client Compoents")
  }, []);
  return (
    <>
      <div>Client</div>
      <Api />
    </>
  );
}

export default Client;
