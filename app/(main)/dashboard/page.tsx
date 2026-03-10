"use client";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {useUser} from "@clerk/nextjs";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import z from "zod/v3";
import {useEffect} from "react";
import {useFetch} from "@/hooks/use-fetch";
import {updateUsername} from "@/actions/user";
import {BarLoader} from "react-spinners";

const usernameScheme = z.object({
  username: z
    .string()
    .min(3)
    .max(20)
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    ),
});

const Dashboard = () => {
  const {user, isLoaded} = useUser();

  const {
    register,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm({resolver: zodResolver(usernameScheme)});

  const {loading, error, fn: fnUpdateUsername} = useFetch(updateUsername);

  useEffect(() => {
    setValue("username", user?.username || "");
  }, [isLoaded]);

  const onSubmit: SubmitHandler<{username: string}> = (values) => {
    fnUpdateUsername(values.username);
  };

  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Welcome {user?.fullName}</CardTitle>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Unique Link</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-2 items-center">
              <span>{process.env.NEXT_PUBLIC_APP_URL}</span>
              <Input {...register("username")} placeholder="username" />
            </div>
            {errors && (
              <p className="text-red-400 text-sm py-2">
                {errors.username?.message}
              </p>
            )}

            {error && <p className="text-red-400 text-sm py-2">{error}</p>}

            {loading&& <BarLoader width={"100%"} className="mb-2"/>}
            <Button type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
