export * from "./event";
export * from "./client";
export * from "./server";

import * as c from "./client";
/** All the events Cadre game clients can send. */
export const ClientEvents = c;

import * as s from "./server";
/** All the events the Cadre game server can send. */
export const ServerEvents = s;
