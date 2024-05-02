import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "@/components";
import {
  MainPage,
  NotFoundPage,
  Artifacts,
  DesingComponents,
  FAQ
} from "@/pages";
import { AppRoute } from "@/app/constants/AppRoute.ts";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        <Route path={AppRoute.MAIN} element={<Layout />}>
          <Route
            path={AppRoute.MAIN}
            element={<MainPage />}
          />
          <Route
            path={AppRoute.ARTIFACT}
            element={<Artifacts />}
          />
          <Route
            path={AppRoute.DESING_COMPONENTS}
            element={<DesingComponents />}
          />
          <Route
            path={AppRoute.FAQ}
            element={<FAQ />}
          />
          <Route
            path={AppRoute.NOT_FOUND}
            element={<NotFoundPage />}
          />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRouter
