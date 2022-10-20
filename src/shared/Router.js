import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import List from "../components/List"
import Todo from "../components/Todo"
import Post from "../pages/Post"
import Home from "../pages/Home"

function Router() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/list" element={<List/>}/>
                <Route path="/todo/:id" element={<Todo />}/>
                <Route path="/post" element={<Post />}/>
            </Routes>
        </BrowserRouter>     
    );
}

export default Router;