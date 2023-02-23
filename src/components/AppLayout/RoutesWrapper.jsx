import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";

const RoutesWrapper = ({ routes }) => {
  return (
    <Routes>
      {routes.map(({ path, mode }) => {
        return (
          <Route
            key={path}
            exact
            path={path}
            element={<AppLayout mode={mode} />}
          />
        );
      })}
    </Routes>
  );
};

export default RoutesWrapper;
