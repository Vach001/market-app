import React from 'react'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Market() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route exact path="/">
                <Home />
            </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}
