import { schema } from "normalizr";

export enum EntityKeys {
  Movies = "movies",
}

type TRelations = { [key: string]: schema.Entity<any> | schema.Array<any> };

function SchemaCreator(
  key: EntityKeys,
  relations?: TRelations,
  options?: schema.EntityOptions
) {
  const entity = new schema.Entity(key, relations, options);
  return {
    entity,
    list: new schema.Array(entity),
  };
}

export const MoviesSchema = SchemaCreator(EntityKeys.Movies);
