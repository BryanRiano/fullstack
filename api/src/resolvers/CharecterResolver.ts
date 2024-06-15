import { Resolver, Mutation, Arg, Query, Args, InputType, Field } from "type-graphql";
import  { Character } from "../entities/Character";

@Resolver()
export class CharacterResolver {

    @Query(() => [Character])
    characters() {
    return Character.findAll();
    }

    @Query(() => [Character])
    filterStatus(@Arg('status', () => String) status: string) {
      return Character.findAll({
        where: {
          status: status
        }
      })
    }

    @Query(() => [Character])
    filterSpecie(@Arg('specie', () => String) specie: string) {
      return Character.findAll({
        where: {
          specie: specie
        }
      })
    }

    @Query(() => [Character])
    filterGender(@Arg('gender', () => String) gender: string) {
      return Character.findAll({
        where: {
          gender: gender
        }
      })
    }

    @Query(() => [Character])
    filterName(@Arg('name', () => String) name: string) {
      return Character.findAll({
        where: {
          name: name
        }
      })
    }
}