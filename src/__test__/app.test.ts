import request from "supertest";
import { describe } from "node:test";
import app from "../app";
import { Response } from "express";

describe("Test express endpoint", () => {
  it("it should return 200 on health check", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });
});
