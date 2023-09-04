import HistoryCard from "@/components/quiz/HistoryCard";
import HotTopicsCard from "@/components/quiz/HotTopicsCard";
import QuizMeCard from "@/components/quiz/QuizCard";
import RecentActivityCard from "@/components/quiz/RecentActivityCard";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import React from "react";
import { signIn } from "next-auth/react";

type Props = {};

export const metadata = {
  title: "Quiz",
  description: "Challenge Yourself!",
};

const Dasboard = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    redirect("/");
  }

  return (
    <main className="p-8 mx-auto max-w-7xl">
      <div className="flex items-center">
        <h2 className="mr-2 text-3xl font-bold tracking-tight">Quiz</h2>
      </div>

      <div className="grid gap-4 mt-4 md:grid-cols-2">
        <QuizMeCard />
        <HistoryCard />
      </div>
      <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
        <HotTopicsCard />
        <RecentActivityCard />
      </div>
    </main>
  );
};

export default Dasboard;
