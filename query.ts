import { GraphQLError } from "graphql";
import { ContactModel } from "./contactdb.ts";

export const Query = {
  getContacts: async () => {
    try {
      const contacts = await ContactModel.find();
      return contacts;
    } catch (err) {
      console.log(err);
      throw new GraphQLError(err instanceof Error ? err.message : String(err));
    }
  },
  getContact: async (_: unknown, args: { id: string }) => {
    try {
      const contact = await ContactModel.findById(args.id);
      return contact;
    } catch (err) {
      console.log(err);
      throw new GraphQLError(err instanceof Error ? err.message : String(err));
    }
  },
};