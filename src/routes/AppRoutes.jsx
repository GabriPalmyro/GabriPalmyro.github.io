import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Portfolio from '../components/ppre8/Portfolio'

function AppRoutes() {
    return (
        <BrowserRouter basename='/my-portfolio'>
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/my-portfolio" element={<Layout />} />
                <Route path="/ppre8" element={<Portfolio />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes