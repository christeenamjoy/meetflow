"use server"

import { db } from "@/lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server"

export const updateUsername = async (username: string) => {
    const normalizedUsername = username.trim().toLowerCase();
    const { userId } = await auth();
    if (!userId)
        throw new Error("user doesn't exist")

    //check if the username already exist
    const existingUser = await db.user.findUnique({ where: { username: normalizedUsername } })

    if (existingUser && existingUser.clerkUserId !== userId)
        throw new Error("Username is already Taken")

    // Update username in database
    await db.user.update({
        where: { clerkUserId: userId },
        data: { username: normalizedUsername },
    });
    const clerk = await clerkClient();

    // Update username in Clerk
    await clerk.users.updateUser(userId, {
        username: normalizedUsername,
    });

    return { success: true };
}