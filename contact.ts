import { GraphQLError } from "graphql";
import { ContactModelType } from "./contactdb.ts";
import { getCapitalInfo } from "./apifunctions.ts";

export const Contact = {
  time: async (parent: ContactModelType): Promise<string> => {
    try {
      const capitalInfo = await getCapitalInfo(parent.capital);
      return capitalInfo.datetime;
    } catch (err) {
      console.log(err);
      throw new GraphQLError(err instanceof Error ? err.message : String(err));
    }
  },
};