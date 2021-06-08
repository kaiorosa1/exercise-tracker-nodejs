import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (host = "database"): Promise<Connection> => {
  const defaultOptons = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptons, {
      host,
    })
  );
  
}