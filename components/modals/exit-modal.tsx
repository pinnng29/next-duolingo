"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useExitModal } from "@/store/use-exit-modal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const ExitModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useExitModal();

  useEffect(() => setIsClient(true), []);

  if (!isClient) {
    return null;
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={close}
    >
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center w-full mb-5">
            <Image
              src={"/mascot_sad.svg"}
              alt="Mascot"
              width={80}
              height={80}
            />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
            Wait, don&apos;t go!
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            You&apos;re about to leave the lesson. Are you sure?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="flex flex-col w-full gap-y-4">
            <Button
              variant={"primary"}
              size={"lg"}
              className="w-full"
              onClick={close}
            >
              Keep Learning
            </Button>
            <Button
              variant={"dangerOutline"}
              size={"lg"}
              className="w-full"
              onClick={() => {
                close();
                router.push("/learn")
              }}
            >
              End Session
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
