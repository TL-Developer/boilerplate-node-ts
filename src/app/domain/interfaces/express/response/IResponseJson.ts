import { Response } from "express";

interface Json {
  success: boolean,
  message: string | null,
  result: [],
  error: string | null,
}

type Send<T = Response> = (body?: Json) => T;

export interface IResponseJson extends Response {
  json: Send<this>;
}
