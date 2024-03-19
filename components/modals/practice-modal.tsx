"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { usePracticeModal } from "@/store/use-practice-modal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const PracticeModal = () => {
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = usePracticeModal();

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
              src={"/heart.svg"}
              alt="Hearts"
              width={100}
              height={100}
            />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
            Practice lesson
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Use practice lessons to regain hearts and points. You cannot loose
            hearts or points in practice lessons.
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
              I understand
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
