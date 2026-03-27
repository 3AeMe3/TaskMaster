import { Card } from "@/components/ui/card";

export default function TaskSummary() {
  return (
    <Card className="h-full  w-3/6 flex flex-row justify-between px-5">
      <div>
        <h3>Project estimate</h3>
      </div>
      <div>
        <h3>Our team</h3>
      </div>
    </Card>
  );
}
