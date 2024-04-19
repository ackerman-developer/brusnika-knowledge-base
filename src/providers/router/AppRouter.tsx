import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {Layout} from "@/components";
import {MainPage, NotFoundPage} from "@/pages";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<MainPage />}/>
          <Route path='*' element={<NotFoundPage />}/>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRouter
