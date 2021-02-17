/** @format */

import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useUsersQuery } from "../generated/graphql";

export const Home: React.FC<RouteComponentProps> = ({ history }) => {
  const { data } = useUsersQuery({ fetchPolicy: "network-only" });

  if (!data) {
    return <div>loading..</div>;
  }

  return (
    <div>
      <div>users</div>
      <ul>
        {data.users.map((x) => {
          return (
            <li key={x.id}>
              {x.email}, {x.id}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
