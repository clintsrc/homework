import { Tech, Matchup } from "../models/index.js";
// Import interfaces from models
import { ITech } from "../models/Tech.js";
import { IMatchup } from "../models/Matchup.js";

// Define types for the arguments
interface CreateMatchupArgs {
  tech1: string;
  tech2: string;
}

interface CreateVoteArgs {
  _id: string;
  techNum: number;
}

const resolvers = {
  Query: {
    tech: async (): Promise<ITech[]> => {
      // Return array of ITech
      try {
        return await Tech.find();
      } catch (error) {
        throw new Error("Error fetching technologies");
      }
    },

    matchups: async (
      _parent: any,
      { _id }: { _id?: string }
    ): Promise<IMatchup[]> => {
      try {
        if (_id) {
          const matchup = await Matchup.findById(_id);
          if (!matchup) throw new Error("Matchup not found");
          return [matchup];
        }
        return await Matchup.find();
      } catch (error) {
        throw new Error("Error fetching matchups");
      }
    }
  },

  Mutation: {
    createMatchup: async (
      _parent: any,
      { tech1, tech2 }: CreateMatchupArgs
    ): Promise<IMatchup> => {
      // Return IMatchup
      try {
        const newMatchup = new Matchup({
          tech1,
          tech2,
        });
        return await newMatchup.save(); // Create and save a new matchup
      } catch (error) {
        throw new Error("Error creating matchup");
      }
    },

    createVote: async (
      _parent: any,
      { _id, techNum }: CreateVoteArgs
    ): Promise<IMatchup> => {
      // Return IMatchup
      try {
        const matchup = await Matchup.findById(_id);
        if (!matchup) throw new Error("Matchup not found"); // Handle case where matchup doesn't exist

        if (techNum === 1) {
          matchup.tech1_votes += 1;
        } else if (techNum === 2) {
          matchup.tech2_votes += 1;
        } else {
          throw new Error(`Invalid tech number: ${techNum}. Must be 1 or 2.`);
        }

        return await matchup.save(); // Save the updated matchup with new votes
      } catch (error) {
        throw new Error("Error creating vote");
      }
    },
  },
};

export default resolvers;
