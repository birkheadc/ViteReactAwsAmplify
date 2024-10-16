import React from "react";
import { Api } from "../src/types/api/api";
import { ApiProvider } from "../src/contexts/ApiContext/ApiContext";
import { DecoratorFunction } from "storybook/internal/types";

const withApiProvider = (api: Api): DecoratorFunction => {
  return (Story: any) => {
    return (
      <ApiProvider api={api}>
        <Story />
      </ApiProvider>
    );
  };
};

export default withApiProvider;
