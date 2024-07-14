"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

export function SharePlaylist() {
  const currentUrl = window.location.href;
  const { toast } = useToast();
  const copylink = (link: string) => {
    navigator.clipboard.writeText(link);
    toast({
      title: "Copied to Clipboard.",
      duration: 2000,
    });
    setOpen(false);
  };

  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"secondary"} size={"lg"}>
          Share
        </Button>
      </DialogTrigger>
      <DialogContent className="w-4/5 flex flex-col justify-center items-center rounded-lg">
        <DialogHeader>
          <DialogTitle className="">Share Playlist</DialogTitle>
        </DialogHeader>

        <div
          onClick={() => copylink(currentUrl)}
          className="p-2 cursor-pointer flex gap-2 w-full bg-secondary rounded-lg"
        >
          <Copy />
          <p className="truncate text-sm">{currentUrl}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
