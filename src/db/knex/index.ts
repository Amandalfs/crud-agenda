import { config  } from "dotenv";
import {knex as KnexConfig} from "knex";
import { configs } from "../../../knexfile";

const environment =  process.env.Node_Config || "development"


const db = KnexConfig(configs[environment]);

export default db;



