import {createClient} from "redis";
import * as dotenv from "dotenv";

dotenv.config();
export const Redis = createClient(
    {
    url: process.env.Redis_Url
    }
);