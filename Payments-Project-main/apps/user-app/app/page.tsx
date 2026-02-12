import { Card } from "@repo/ui/card";

export default function Home() {
  return (
    <div>
      <Card
        title="Documentation"
        href="https://nextjs.org/docs"
        className="block rounded-lg border p-4 hover:bg-gray-100"
      >
        Learn more about Next.js and how it works.
      </Card>
      <h1 className="text-3xl font-bold underline flex justify-center">
        Hello world!
      </h1>
    </div>
  );
}
