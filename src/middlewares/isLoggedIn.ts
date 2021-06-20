import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../repositories/implementations/UsersRepository/UsersRepository";

interface IPayload {
    sub: string;
}

export async function isLoggedIn(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new Error("Token missing!");
    }

    const [, token] = authHeader.split(" ");
    try {
        const { sub: user_id } = verify(token, "d864ac57da5a53b612ab0726a081100d") as IPayload;

        const usersRepository = new UsersRepository();

        const user = await usersRepository.findById(user_id);

        if (!user) {
            throw new Error("User doesn't exit!");
        }

        request.user = {
            id: user_id
        }

        next();
    } catch (err) {
        throw new Error("Invalid Token!");
    }
}