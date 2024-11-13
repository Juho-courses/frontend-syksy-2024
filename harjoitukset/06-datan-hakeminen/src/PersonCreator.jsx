import { useState } from "react";
import usePeepsStore from "./stores/usePeepsStore";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function PersonCreator() {
  const [name, setName] = useState("");
  const [power, setPower] = useState("");
  const addPerson = usePeepsStore((state) => state.addPerson);

  const handleSave = () => {
    const p = { name, superpower: power };
    setName("");
    setPower("");

    addPerson(p);
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Add a superperson</CardTitle>
        <CardDescription>Want more? Add more.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="International man of mystery"
          />
          <Label htmlFor="superpower">Superpower</Label>
          <Input
            type="text"
            id="superpower"
            value={power}
            onChange={(e) => setPower(e.target.value)}
            placeholder="Mystery"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSave}>Save</Button>
      </CardFooter>
    </Card>
  );
}

export default PersonCreator;
