import Login from "./containers/Login/Login"
import ProductOrder from "./containers/ProductOrder/ProductOrder"
import ProductPreview from "./containers/ProductPreview/ProductPreview"
import ErrorPage from "./404";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import Product from "./containers/Product/Product";

const AppRouter = () => (
    <BrowserRouter>
      <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoute />}>
            <Route path="/product" element={<ProductOrder />} />
            <Route path="/product-preview" element={<ProductPreview />} />
            <Route path="/product-preview/:id" element={<Product />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>

)

export default AppRouter;