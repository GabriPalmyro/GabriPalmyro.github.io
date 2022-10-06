import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import ProjetoIntegrador from '../components/projeto_integrador/ProjetoIntegrador'

function AppRoutes() {
    return (
        <BrowserRouter basename='/my-portfolio'>
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/my-portfolio" element={<Layout />} />
                <Route path="/projeto-integrador" element={<ProjetoIntegrador />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes