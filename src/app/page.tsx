import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-w-screen min-h-screen mx-auto flex justify-center items-center">
      <Button variant={"destructive"} size={"sm"}>
        <Trash2 />
      </Button>
    </div>
  );
}
