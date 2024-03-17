"use client";

import { useState } from "react";
import { Header } from "./header";

import { challengeOptions, challenges } from "@/db/schema";

type Props = {
  initialPercentage: number;
  initialHearts: number;
  initialLessonid: number;
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: (typeof challengeOptions.$inferSelect)[];
  })[];
  userSubscription: any; // TODO: REPLACE WITH SUBSCRIPTION
};

export const Quiz = ({
  initialPercentage,
  initialHearts,
  initialLessonid,
  initialLessonChallenges,
  userSubscription,
}: Props) => {
  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setPercentage] = useState(50 ||initialPercentage);

  return (
    <>
      <Header 
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      />
    </>
  )
};
