"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { api } from "@/convex/_generated/api";
import { useAction, useMutation } from "convex/react";
import { Id } from "@/convex/_generated/dataModel";

const formSchema = z.object({
  link: z.string().min(2).max(50),
});

export function AddSongDialog({
  playlist_id,
}: {
  playlist_id: Id<"playlist">;
}) {
  const addSongToPlaylist = useAction(api.media.addTitleToSong);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      link: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    addSongToPlaylist({
      link: values.link,
      playlist_id,
    });
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"lg"}>Add</Button>
      </DialogTrigger>
      <DialogContent className="w-4/5 rounded-lg">
        <DialogHeader>
          <DialogTitle>Add a Song</DialogTitle>
          <DialogDescription>
            Provide the link and we'll get the name for you!
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Link</FormLabel>
                  <FormControl>
                    <Input placeholder="https://youtube" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="submit">Add</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
