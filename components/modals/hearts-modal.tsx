"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useHeartsModal } from "@/store/use-hearts-modal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const HeartsModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useHeartsModal();

  useEffect(() => setIsClient(true), []);

  const onClick = () => {
    close();
    router.push("/store")
  }

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
              src={"/mascot_bad.svg"}
              alt="Mascot"
              width={80}
              height={80}
            />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
            You ran out of hearts!
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Get pro for unlimited hearts, or purchase them in the store.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="flex flex-col w-full gap-y-4">
            <Button
              variant={"primary"}
              size={"lg"}
              className="w-full"
              onClick={onClick}
            >
              Get unlimited hearts
            </Button>
            <Button
              variant={"primaryOutline"}
              size={"lg"}
              className="w-full"
              onClick={close}
            >
              No thanks
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
